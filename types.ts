export interface User {
  id: string;
  name: string;
  rollNumber: string;
  role: 'student' | 'faculty' | 'admin';
}

export interface Classroom {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radiusMeters: number;
  isActive: boolean;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classroomId: string;
  timestamp: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  fee: number;
  image: string;
  category?: string;
}

export interface InstitutionalFee {
  id: string;
  title: string;
  category: 'Tuition' | 'Transport' | 'Hostel' | 'Store' | 'Exam';
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  description: string;
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  stipend: string;
}

export interface PrintShop {
  id: string;
  name: string;
  location: string;
  rating: number;
  pricePerPageBW: number;
  pricePerPageColor: number;
  isOpen: boolean;
  distanceMeters: number;
  latitude: number;
  longitude: number;
}

export interface PrintOrder {
  id: string;
  fileName: string;
  shopName: string;
  pages: number;
  copies: number;
  isColor: boolean;
  totalCost: number;
  status: 'Encrypted' | 'Sent' | 'Printing' | 'Ready' | 'Picked Up';
  timestamp: Date;
}

export interface Bus {
  id: string;
  routeNumber: string;
  destination: string;
  type: 'college' | 'public';
  status: 'Moving' | 'Stopped' | 'Delayed';
  etaMinutes: number;
  latitude: number;
  longitude: number;
  driverName?: string; // Only for college buses
  occupancy: 'Low' | 'Medium' | 'High';
  stops: string[];
}

export interface CourseSection {
  id: string;
  sectionCode: string;
  instructor: string;
  instructorEmail: string;
  schedule: string;
  days: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri')[];
  timeSlot: string; // e.g. "09:30 - 10:45 AM"
  location: string;
  totalSeats: number;
  enrolledSeats: number;
  waitlistCapacity: number;
  waitlistCount: number;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  department: string;
  credits: number;
  level: '100' | '200' | '300' | '400';
  term: string;
  description: string;
  prerequisites: string[];
  syllabusTopics: string[];
  sections: CourseSection[];
}

export interface RegisteredCourse {
  courseId: string;
  courseCode: string;
  courseTitle: string;
  credits: number;
  sectionId: string;
  sectionCode: string;
  instructor: string;
  schedule: string;
  days: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri')[];
  timeSlot: string;
  location: string;
  status: 'enrolled' | 'waitlisted';
  waitlistPosition?: number;
  registeredAt: string;
}

export interface StudyRequest {
  id: string;
  studentName: string;
  rollNumber: string;
  department: string;
  subject: string;
  subjectCode: string;
  topic: string;
  type: 'seeking_help' | 'offering_help';
  urgency: 'high' | 'medium' | 'low';
  preferredTime: string;
  location: string;
  contactEmail: string;
  contactPhone: string;
  status: 'open' | 'connected' | 'completed';
  responsesCount: number;
  createdAt: string;
}

export interface DepartmentTutor {
  id: string;
  name: string;
  rollNumber: string;
  department: string;
  year: string;
  cgpa: number;
  verifiedBadge: boolean;
  specializations: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: string;
  availability: string;
  contactEmail: string;
  contactPhone: string;
  avatar: string;
  bio: string;
  location: string;
}

export interface FoodMenuItem {
  id: string;
  name: string;
  canteenId: string;
  canteenName: string;
  category: 'Breakfast' | 'Thali & Meals' | 'Snacks & Quick Bites' | 'Rolls & Bowls' | 'Beverages';
  price: number;
  description: string;
  image: string;
  dietary: 'veg' | 'non-veg' | 'vegan' | 'jain';
  allergens: ('gluten-free' | 'nut-free' | 'dairy-free')[];
  prepTimeMinutes: number;
  calories: number;
  rating: number;
  reviewsCount: number;
  isAvailable: boolean;
  isPopular?: boolean;
}

export interface FoodCartItem {
  item: FoodMenuItem;
  quantity: number;
  customization?: string;
}

export type FulfillmentType = 'pickup' | 'delivery';

export interface CampusHotspot {
  id: string;
  name: string;
  subtitle: string;
  landmark: string;
  transitMinutes: number;
  activeBatchOrders: number;
  deliveryFee: number;
  color: string;
}

export interface FoodOrder {
  id: string;
  tokenNumber: string;
  canteenName: string;
  counterName: string;
  items: FoodCartItem[];
  totalAmount: number;
  paymentMethod: 'Campus Meal Card' | 'Campus Wallet' | 'UPI';
  fulfillmentType: 'pickup' | 'delivery';
  deliveryHotspot?: {
    hotspotId: string;
    hotspotName: string;
    landmark: string;
    roomOrDeskNote?: string;
    deliveryFee: number;
    deliveryPartnerName?: string;
    deliveryPartnerPhone?: string;
    handoverOtp?: string;
  };
  pickupSlot: string;
  optNoCutlery: boolean;
  notes: string;
  status: 'Received' | 'Cooking' | 'Dispatched' | 'Arrived' | 'Completed';
  createdAt: string;
}

export type ViewState = 'dashboard' | 'digital_id' | 'attendance' | 'courses' | 'buddies' | 'transport' | 'events' | 'print' | 'chat' | 'food' | 'studio' | 'translator';