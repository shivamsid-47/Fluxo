
import { UserProfile, Post, UserRole, Comment, Message, Event, TicketValidation, OrganizerRequest } from '../types';

// --- Local Storage Keys ---
const KEYS = {
  USERS: 'BF_USERS',
  POSTS: 'BF_POSTS',
  MESSAGES: 'BF_MESSAGES',
  ORGANIZER_REQUESTS: 'BF_ORG_REQUESTS',
  DYNAMIC_EVENTS: 'BF_DYNAMIC_EVENTS'
};

const INITIAL_USERS: UserProfile[] = [
  {
    uid: 'super_admin',
    name: 'Squadran CEO',
    role: UserRole.SUPER_ADMIN,
    avatar: 'https://ui-avatars.com/api/?name=CEO',
    blocked: false
  },
  {
    uid: 'user_01',
    name: 'Rohan (User)',
    email: 'rohan@buildforge.io',
    role: UserRole.USER,
    avatar: 'https://picsum.photos/seed/student1/200',
    bio: 'Tech enthusiast attending events.',
    blocked: false
  },
  {
    uid: 'inst_01',
    name: 'Tech Institute',
    role: UserRole.INSTITUTION,
    email: 'admin@institute.edu',
    avatar: 'https://ui-avatars.com/api/?name=Institute',
    blocked: false
  }
];

const INITIAL_POSTS: Post[] = []; 

// --- MOCK EVENTS DATA ---
const MOCK_EVENTS: Event[] = [
  {
    id: 'evt_01',
    title: 'Tech Summit 2024',
    date: 'Oct 25, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium, Innovation Block',
    description: 'Join us for the biggest tech gathering of the year. Featuring speakers from Google, Microsoft, and leading startups. Topics include AI, Blockchain, and Future of Work.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    registrationLink: 'https://docs.google.com/forms',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7615367683!2d77.2273!3d28.6369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzEyLjgiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1632823829000!5m2!1sen!2sin'
  },
  {
    id: 'evt_02',
    title: 'Hackathon: Code for Good',
    date: 'Nov 12, 2024',
    time: '9:00 AM (24 Hours)',
    location: 'CS Dept Labs',
    description: 'A 24-hour coding marathon to solve real-world problems. Great prizes and internship opportunities for winners.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    registrationLink: 'https://docs.google.com/forms'
  },
  {
    id: 'evt_03',
    title: 'Startup Pitch Night',
    date: 'Nov 20, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'Incubation Center',
    description: 'Watch 10 selected startups pitch to VCs and Angel Investors. Networking dinner to follow.',
    imageUrl: 'https://images.unsplash.com/photo-1559223607-a43c990ed9bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    registrationLink: 'https://docs.google.com/forms'
  }
];

// --- Helper Functions ---
const getStorage = <T>(key: string, defaultData: T): T => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) {
      localStorage.setItem(key, JSON.stringify(defaultData));
      return defaultData;
    }
    return JSON.parse(stored);
  } catch (e) {
    console.error("Storage Error", e);
    return defaultData;
  }
};

const setStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Storage Write Error", e);
  }
};

// --- Service Methods ---

