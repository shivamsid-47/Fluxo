
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN', // Platform Owner
  INSTITUTION = 'INSTITUTION', // Event Organizers
  USER = 'USER', // Attendees
}

export enum ViewType {
  SUPER_ADMIN_DASHBOARD = 'SUPER_ADMIN_DASHBOARD',

  // --- NEW EVENT SYSTEM VIEWS ---
  EVENTS_LIST = 'EVENTS_LIST',
  EVENT_DETAILS = 'EVENT_DETAILS',
  QR_SCANNER = 'QR_SCANNER',
  ANALYTICS = 'ANALYTICS',
  CREATE_EVENT = 'CREATE_EVENT', // New view for creating events

  // --- DASHBOARD ---
  DASHBOARD = 'DASHBOARD', // Generic Dashboard/Profile view

  // --- LEGACY/UNUSED ---
  SPRINT_HUB = 'SPRINT_HUB',
  DEV_MARKET = 'DEV_MARKET',
  LAUNCHPAD = 'LAUNCHPAD',
  NETWORKING = 'NETWORKING',
  MESSAGES = 'MESSAGES',
}

export enum FeatureType {
  CONTENT_ASSISTANT = 'CONTENT_ASSISTANT',
}

export interface Feature {
  id: FeatureType;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  suggestedPrompts?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface UserProfile {
  uid: string;
  name: string;
  email?: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  blocked?: boolean;
}

export interface OrganizerRequest {
  id: string;
  name: string; // Organization Name
  email: string;
  phone: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  timestamp: number;
  uid?: string; // Link to the created Firebase Auth user
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: number;
  read: boolean;
}

export interface MVPData {
  description: string;
  techStack: string[];
  docLink: string;
  status: 'READY' | 'IN_PROGRESS';
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  content: string;
  title?: string;
  image?: string;
  likes: number;
  comments: Comment[];
  status: 'PENDING' | 'VERIFIED';
  type: 'SPRINT_UPDATE' | 'OPEN_ROLE' | 'DELIVERY' | 'IDEA_SUBMISSION';
  timestamp: number;
  company?: string;
  jobLink?: string;

  mvp?: MVPData;
  applicants?: string[];
  team?: string[];
}

export interface Event {
  id: string;
  organizerId?: string; // ID of the Institution/Organizer who created it
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationLink: string;
  sheetLink?: string;
  mapEmbedUrl?: string;
}

export interface TicketValidation {
  isValid: boolean;
  status: 'VALID' | 'INVALID' | 'USED';
  attendeeName?: string;
  eventTitle?: string;
}
