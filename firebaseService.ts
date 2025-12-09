import { auth, db as firestore } from './firebaseConfig';
import {
    collection, doc, getDoc, setDoc, getDocs, addDoc, updateDoc,
    query, where, serverTimestamp
} from 'firebase/firestore';
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    updateProfile, GoogleAuthProvider, signInWithPopup
} from 'firebase/auth';
import { UserProfile, UserRole, Event, TicketValidation, OrganizerRequest } from '../types';

// --- Constants ---
const USERS_COLLECTION = 'users';
const EVENTS_COLLECTION = 'events';
const REQUESTS_COLLECTION = 'organizer_requests';

// --- Helper to map Firestore doc to UserProfile ---
const mapUserDoc = (docSnap: any): UserProfile => {
    const data = docSnap.data();
    return {
        uid: docSnap.id,
        ...data
    } as UserProfile;
};

export const dbService = {
    // --- Squadran Super Admin ---
    loginSuperAdmin: async (password: string): Promise<{ success: boolean, user?: UserProfile }> => {
        // For now, keeping the hardcoded check for simplicity as requested, 
        // but in a real app this should be a secure server-side check or a specific admin account login.
        if (password === 'squadran_root') {
            // Return a mock admin profile. 
            // Ideally, we should fetch this from a 'admins' collection or similar.
            const adminUser: UserProfile = {
                uid: 'super_admin',
                name: 'Squadran CEO',
                role: UserRole.SUPER_ADMIN,
                avatar: 'https://ui-avatars.com/api/?name=CEO',
                blocked: false
            };
            return { success: true, user: adminUser };
        }
        return { success: false };
    },

    // --- Auth (Global) ---

    // Google Login
    loginWithGoogle: async (): Promise<{ user: UserProfile | null, error?: string }> => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check if user exists in Firestore
            const userDoc = await getDoc(doc(firestore, USERS_COLLECTION, user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data() as UserProfile;
                if (userData.blocked) return { user: null, error: "Account Blocked." };
                return { user: { ...userData, uid: user.uid } };
            } else {
                // Create new user profile for Google Sign-In users
                const newUser: UserProfile = {
                    uid: user.uid,
                    name: user.displayName || 'Google User',
                    email: user.email || '',
                    role: UserRole.USER, // Default to USER
                    avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}`,
                    blocked: false
                };
                await setDoc(doc(firestore, USERS_COLLECTION, user.uid), newUser);
                return { user: newUser };
            }
        } catch (error: any) {
            return { user: null, error: error.message };
        }
    },

    // USER REGISTRATION
    signupUser: async (data: { name: string, email: string, phone: string }, password?: string): Promise<UserProfile> => {
        if (!password) throw new Error("Password is required for Firebase Auth");

        const userCredential = await createUserWithEmailAndPassword(auth, data.email, password);
        const user = userCredential.user;

        const newUser: UserProfile = {
            uid: user.uid,
            name: data.name,
            email: data.email,
            phone: data.phone,
            role: UserRole.USER,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}`,
            blocked: false
        };

        // Save extra details to Firestore
        await setDoc(doc(firestore, USERS_COLLECTION, user.uid), newUser);

        return newUser;
    },

    // ORGANIZER REGISTRATION FLOW
    submitOrganizerRequest: async (data: { name: string, email: string, phone: string }, password?: string): Promise<void> => {
        if (!password) throw new Error("Password is required for Organizer Registration");

        // 1. Create Auth User
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, password);
        const uid = userCredential.user.uid;

        // 2. Create User Profile (Blocked initially)
        const newUser: UserProfile = {
            uid: uid,
            name: data.name,
            email: data.email,
            phone: data.phone,
            role: UserRole.INSTITUTION,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}`,
            blocked: true // Blocked until approved
        };
        await setDoc(doc(firestore, USERS_COLLECTION, uid), newUser);

        // 3. Create Request linked to UID
        await addDoc(collection(firestore, REQUESTS_COLLECTION), {
            ...data,
            uid: uid,
            status: 'PENDING',
            timestamp: Date.now()
        });
    },

    getOrganizerRequests: async (): Promise<OrganizerRequest[]> => {
        const q = query(collection(firestore, REQUESTS_COLLECTION));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as OrganizerRequest));
    },

    approveOrganizerRequest: async (reqId: string): Promise<void> => {
        const reqRef = doc(firestore, REQUESTS_COLLECTION, reqId);
        const reqSnap = await getDoc(reqRef);

        if (reqSnap.exists()) {
            const reqData = reqSnap.data() as OrganizerRequest;

            // Update Request Status
            await updateDoc(reqRef, { status: 'APPROVED' });

            // Unblock the user if they exist
            if (reqData.uid) {
                const userRef = doc(firestore, USERS_COLLECTION, reqData.uid);
                await updateDoc(userRef, { blocked: false });
            } else {
                // Fallback for old requests without UID (Legacy support)
                // We can't create an auth user without password, so we just create a placeholder doc
                const tempUid = `org_${Date.now()}`;
                const newUser: UserProfile = {
                    uid: tempUid,
                    name: reqData.name,
                    email: reqData.email,
                    role: UserRole.INSTITUTION,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(reqData.name)}`,
                    blocked: false
                };
                await setDoc(doc(firestore, USERS_COLLECTION, tempUid), newUser);
            }
        }
    },

    rejectOrganizerRequest: async (reqId: string): Promise<void> => {
        const reqRef = doc(firestore, REQUESTS_COLLECTION, reqId);
        await updateDoc(reqRef, { status: 'REJECTED' });
    },

    // INSTITUTION/ORGANIZER LOGIN
    loginInstitution: async (email: string, password: string): Promise<{ user: UserProfile | null, error?: string }> => {
        // In Firebase, this should be a normal login.
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            const userDoc = await getDoc(doc(firestore, USERS_COLLECTION, uid));
            if (userDoc.exists()) {
                const userData = userDoc.data() as UserProfile;
                if (userData.role !== UserRole.INSTITUTION) {
                    return { user: null, error: "Not an authorized institution account." };
                }
                if (userData.blocked) {
                    return { user: null, error: "Account Blocked." };
                }
                return { user: { ...userData, uid } };
            }
            return { user: null, error: "User profile not found." };
        } catch (e: any) {
            return { user: null, error: e.message };
        }
    },

    // Generic Login for User
    loginUserByEmail: async (email: string, password?: string): Promise<{ user: UserProfile | null, error?: string }> => {
        if (!password) return { user: null, error: "Password required." };

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            const userDoc = await getDoc(doc(firestore, USERS_COLLECTION, uid));
            if (userDoc.exists()) {
                const userData = userDoc.data() as UserProfile;
                if (userData.blocked) return { user: null, error: "Account Blocked." };
                return { user: { ...userData, uid } };
            }
            // Fallback if user exists in Auth but not Firestore (shouldn't happen if signup works)
            return { user: { uid, name: 'User', email, role: UserRole.USER }, error: "Profile missing" };
        } catch (e: any) {
            return { user: null, error: e.message };
        }
    },

    updateUser: async (uid: string, data: Partial<UserProfile>): Promise<UserProfile | null> => {
        const userRef = doc(firestore, USERS_COLLECTION, uid);
        await updateDoc(userRef, data);
        const snap = await getDoc(userRef);
        return mapUserDoc(snap);
    },

    // --- Strict Super Admin / Logic Helpers ---

    adminGetAllUsers: async (): Promise<UserProfile[]> => {
        const q = query(collection(firestore, USERS_COLLECTION));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs
            .map(d => mapUserDoc(d))
            .filter(u => u.role !== UserRole.SUPER_ADMIN);
    },

    adminToggleBlockUser: async (uid: string): Promise<UserProfile | undefined> => {
        const userRef = doc(firestore, USERS_COLLECTION, uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
            const currentStatus = snap.data().blocked || false;
            await updateDoc(userRef, { blocked: !currentStatus });
            return { ...mapUserDoc(snap), blocked: !currentStatus };
        }
        return undefined;
    },

    getUserById: async (uid: string): Promise<UserProfile | undefined> => {
        const snap = await getDoc(doc(firestore, USERS_COLLECTION, uid));
        if (snap.exists()) return mapUserDoc(snap);
        return undefined;
    },

    // --- EVENTS LOGIC ---

    getEvents: async (): Promise<Event[]> => {
        const q = query(collection(firestore, EVENTS_COLLECTION));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Event));
    },

    createEvent: async (eventData: Omit<Event, 'id'>): Promise<Event> => {
        const docRef = await addDoc(collection(firestore, EVENTS_COLLECTION), eventData);
        return {
            ...eventData,
            id: docRef.id
        };
    },

    getEventById: async (id: string): Promise<Event | undefined> => {
        const snap = await getDoc(doc(firestore, EVENTS_COLLECTION, id));
        if (snap.exists()) {
            return { id: snap.id, ...snap.data() } as Event;
        }
        return undefined;
    },

    validateTicket: async (qrString: string): Promise<TicketValidation> => {
        // Mock Logic for now as per instructions
        return new Promise((resolve) => {
            setTimeout(() => {
                if (qrString.includes("TICKET")) {
                    if (qrString.includes("USED")) {
                        resolve({ isValid: false, status: 'USED', eventTitle: 'Tech Summit 2024' });
                    } else {
                        resolve({ isValid: true, status: 'VALID', attendeeName: 'John Doe', eventTitle: 'Tech Summit 2024' });
                    }
                } else {
                    resolve({ isValid: false, status: 'INVALID' });
                }
            }, 800);
        });
    }
};

// Export as 'db' to match the existing import in App.tsx
export const db = dbService;
