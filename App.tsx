
import React, { useState, useEffect, useRef } from 'react';
import { UserRole, ViewType, UserProfile, FeatureType, Feature, Event, TicketValidation, OrganizerRequest } from './types';
import { db } from './services/firebaseService';
import {
    Users, LogOut, LayoutDashboard, Settings, Home, ArrowRight, ArrowLeft,
    MapPin, QrCode, BarChart, Calendar, CheckCircle, XCircle, X,
    Shield, Rocket, Lock, Camera, Edit2, Send, Lightbulb, RefreshCcw, GraduationCap,
    Ticket, Award, PieChart, PlusCircle, Clock, FileText
} from 'lucide-react';
import { PWAInstallModal } from './components/PWAInstallModal';

// --- Constants ---
const SQUADRAN_LOGO_URL = "./logo squadran.jpg";
const SUPPORT_EMAIL_PLACEHOLDER = "support@fluxo.io";

// --- Animation Component ---
const CursorBloop = () => {
    const [bloops, setBloops] = useState<{ x: number, y: number, id: number, color: string }[]>([]);

    useEffect(() => {
        let counter = 0;
        const colors = ['#FF725E', '#4AA4F2', '#6C63FF', '#43D9AD'];

        const handleMouseMove = (e: MouseEvent) => {
            if (Math.random() > 0.8) return;

            const newBloop = {
                x: e.clientX,
                y: e.clientY,
                id: counter++,
                color: colors[Math.floor(Math.random() * colors.length)]
            };

            setBloops(prev => [...prev.slice(-15), newBloop]);

            setTimeout(() => {
                setBloops(prev => prev.filter(b => b.id !== newBloop.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {bloops.map(bloop => (
                <div
                    key={bloop.id}
                    className="absolute rounded-full animate-ping"
                    style={{
                        left: bloop.x,
                        top: bloop.y,
                        width: '10px',
                        height: '10px',
                        backgroundColor: bloop.color,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                    }}
                />
            ))}
        </div>
    );
};

// --- Components ---

// --- EVENT COMPONENTS ---

const EventsListView: React.FC<{ onViewDetails: (id: string) => void }> = ({ onViewDetails }) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.getEvents().then(data => {
            setEvents(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="max-w-6xl mx-auto animate-fade-in-up">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 mb-2">Upcoming Events</h1>
                <p className="text-slate-500 font-bold">Discover workshops, seminars, and tech talks.</p>
            </div>

            {loading ? (
                <div className="flex justify-center p-12"><div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div></div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map(event => (
                        <div key={event.id} onClick={() => onViewDetails(event.id)} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black text-slate-800 shadow-lg">
                                    {event.date}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-black text-slate-800 mb-2 leading-tight">{event.title}</h3>
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wide mb-4">
                                    <MapPin size={14} className="text-brand-orange" /> {event.location}
                                </div>
                                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">{event.description}</p>
                                <button className="w-full py-3 bg-slate-50 text-slate-800 rounded-xl font-bold text-sm hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center gap-2">
                                    View Details <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const CreateEventView: React.FC<{ currentUser: UserProfile, onSuccess: () => void }> = ({ currentUser, onSuccess }) => {
    const [formData, setFormData] = useState({
        title: '', date: '', time: '', location: '', description: '', imageUrl: '', registrationLink: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        db.createEvent({
            ...formData,
            organizerId: currentUser.uid,
            imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3'
        });
        alert("Event Published Successfully!");
        onSuccess();
    };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl font-black text-slate-900 mb-6">Create New Event</h1>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Event Title</label>
                            <input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl font-bold" placeholder="Annual Tech Meet" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Date</label>
                            <input required value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl font-bold" placeholder="Oct 25, 2024" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Time</label>
                            <input required value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl font-bold" placeholder="10:00 AM - 2:00 PM" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Location</label>
                            <input required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl font-bold" placeholder="Main Hall" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Description</label>
                        <textarea required rows={4} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl font-medium" placeholder="Event details..." />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Cover Image URL</label>
                        <input value={formData.imageUrl} onChange={e => setFormData({ ...formData, imageUrl: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl text-sm" placeholder="https://..." />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Registration Link (Google Form)</label>
                        <input required value={formData.registrationLink} onChange={e => setFormData({ ...formData, registrationLink: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl text-sm" placeholder="https://forms.google.com/..." />
                    </div>
                    <button type="submit" className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold hover:bg-orange-600 shadow-lg mt-4">
                        Publish Event
                    </button>
                </form>
            </div>
        </div>
    );
};

const EventDetailsView: React.FC<{ eventId: string, onBack: () => void }> = ({ eventId, onBack }) => {
    const [event, setEvent] = useState<Event | undefined>(undefined);

    useEffect(() => {
        db.getEventById(eventId).then(data => {
            setEvent(data);
        });
    }, [eventId]);

    if (!event) return <div className="p-10 text-center">Loading Event...</div>;

    return (
        <div className="max-w-5xl mx-auto animate-fade-in-up pb-20">
            <button onClick={onBack} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-800 transition-colors">
                <ArrowLeft size={16} /> Back to Events
            </button>

            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                {/* Hero Image */}
                <div className="h-64 md:h-80 w-full relative">
                    <img src={event.imageUrl} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8 md:p-12">
                        <div>
                            <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Event</span>
                            <h1 className="text-3xl md:text-5xl font-black text-white mb-2">{event.title}</h1>
                            <div className="flex flex-wrap gap-4 text-white/90 font-bold text-sm">
                                <span className="flex items-center gap-2"><Calendar size={18} /> {event.date}</span>
                                <span className="flex items-center gap-2"><LayoutDashboard size={18} /> {event.time}</span>
                                <span className="flex items-center gap-2"><MapPin size={18} /> {event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 mb-4">About the Event</h3>
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{event.description}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-black text-slate-800 mb-4">Location</h3>
                            <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                                {event.mapEmbedUrl ? (
                                    <iframe src={event.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">Map unavailable</div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                            <h3 className="font-black text-slate-800 mb-2">Registration</h3>
                            <p className="text-sm text-slate-500 mb-6">Secure your spot now. Tickets are sent via email.</p>
                            <a href={event.registrationLink} target="_blank" rel="noreferrer" className="block w-full py-4 bg-brand-blue text-white text-center rounded-xl font-bold shadow-lg hover:bg-blue-600 hover:scale-105 transition-all mb-3">
                                Register Now
                            </a>
                            <div className="text-center text-[10px] text-slate-400 font-bold">
                                Powered by Google Forms & Autocrat
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const QRScannerView: React.FC = () => {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState<TicketValidation | null>(null);
    const [manualCode, setManualCode] = useState("");

    const handleSimulateScan = () => {
        setScanning(true);
        setResult(null);
        // Simulate camera delay and scan
        setTimeout(() => {
            const mockScannedCode = manualCode || "TICKET-12345";

            db.validateTicket(mockScannedCode).then(res => {
                setResult(res);
                setScanning(false);
            });
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto animate-fade-in-up text-center">
            <h1 className="text-3xl font-black text-slate-900 mb-8">Ticket Scanner</h1>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <div className="w-full h-64 bg-slate-900 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                    {scanning ? (
                        <>
                            <div className="absolute inset-0 bg-black/50 z-10"></div>
                            <div className="w-full h-1 bg-green-500 absolute top-0 animate-[float_2s_linear_infinite] shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20"></div>
                            <div className="text-white z-30 font-bold animate-pulse">Scanning Camera Feed...</div>
                        </>
                    ) : (
                        <Camera size={64} className="text-slate-700" />
                    )}
                </div>

                {!scanning && !result && (
                    <div className="space-y-4">
                        <p className="text-slate-500 font-bold text-sm">Point camera at attendee's QR Code</p>
                        <button onClick={handleSimulateScan} className="px-8 py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-slate-800 flex items-center gap-2 mx-auto">
                            <QrCode size={20} /> Activate Scanner
                        </button>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Manual Entry (Test)</p>
                            <div className="flex gap-2 max-w-xs mx-auto">
                                <input
                                    value={manualCode}
                                    onChange={(e) => setManualCode(e.target.value)}
                                    placeholder="TICKET-XXXX"
                                    className="flex-1 p-3 bg-slate-50 rounded-xl font-bold text-center uppercase"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {result && (
                    <div className={`p-6 rounded-2xl ${result.status === 'VALID' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                        {result.status === 'VALID' ? (
                            <>
                                <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                                <h3 className="text-xl font-black text-green-700">Access Granted</h3>
                                <p className="text-green-600 font-bold mt-1">{result.attendeeName}</p>
                                <p className="text-xs text-green-500 font-bold uppercase mt-2">{result.eventTitle}</p>
                            </>
                        ) : (
                            <>
                                <XCircle size={48} className="text-red-500 mx-auto mb-3" />
                                <h3 className="text-xl font-black text-red-700">Access Denied</h3>
                                <p className="text-red-600 font-bold mt-1">{result.status === 'USED' ? 'Ticket Already Used' : 'Invalid Ticket Code'}</p>
                            </>
                        )}
                        <button onClick={() => setResult(null)} className="mt-6 text-sm font-bold underline opacity-60 hover:opacity-100">Scan Next</button>
                    </div>
                )}
            </div>
        </div>
    );
};

const AnalyticsView: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto animate-fade-in-up h-[80vh] flex flex-col">
            <h1 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><BarChart size={32} className="text-brand-blue" /> Event Analytics</h1>
            <div className="flex-1 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                    <BarChart size={64} className="mb-4 opacity-20" />
                    <p className="font-bold">Looker Studio Dashboard Embedding...</p>
                    <p className="text-xs mt-2">(Connect your Google Sheet Data Source here)</p>
                </div>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://lookerstudio.google.com/embed/reporting/0B5ff6..."
                    frameBorder="0"
                    style={{ border: 0, position: 'relative', zIndex: 10 }}
                    allowFullScreen
                    className="opacity-0 hover:opacity-100 transition-opacity"
                ></iframe>
            </div>
        </div>
    );
};

const UserDashboard: React.FC<{ currentUser: UserProfile, onProfileUpdate: (user: UserProfile) => void }> = ({ currentUser, onProfileUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(currentUser.name);
    const [editBio, setEditBio] = useState(currentUser.bio || '');
    const [editAvatar, setEditAvatar] = useState(currentUser.avatar || '');

    const handleSaveProfile = () => {
        db.updateUser(currentUser.uid, { name: editName, bio: editBio, avatar: editAvatar }).then(updated => {
            if (updated) {
                onProfileUpdate(updated);
                setIsEditing(false);
            }
        });
    };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 mb-8 relative overflow-hidden">
                <div className="flex flex-col items-center gap-6 relative z-10 text-center">
                    <div className="w-32 h-32 rounded-full bg-slate-100 p-1 border-4 border-brand-orange/20 overflow-hidden shadow-lg">
                        <img src={currentUser.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-800">{currentUser.name}</h2>
                        <p className="text-brand-orange font-bold uppercase tracking-wide text-sm mt-1">
                            {currentUser.role === UserRole.INSTITUTION ? 'Event Organizer' : 'Registered User'}
                        </p>
                        {currentUser.bio && <p className="text-slate-500 mt-4 text-base font-medium max-w-lg mx-auto">{currentUser.bio}</p>}
                    </div>
                    <button onClick={() => setIsEditing(true)} className="py-2 px-8 bg-slate-800 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-700 transition-colors">
                        <Edit2 size={16} /> Edit Profile
                    </button>
                </div>
            </div>

            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="bg-white rounded-[2rem] p-8 w-full max-w-md shadow-2xl">
                        <h3 className="text-xl font-black mb-6">Edit Profile</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Name</label>
                                <input value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full p-3 bg-slate-50 rounded-xl font-bold" placeholder="Name" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Profile Picture URL</label>
                                <input value={editAvatar} onChange={(e) => setEditAvatar(e.target.value)} className="w-full p-3 bg-slate-50 rounded-xl text-sm" placeholder="https://..." />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 ml-2 mb-1 block uppercase">Bio</label>
                                <textarea value={editBio} onChange={(e) => setEditBio(e.target.value)} rows={3} className="w-full p-3 bg-slate-50 rounded-xl font-medium" placeholder="Bio" />
                            </div>
                            <button onClick={handleSaveProfile} className="w-full py-3 bg-brand-orange text-white rounded-xl font-bold">Save Changes</button>
                            <button onClick={() => setIsEditing(false)} className="w-full py-3 text-slate-400 font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const GoogleOnboardingModal: React.FC<{
    user: any,
    onSelect: (role: UserRole) => void,
    onCancel: () => void
}> = ({ user, onSelect, onCancel }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 w-full max-w-lg shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange to-brand-blue"></div>

                <div className="text-center space-y-8 animate-fade-in-up">
                    <div>
                        <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                            <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900">Welcome!</h2>
                        <p className="text-slate-500 font-bold mt-2">How will you use Fluxo?</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <button
                            onClick={() => onSelect(UserRole.USER)}
                            className="p-6 rounded-2xl border-2 border-slate-100 hover:border-brand-blue hover:bg-blue-50/50 transition-all flex items-center gap-4 text-left group"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center group-hover:scale-110 transition-transform"><Users size={24} /></div>
                            <div>
                                <h3 className="font-black text-lg text-slate-800">Attend Events</h3>
                                <p className="text-slate-400 text-xs font-bold">Discover and register for campus events</p>
                            </div>
                            <ArrowRight className="ml-auto text-slate-300 group-hover:text-brand-blue" />
                        </button>

                        <button
                            onClick={() => onSelect(UserRole.INSTITUTION)}
                            className="p-6 rounded-2xl border-2 border-slate-100 hover:border-brand-orange hover:bg-orange-50/50 transition-all flex items-center gap-4 text-left group"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform"><LayoutDashboard size={24} /></div>
                            <div>
                                <h3 className="font-black text-lg text-slate-800">Organize Events</h3>
                                <p className="text-slate-400 text-xs font-bold">Host events for your organization</p>
                            </div>
                            <ArrowRight className="ml-auto text-slate-300 group-hover:text-brand-orange" />
                        </button>
                    </div>

                    <button onClick={onCancel} className="text-slate-400 font-bold hover:text-slate-600 text-sm">Cancel</button>
                </div>
            </div>
        </div>
    );
};

// Start Helper for Icon
const UserRoleIcon = ({ role, size }: { role: UserRole, size: number }) => {
    if (role === UserRole.INSTITUTION) return <LayoutDashboard size={size} />;
    return <Users size={size} />;
};


const AdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'USERS' | 'REQUESTS'>('USERS');
    const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
    const [requests, setRequests] = useState<OrganizerRequest[]>([]);

    useEffect(() => {
        db.adminGetAllUsers().then(setAllUsers);
        db.getOrganizerRequests().then(setRequests);
    }, []);

    const handleToggleBlock = (uid: string) => {
        db.adminToggleBlockUser(uid).then(updatedUser => {
            if (updatedUser) setAllUsers(prev => prev.map(u => u.uid === uid ? updatedUser : u));
        });
    };

    const handleApprove = (reqId: string) => {
        db.approveOrganizerRequest(reqId).then(() => {
            db.getOrganizerRequests().then(setRequests);
            db.adminGetAllUsers().then(setAllUsers);
        });
    };

    const handleReject = (reqId: string) => {
        db.rejectOrganizerRequest(reqId).then(() => {
            db.getOrganizerRequests().then(setRequests);
        });
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2"><Shield className="text-brand-orange" /> Super Admin Governance</h2>
                <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
                    <button onClick={() => setActiveTab('USERS')} className={`px-4 py-2 rounded-lg text-sm font-bold ${activeTab === 'USERS' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}>Boarded Users</button>
                    <button onClick={() => setActiveTab('REQUESTS')} className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 ${activeTab === 'REQUESTS' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}>
                        Organizer Requests {requests.filter(r => r.status === 'PENDING').length > 0 && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
                    </button>
                </div>
            </div>

            {activeTab === 'USERS' ? (
                <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50">
                            <tr><th className="p-4 text-xs font-black text-slate-400 uppercase">User</th><th className="p-4 text-right">Boarding Status</th></tr>
                        </thead>
                        <tbody>
                            {allUsers.map(user => (
                                <tr key={user.uid} className="border-b border-slate-50">
                                    <td className="p-4 font-bold text-slate-800 flex items-center gap-3">
                                        <img src={user.avatar} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <div>{user.name}</div>
                                            <div className="text-xs text-slate-400 font-normal">{user.role === UserRole.INSTITUTION ? 'Event Organizer' : 'User'}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-right flex gap-2 justify-end">
                                        <button onClick={() => handleToggleBlock(user.uid)} className={`px-3 py-1 rounded-lg text-xs font-bold border ${user.blocked ? 'bg-red-50 border-red-200 text-red-600' : 'bg-emerald-50 border-emerald-200 text-emerald-600'}`}>
                                            {user.blocked ? 'DEBOARDED (BANNED)' : 'BOARDED (ACTIVE)'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="space-y-4">
                    {requests.length === 0 && <div className="text-center p-8 text-slate-400 font-bold">No requests found.</div>}
                    {requests.map(req => (
                        <div key={req.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex justify-between items-center">
                            <div>
                                <h3 className="font-black text-slate-800">{req.name}</h3>
                                <p className="text-sm text-slate-500">{req.email}</p>
                                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Status: <span className={req.status === 'APPROVED' ? 'text-green-500' : req.status === 'REJECTED' ? 'text-red-500' : 'text-orange-500'}>{req.status}</span></div>
                            </div>
                            {req.status === 'PENDING' && (
                                <div className="flex gap-2">
                                    <button onClick={() => handleApprove(req.id)} className="px-4 py-2 bg-green-500 text-white rounded-xl font-bold text-xs hover:bg-green-600">Approve & Board</button>
                                    <button onClick={() => handleReject(req.id)} className="px-4 py-2 bg-slate-200 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-300">Reject</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
    const [currentView, setCurrentView] = useState<ViewType>(ViewType.EVENTS_LIST);
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

    // Registration State
    const [registrationRole, setRegistrationRole] = useState<'USER' | 'ORGANIZER_LOGIN' | 'ORGANIZER_REGISTER' | null>(null);

    // Super Admin Login Modal State
    const [showRootLogin, setShowRootLogin] = useState(false);
    const [rootPassword, setRootPassword] = useState('');

    // Form Fields
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', password: '', orgName: ''
    });
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

    const updateForm = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (contactForm.name && contactForm.email && contactForm.message) {
            alert(`Message sent to ${SUPPORT_EMAIL_PLACEHOLDER}. We will contact you shortly.`);
            setContactForm({ name: '', email: '', message: '' });
        } else {
            alert("Please fill all fields");
        }
    };

    const handleSubmitAuth = () => {
        // --- GOOGLE SIGN-UP FLOW ---
        if (googleOnboarding) {
            if (registrationRole === 'USER') {
                if (!formData.name) return alert("Name is required");
                /* Phone is optional for user, logic removed */

                db.registerGoogleUser(googleOnboarding.user.uid, formData.email, {
                    name: formData.name,
                    phone: formData.phone,
                    role: UserRole.USER
                }).then(res => {
                    if (res.user) {
                        setCurrentUser(res.user);
                        setCurrentView(ViewType.EVENTS_LIST);
                        setGoogleOnboarding(null);
                        setRegistrationRole(null);
                        alert("Welcome to Fluxo!");
                    } else {
                        alert(res.error || "Registration Failed");
                    }
                });
            }
            else if (registrationRole === 'ORGANIZER_REGISTER') {
                if (!formData.orgName) return alert("Organization Name is required");
                if (!formData.phone) return alert("Phone number is required for Organizers");

                db.registerGoogleUser(googleOnboarding.user.uid, formData.email, {
                    name: formData.orgName,
                    phone: formData.phone,
                    role: UserRole.INSTITUTION
                }).then(res => {
                    if (res.user) {
                        alert("Account Created! Pending Super Admin Approval.");
                        setGoogleOnboarding(null);
                        setRegistrationRole(null);
                    } else {
                        alert(res.error || "Registration Failed");
                    }
                });
            }
            return;
        }

        // --- STANDARD FLOW ---
        if (registrationRole === 'USER') {
            if (!formData.name || !formData.email || !formData.password) return alert("Required: Name, Email, Password");
            db.signupUser({
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            }, formData.password).then(user => {
                setCurrentUser(user);
                setCurrentView(ViewType.EVENTS_LIST);
                alert("Welcome, User!");
            }).catch(err => alert(err.message));
        }
        else if (registrationRole === 'ORGANIZER_LOGIN') {
            db.loginInstitution(formData.email, formData.password).then(result => {
                if (result.user) {
                    setCurrentUser(result.user);
                    setCurrentView(ViewType.EVENTS_LIST);
                    alert("Organizer Login Successful!");
                } else {
                    alert(result.error || "Login Failed");
                }
            });
        }
        else if (registrationRole === 'ORGANIZER_REGISTER') {
            if (!formData.orgName || !formData.email || !formData.password) return alert("Required: Organization Name, Email, Password");
            db.submitOrganizerRequest({
                name: formData.orgName,
                email: formData.email,
                phone: formData.phone
            }, formData.password).then(() => {
                alert("Request Submitted! Your account is created but blocked until Super Admin approval.");
                setRegistrationRole(null);
            }).catch(err => alert(err.message));
        }
    };

    const handleLoginExisting = () => {
        db.loginUserByEmail(formData.email, formData.password).then(result => {
            if (result.user) {
                setCurrentUser(result.user);
                setCurrentView(ViewType.EVENTS_LIST);
            } else {
                alert(result.error);
            }
        });
    };

    // Google Onboarding State
    const [googleOnboarding, setGoogleOnboarding] = useState<{ user: any } | null>(null);
    const [showRoleSelection, setShowRoleSelection] = useState(false);

    const handleGoogleLogin = () => {
        console.log("Starting Google Login...");
        db.loginWithGoogle().then(result => {
            console.log("Google Login Result:", result);
            if (result.user) {
                console.log("Logging in existing user");
                setCurrentUser(result.user);
                setCurrentView(ViewType.EVENTS_LIST);
            } else if (result.isNewUser && result.googleUser) {
                console.log("New User Detected, setting onboarding state");
                setGoogleOnboarding({ user: result.googleUser });
                setShowRoleSelection(true);
            } else {
                console.error("Login Failed:", result.error);
                alert(result.error || "Google Login Failed");
            }
        }).catch(err => {
            console.error("Critical Google Login Error:", err);
            alert("System Error during Login");
        });
    };

    const handleGoogleRoleChoice = (role: UserRole) => {
        setShowRoleSelection(false);
        if (!googleOnboarding) return;

        // Pre-fill form data
        setFormData(prev => ({
            ...prev,
            email: googleOnboarding.user.email || '',
            name: googleOnboarding.user.displayName || '',
            orgName: role === UserRole.INSTITUTION ? (googleOnboarding.user.displayName || '') : ''
        }));

        if (role === UserRole.INSTITUTION) {
            setRegistrationRole('ORGANIZER_REGISTER');
        } else {
            setRegistrationRole('USER');
        }
    };

    const handleRootLogin = (e: React.FormEvent) => {
        e.preventDefault();
        db.loginSuperAdmin(rootPassword).then(res => {
            if (res.success && res.user) {
                setCurrentUser(res.user);
                setShowRootLogin(false);
                setRootPassword('');
            } else {
                alert("Invalid Root Password");
            }
        });
    };

    const handleBackToHome = () => {
        if (currentUser) {
            if (window.confirm("Return to Home Page? You will be logged out.")) {
                handleLogout();
            }
        } else {
            setRegistrationRole(null);
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setRegistrationRole(null);
        setCurrentView(ViewType.EVENTS_LIST);
        setSelectedEventId(null);
    };

    // --- MAIN DASHBOARD (Post Login) ---
    if (currentUser) {
        // Super Admin Dashboard Mode
        if (currentUser.role === UserRole.SUPER_ADMIN) {
            return (
                <div className="p-4 md:p-10 bg-slate-50 min-h-screen">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900">Squadran Root Dashboard</h1>
                            <p className="text-slate-500 font-bold">Global Governance System</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={handleLogout} className="px-4 py-2 bg-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-300">Log Out</button>
                        </div>
                    </div>
                    <AdminDashboard />
                </div>
            );
        }

        return (
            <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
                <PWAInstallModal />
                <CursorBloop />
                {/* SIDEBAR */}
                <aside className="hidden md:flex w-64 bg-white border-r border-slate-100 flex-col h-screen sticky top-0 z-20">
                    <div className="p-8">
                        <h2 className="text-lg font-black text-slate-800 flex items-center gap-3">
                            <img src={SQUADRAN_LOGO_URL} className="w-8 h-8 object-contain" /> Fluxo
                        </h2>
                        <p className="text-xs font-bold text-slate-400 mt-1 pl-11">Event Platform</p>
                    </div>
                    <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">

                        {/* --- COMMON VIEW --- */}
                        <button onClick={() => setCurrentView(ViewType.EVENTS_LIST)} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-colors ${currentView === ViewType.EVENTS_LIST || currentView === ViewType.EVENT_DETAILS ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}><Calendar size={20} /> All Events</button>

                        {/* --- ORGANIZER SPECIFIC VIEWS --- */}
                        {currentUser.role === UserRole.INSTITUTION && (
                            <>
                                <button onClick={() => setCurrentView(ViewType.CREATE_EVENT)} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-colors ${currentView === ViewType.CREATE_EVENT ? 'bg-slate-100 text-brand-orange' : 'text-slate-500 hover:bg-slate-50'}`}><PlusCircle size={20} /> Post New Event</button>
                                <button onClick={() => setCurrentView(ViewType.QR_SCANNER)} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-colors ${currentView === ViewType.QR_SCANNER ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}><QrCode size={20} /> QR Scanner</button>
                                <button onClick={() => setCurrentView(ViewType.ANALYTICS)} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-colors ${currentView === ViewType.ANALYTICS ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}><BarChart size={20} /> Analytics</button>
                            </>
                        )}

                        {/* --- DASHBOARD (PROFILE) --- */}
                        <button onClick={() => setCurrentView(ViewType.DASHBOARD)} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-colors ${currentView === ViewType.DASHBOARD ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}><LayoutDashboard size={20} /> Dashboard</button>

                        <button onClick={handleBackToHome} className="w-full flex items-center gap-3 p-4 rounded-xl font-bold text-slate-400 hover:text-brand-orange hover:bg-slate-50 transition-colors mt-4">
                            <ArrowLeft size={20} /> Back to Home
                        </button>
                    </nav>
                    <div className="p-6 border-t border-slate-50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden"><img src={currentUser.avatar} className="w-full h-full object-cover" /></div>
                            <div><div className="text-sm font-bold text-slate-800">{currentUser.name}</div><div className="text-xs text-slate-400 font-bold">{currentUser.role === UserRole.INSTITUTION ? 'Organizer' : 'User'}</div></div>
                        </div>
                        <button onClick={handleLogout} className="flex items-center gap-2 text-slate-400 hover:text-red-500 font-bold text-sm"><LogOut size={16} /> Logout</button>
                    </div>
                </aside>

                {/* CONTENT AREA */}
                <main className="flex-1 p-4 md:p-8 overflow-y-auto z-10">
                    {/* Mobile Header */}
                    <div className="md:hidden flex justify-between items-center mb-6">
                        <div className="font-black text-xl text-slate-800 flex items-center gap-2">
                            <img src={SQUADRAN_LOGO_URL} className="w-6 h-6 object-contain" /> Fluxo
                        </div>
                        <button onClick={handleLogout}><LogOut size={20} className="text-slate-400" /></button>
                    </div>

                    {/* --- DYNAMIC VIEW RENDERING --- */}
                    {currentView === ViewType.EVENTS_LIST ? (
                        <EventsListView onViewDetails={(id) => { setSelectedEventId(id); setCurrentView(ViewType.EVENT_DETAILS); }} />
                    ) : currentView === ViewType.EVENT_DETAILS && selectedEventId ? (
                        <EventDetailsView eventId={selectedEventId} onBack={() => setCurrentView(ViewType.EVENTS_LIST)} />
                    ) : currentView === ViewType.CREATE_EVENT && currentUser.role === UserRole.INSTITUTION ? (
                        <CreateEventView currentUser={currentUser} onSuccess={() => setCurrentView(ViewType.EVENTS_LIST)} />
                    ) : currentView === ViewType.QR_SCANNER && currentUser.role === UserRole.INSTITUTION ? (
                        <QRScannerView />
                    ) : currentView === ViewType.ANALYTICS && currentUser.role === UserRole.INSTITUTION ? (
                        <AnalyticsView />
                    ) : currentView === ViewType.DASHBOARD ? (
                        <UserDashboard currentUser={currentUser} onProfileUpdate={setCurrentUser} />
                    ) : (
                        // Fallback
                        <EventsListView onViewDetails={(id) => { setSelectedEventId(id); setCurrentView(ViewType.EVENT_DETAILS); }} />
                    )}
                </main>

                {/* Mobile Nav */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around z-30">
                    <button onClick={() => setCurrentView(ViewType.EVENTS_LIST)} className="p-2 rounded-xl text-slate-400"><Calendar size={24} /></button>
                    {currentUser.role === UserRole.INSTITUTION && (
                        <>
                            <button onClick={() => setCurrentView(ViewType.CREATE_EVENT)} className="p-2 rounded-xl text-brand-orange"><PlusCircle size={24} /></button>
                            <button onClick={() => setCurrentView(ViewType.QR_SCANNER)} className="p-2 rounded-xl text-slate-400"><QrCode size={24} /></button>
                        </>
                    )}
                    <button onClick={() => setCurrentView(ViewType.DASHBOARD)} className="p-2 rounded-xl text-slate-400"><Settings size={24} /></button>
                </div>
            </div>
        );
    }

    // --- LANDING PAGE (Unified) ---
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-x-hidden overflow-y-auto selection:bg-brand-orange selection:text-white">
            <PWAInstallModal />
            <CursorBloop />
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col p-6 md:p-12 gap-16">
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="text-left space-y-8 md:pr-12 animate-fade-in-up">
                        <div>
                            <img src={SQUADRAN_LOGO_URL} alt="Squadran" className="h-20 w-auto mb-6 object-contain" />
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-4">
                                Squadran <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">Fluxo</span>
                            </h1>
                            <p className="text-2xl font-bold text-slate-600">
                                Where student ideas are forged into products.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative z-20">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-black text-slate-800">Fluxo Access</h2>
                                <p className="text-slate-400 font-bold text-sm">Join the ecosystem or login below</p>
                            </div>

                            {/* REGISTRATION & LOGIN FORM CONTAINER */}
                            {!registrationRole ? (
                                <div className="space-y-4">
                                    {/* LOGIN FORM - USER DEFAULT */}
                                    <div className="space-y-3 mb-6">
                                        <input value={formData.email} onChange={e => updateForm('email', e.target.value)} placeholder="User Email" className="w-full p-4 bg-slate-50 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-brand-blue/30 focus:bg-white transition-all" />
                                        <input type="password" value={formData.password} onChange={e => updateForm('password', e.target.value)} placeholder="Password" className="w-full p-4 bg-slate-50 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-brand-blue/30 focus:bg-white transition-all" />

                                        <button onClick={handleLoginExisting} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 shadow-xl flex items-center justify-center gap-2 group transition-all">
                                            Login <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        <div className="flex items-center gap-4 my-2">
                                            <div className="h-px bg-slate-100 flex-1"></div>
                                            <span className="text-xs font-bold text-slate-300 uppercase">Or</span>
                                            <div className="h-px bg-slate-100 flex-1"></div>
                                        </div>

                                        <button onClick={handleGoogleLogin} className="w-full py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                <path d="M5.84 14.13c-.22-.66-.35-1.36-.35-2.13s.13-1.47.35-2.13V7.03H2.18C.79 9.81 0 12 0 12c0 2.21.79 4.39 2.18 7.17l3.66-2.84z" fill="#FBBC05" />
                                                <path d="M12 4.3c1.61 0 3.09.56 4.23 1.64l3.18-3.18C17.46.77 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.03l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            </svg>
                                            Sign in with Google
                                        </button>
                                    </div>

                                    <div className="relative flex py-2 items-center">
                                        <div className="flex-grow border-t border-slate-100"></div>
                                        <span className="flex-shrink-0 mx-4 text-xs font-bold text-slate-300 uppercase">New Here?</span>
                                        <div className="flex-grow border-t border-slate-100"></div>
                                    </div>

                                    <button onClick={() => setRegistrationRole('USER')} className="w-full p-4 rounded-2xl border-2 border-slate-100 hover:border-brand-blue hover:bg-blue-50/50 transition-all flex items-center gap-3 text-left group">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center"><Users size={20} /></div>
                                        <div>
                                            <h3 className="font-black text-slate-800">User Registration</h3>
                                            <p className="text-slate-400 text-xs font-bold">Register to attend events</p>
                                        </div>
                                    </button>

                                    <button onClick={() => setRegistrationRole('ORGANIZER_REGISTER')} className="w-full p-4 rounded-2xl border-2 border-slate-100 hover:border-slate-800 hover:bg-slate-50 transition-all flex items-center gap-3 text-left group">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"><Shield size={20} /></div>
                                        <div>
                                            <h3 className="font-black text-slate-800">Event Organizer</h3>
                                            <p className="text-slate-400 text-xs font-bold">Register Organization</p>
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <div className="animate-fade-in-up">
                                    <button onClick={() => setRegistrationRole(null)} className="mb-4 flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600"><ArrowLeft size={14} /> Back</button>

                                    {/* USER REGISTRATION */}
                                    {registrationRole === 'USER' && (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-black text-slate-800 mb-2">{googleOnboarding ? 'Complete Profile' : 'User Registration'}</h3>
                                            <input value={formData.name} placeholder="Full Name" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('name', e.target.value)} />
                                            <input value={formData.email} readOnly={!!googleOnboarding} placeholder="Email" className={`w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm ${googleOnboarding ? 'opacity-60 cursor-not-allowed' : ''}`} onChange={e => updateForm('email', e.target.value)} />
                                            {!googleOnboarding && (
                                                <input type="password" value={formData.password} placeholder="Password" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('password', e.target.value)} />
                                            )}
                                            <input value={formData.phone} placeholder="Phone" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('phone', e.target.value)} />
                                            <button onClick={handleSubmitAuth} className="w-full py-3 bg-brand-blue text-white rounded-xl font-bold shadow-lg hover:bg-blue-600 mt-2">
                                                {googleOnboarding ? 'Complete Registration' : 'Sign Up'}
                                            </button>
                                        </div>
                                    )}

                                    {/* ORGANIZER LOGIN & REGISTER TOGGLE */}
                                    {registrationRole === 'ORGANIZER_LOGIN' && (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-black text-slate-800 mb-2">Organizer Login</h3>
                                            <input placeholder="Email" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('email', e.target.value)} />
                                            <input type="password" placeholder="Password" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('password', e.target.value)} />
                                            <button onClick={handleSubmitAuth} className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-700 mt-2">Login</button>

                                            <div className="text-center pt-4">
                                                <button onClick={() => setRegistrationRole('ORGANIZER_REGISTER')} className="text-xs font-bold text-brand-orange underline">New Organizer? Register Here</button>
                                            </div>
                                        </div>
                                    )}

                                    {/* ORGANIZER REGISTRATION */}
                                    {registrationRole === 'ORGANIZER_REGISTER' && (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-black text-slate-800 mb-2">{googleOnboarding ? 'Complete Request' : 'Register Organization'}</h3>
                                            <input value={formData.orgName} placeholder="Organization Name" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('orgName', e.target.value)} />
                                            <input value={formData.email} readOnly={!!googleOnboarding} placeholder="Admin Email" className={`w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm ${googleOnboarding ? 'opacity-60 cursor-not-allowed' : ''}`} onChange={e => updateForm('email', e.target.value)} />
                                            {!googleOnboarding && (
                                                <input type="password" value={formData.password} placeholder="Password" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('password', e.target.value)} />
                                            )}
                                            <input value={formData.phone} placeholder="Contact Phone" className="w-full p-3 bg-slate-50 rounded-xl font-bold outline-none text-sm" onChange={e => updateForm('phone', e.target.value)} />
                                            <button onClick={handleSubmitAuth} className="w-full py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg hover:bg-orange-600 mt-2">
                                                {googleOnboarding ? 'Submit Request' : 'Submit Request'}
                                            </button>

                                            {!googleOnboarding && (
                                                <div className="text-center pt-4">
                                                    <button onClick={() => setRegistrationRole('ORGANIZER_LOGIN')} className="text-xs font-bold text-slate-400 underline">Back to Login</button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="text-center mt-8">
                            {/* Root Login Trigger */}
                            <button onClick={() => setShowRootLogin(true)} className="text-xs font-bold text-slate-300 hover:text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2 mx-auto">
                                <Lock size={12} /> Root Access
                            </button>
                        </div>
                    </div>
                </div>

                {/* INFO SECTION */}
                <div className="py-16 animate-fade-in-up border-t border-slate-200/50">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Fluxo: Event Automation</h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Digitizes campus events end-to-end, saving staff time and providing valuable insights.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                        {/* Feature 1 */}
                        <div className="bg-[#F8FEE7] p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                                <Ticket size={32} />
                            </div>
                            <h3 className="text-lg font-black text-slate-800">Online Registration</h3>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#F8FEE7] p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center relative">
                                <QrCode size={32} />
                                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                            </div>
                            <h3 className="text-lg font-black text-slate-800">QR Code Generation</h3>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#F8FEE7] p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-lg font-black text-slate-800">Attendance Tracking</h3>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-[#F8FEE7] p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                                <Award size={32} />
                            </div>
                            <h3 className="text-lg font-black text-slate-800">Automated Certificates</h3>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto flex items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                            <PieChart size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-900">Event Analytics Dashboard</h3>
                            <p className="text-slate-500 font-bold">For measurable engagement insights.</p>
                        </div>
                    </div>
                </div>

                {/* CONTACT SUPPORT SECTION */}
                <div className="py-16 max-w-2xl mx-auto w-full animate-fade-in-up border-t border-slate-200/50">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 mb-2">Contact Support</h2>
                        <p className="text-slate-500 font-bold">Questions? Issues? We're here to help.</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
                        <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-400 ml-2 mb-2 block uppercase">Name</label>
                                <input required value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })} className="w-full p-4 bg-slate-50 rounded-xl font-bold outline-none focus:ring-2 focus:ring-brand-blue/20" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 ml-2 mb-2 block uppercase">Email</label>
                                <input required type="email" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} className="w-full p-4 bg-slate-50 rounded-xl font-bold outline-none focus:ring-2 focus:ring-brand-blue/20" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 ml-2 mb-2 block uppercase">Message</label>
                                <textarea required rows={4} value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} className="w-full p-4 bg-slate-50 rounded-xl font-medium outline-none resize-none focus:ring-2 focus:ring-brand-blue/20" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 shadow-lg flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4">
                                Emails are sent to <span className="font-bold text-slate-500">{SUPPORT_EMAIL_PLACEHOLDER}</span>
                            </p>
                        </form>
                    </div>
                </div>

                {/* ROOT LOGIN MODAL */}
                {showRootLogin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                        <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl animate-fade-in-up border border-slate-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-black text-slate-900 flex items-center gap-2"><Lock size={18} className="text-brand-orange" /> Root Access</h3>
                                <button onClick={() => setShowRootLogin(false)} className="text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></button>
                            </div>
                            <form onSubmit={handleRootLogin} className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Super Admin Password</label>
                                    <input
                                        type="password"
                                        autoFocus
                                        value={rootPassword}
                                        onChange={(e) => setRootPassword(e.target.value)}
                                        className="w-full p-3 bg-slate-50 rounded-xl font-bold border-2 border-slate-100 focus:border-brand-orange outline-none transition-colors"
                                        placeholder="Enter password..."
                                    />
                                </div>
                                <button type="submit" className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 shadow-lg transition-all">
                                    Authenticate
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Google Role Selection Modal */}
                {showRoleSelection && googleOnboarding && (
                    <GoogleOnboardingModal
                        user={googleOnboarding.user}
                        onSelect={handleGoogleRoleChoice}
                        onCancel={() => { setShowRoleSelection(false); setGoogleOnboarding(null); }}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