export const db = {
  // --- Squadran Super Admin ---
  loginSuperAdmin: (password: string): { success: boolean, user?: UserProfile } => {
    if (password === 'squadran_root') {
        const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
        let admin = users.find(u => u.role === UserRole.SUPER_ADMIN);
        if (!admin) {
            admin = INITIAL_USERS[0];
            users.push(admin);
            setStorage(KEYS.USERS, users);
        }
        return { success: true, user: admin };
    }
    return { success: false };
  },

  // --- Auth (Global) ---

  // USER REGISTRATION
  signupUser: (data: { name: string, email: string, phone: string }): UserProfile => {
    const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
    const newUser: UserProfile = {
      uid: `user_${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: UserRole.USER,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}`,
      blocked: false
    };
    users.push(newUser);
    setStorage(KEYS.USERS, users);
    return newUser;
  },

  // ORGANIZER REGISTRATION FLOW
  submitOrganizerRequest: (data: { name: string, email: string, phone: string }): void => {
      const requests = getStorage<OrganizerRequest[]>(KEYS.ORGANIZER_REQUESTS, []);
      const newReq: OrganizerRequest = {
          id: `req_${Date.now()}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          status: 'PENDING',
          timestamp: Date.now()
      };
      requests.push(newReq);
      setStorage(KEYS.ORGANIZER_REQUESTS, requests);
  },

  getOrganizerRequests: (): OrganizerRequest[] => {
      return getStorage<OrganizerRequest[]>(KEYS.ORGANIZER_REQUESTS, []);
  },

  approveOrganizerRequest: (reqId: string): void => {
      const requests = getStorage<OrganizerRequest[]>(KEYS.ORGANIZER_REQUESTS, []);
      const reqIndex = requests.findIndex(r => r.id === reqId);
      
      if (reqIndex !== -1) {
          const req = requests[reqIndex];
          // Update Status
          requests[reqIndex].status = 'APPROVED';
          setStorage(KEYS.ORGANIZER_REQUESTS, requests);

          // Create User Account
          const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
          const newUser: UserProfile = {
              uid: `org_${Date.now()}`,
              name: req.name,
              email: req.email,
              role: UserRole.INSTITUTION,
              avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(req.name)}`,
              blocked: false
          };
          users.push(newUser);
          setStorage(KEYS.USERS, users);
      }
  },

  rejectOrganizerRequest: (reqId: string): void => {
      const requests = getStorage<OrganizerRequest[]>(KEYS.ORGANIZER_REQUESTS, []);
      const reqIndex = requests.findIndex(r => r.id === reqId);
      if (reqIndex !== -1) {
          requests[reqIndex].status = 'REJECTED';
          setStorage(KEYS.ORGANIZER_REQUESTS, requests);
      }
  },

  // INSTITUTION/ORGANIZER LOGIN
  loginInstitution: (email: string, accessKey: string): { user: UserProfile | null, error?: string } => {
     const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
     const existingUser = users.find(u => u.email === email && u.role === UserRole.INSTITUTION);

     // For now, simple mock password check (assuming they set it to 'admin' or we default it)
     // In a real app, this would be a proper password hash check
     if (accessKey === 'admin') {
         if (existingUser) {
             if (existingUser.blocked) return { user: null, error: "Account Blocked/Deboarded by Super Admin" };
             return { user: existingUser };
         } else {
             return { user: null, error: "Organizer not found. Please register first." };
         }
     }
     return { user: null, error: "Invalid Access Key (Default: admin)" };
  },

  // Generic Login for User
  loginUserByEmail: (email: string): { user: UserProfile | null, error?: string } => {
    const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
    const user = users.find(u => u.email === email);
    
    if (user) {
        if (user.blocked) return { user: null, error: "Access Denied: Account Deboarded/Blocked." };
        return { user };
    }
    return { user: null, error: "User not found. Please Register." };
  },

  updateUser: (uid: string, data: Partial<UserProfile>): UserProfile | null => {
    let users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
    const index = users.findIndex(u => u.uid === uid);
    if (index !== -1) {
      users[index] = { ...users[index], ...data };
      setStorage(KEYS.USERS, users);
      return users[index];
    }
    return null;
  },

  // --- Strict Super Admin / Logic Helpers ---

  adminGetAllUsers: (): UserProfile[] => {
    const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
    return users.filter(u => u.role !== UserRole.SUPER_ADMIN);
  },

  adminToggleBlockUser: (uid: string): UserProfile | undefined => {
    let users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
    const user = users.find(u => u.uid === uid);
    if (user) {
      user.blocked = !user.blocked;
      setStorage(KEYS.USERS, users);
      return user;
    }
    return undefined;
  },

  getUserById: (uid: string): UserProfile | undefined => {
    const users = getStorage<UserProfile[]>(KEYS.USERS, INITIAL_USERS);
    return users.find(u => u.uid === uid);
  },

  // --- EVENTS LOGIC ---

  getEvents: (): Promise<Event[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const dynamicEvents = getStorage<Event[]>(KEYS.DYNAMIC_EVENTS, []);
            // Merge Mock events and Dynamic events
            resolve([...MOCK_EVENTS, ...dynamicEvents]);
        }, 500);
    });
  },

  createEvent: (eventData: Omit<Event, 'id'>): Event => {
      const dynamicEvents = getStorage<Event[]>(KEYS.DYNAMIC_EVENTS, []);
      const newEvent: Event = {
          ...eventData,
          id: `evt_dyn_${Date.now()}`
      };
      dynamicEvents.push(newEvent);
      setStorage(KEYS.DYNAMIC_EVENTS, dynamicEvents);
      return newEvent;
  },

  getEventById: (id: string): Event | undefined => {
      const dynamicEvents = getStorage<Event[]>(KEYS.DYNAMIC_EVENTS, []);
      const allEvents = [...MOCK_EVENTS, ...dynamicEvents];
      return allEvents.find(e => e.id === id);
  },

  validateTicket: (qrString: string): Promise<TicketValidation> => {
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
