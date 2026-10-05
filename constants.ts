import { Classroom, CampusEvent, Internship, PrintShop, Bus, InstitutionalFee } from './types';

// Mock Data
export const MOCK_CLASSROOMS: (Classroom & { course?: string; faculty?: string; block?: string })[] = [
  {
    id: 'CS-101',
    name: 'Excel Tech Park - Hall A (CSE/IT)',
    latitude: 11.44970,
    longitude: 77.77170,
    radiusMeters: 75,
    isActive: true,
    course: 'CS301 - Cloud Computing & Distributed Systems',
    faculty: 'Dr. S. K. Murugesan (Prof & HOD, CSE)',
    block: 'Tech Park Block B - 2nd Floor'
  },
  {
    id: 'ENG-202',
    name: 'Aeronautical & Drone Systems Lab',
    latitude: 11.45120,
    longitude: 77.77240,
    radiusMeters: 60,
    isActive: true,
    course: 'AE404 - Autonomous Flight Dynamics & ROS',
    faculty: 'Prof. R. Kavitha (Associate Prof, Aero)',
    block: 'Aeronautical Hangar Complex'
  },
  {
    id: 'ECE-104',
    name: 'Embedded Systems & IoT Innovation Hub',
    latitude: 11.45030,
    longitude: 77.77120,
    radiusMeters: 65,
    isActive: true,
    course: 'EC308 - Embedded Microcontrollers & Sensors',
    faculty: 'Prof. P. Selvaraj (ECE Dept)',
    block: 'Main Engineering Block - 3rd Floor'
  },
  {
    id: 'ME-305',
    name: 'Mechanical CAD/CAM & Robotics Center',
    latitude: 11.44850,
    longitude: 77.77050,
    radiusMeters: 55,
    isActive: true,
    course: 'ME302 - Advanced CNC & Manufacturing Systems',
    faculty: 'Dr. V. Arunkumar (Mech Dept)',
    block: 'Mechanical Engineering Workshop Block'
  },
  {
    id: 'AUD-001',
    name: 'Excel Grand Convention Auditorium',
    latitude: 11.44880,
    longitude: 77.76980,
    radiusMeters: 90,
    isActive: true,
    course: 'GEN200 - University Assembly & Tech Seminar',
    faculty: 'Dean of Academic Affairs',
    block: 'Central Convention Centre'
  }
];

export const MOCK_EVENTS: CampusEvent[] = [
  {
    id: 'EVT-001',
    title: 'Annual Tech Hackathon & AI Sprint',
    description: '48-hour prototype sprint on Generative AI and IoT edge systems at Excel Tech Park.',
    date: '2026-10-18',
    fee: 500, // INR
    image: '/src/assets/images/tech_hackathon_event_1791128568908.jpg',
    category: 'Technical'
  },
  {
    id: 'EVT-002',
    title: 'Excel Cultural Fest & Music Symphony',
    description: 'Inter-collegiate cultural celebration featuring live acoustics, dance troupes, and visual arts.',
    date: '2026-10-24',
    fee: 250, // INR
    image: '/src/assets/images/college_cultural_fest_1791128583832.jpg',
    category: 'Cultural'
  },
  {
    id: 'EVT-003',
    title: 'Autonomous Robotics & Drones Workshop',
    description: 'Hands-on hardware lab on ROS, flight controllers, and obstacle avoidance sensors.',
    date: '2026-11-05',
    fee: 800, // INR
    image: '/src/assets/images/robotics_drone_workshop_1791128603377.jpg',
    category: 'Workshop'
  },
  {
    id: 'EVT-004',
    title: 'Inter-College Trophy & Cricket Cup',
    description: 'Annual South-Zone championship matches at the Excel Campus Sports Complex Oval.',
    date: '2026-11-14',
    fee: 300, // INR
    image: '/src/assets/images/college_cricket_cup_1791128619515.jpg',
    category: 'Sports'
  },
  {
    id: 'EVT-005',
    title: 'AI Summit & Tech Leaders Conclave',
    description: 'Distinguished industry seminars on frontier models, semiconductor innovation, and research careers.',
    date: '2026-12-02',
    fee: 150, // INR
    image: '/src/assets/images/ai_summit_keynote_1791128633098.jpg',
    category: 'Seminar'
  },
  {
    id: 'EVT-006',
    title: 'Innovation & Startup Pitch Showcase',
    description: 'Student founders pitch venture prototypes to angel investors and incubation mentors.',
    date: '2026-12-15',
    fee: 200, // INR
    image: '/src/assets/images/startup_pitch_showcase_1791128648077.jpg',
    category: 'Technical'
  }
];

export const MOCK_FEES: InstitutionalFee[] = [
  {
    id: 'FEE-001',
    title: 'Semester 5 Tuition Fee',
    category: 'Tuition',
    amount: 45000,
    dueDate: '2023-12-01',
    status: 'Pending',
    description: 'Academic tuition fee for the upcoming semester including lab charges.'
  },
  {
    id: 'FEE-002',
    title: 'Annual Bus Transport',
    category: 'Transport',
    amount: 12500,
    dueDate: '2023-11-30',
    status: 'Overdue',
    description: 'Transport charges for Route 101 (North Extension).'
  },
  {
    id: 'FEE-003',
    title: 'Exam Registration Fee',
    category: 'Exam',
    amount: 1200,
    dueDate: '2023-12-15',
    status: 'Pending',
    description: 'End semester examination registration fee.'
  },
  {
    id: 'FEE-004',
    title: 'Campus Store / Mess',
    category: 'Store',
    amount: 3500,
    dueDate: '2023-11-10',
    status: 'Paid',
    description: 'Mess bill and stationery store dues for October.'
  }
];

export const MOCK_INTERNSHIPS: Internship[] = [
  { id: 'INT-1', company: 'TechCorp', role: 'Frontend Dev', stipend: '₹15,000/mo' },
  { id: 'INT-2', company: 'DataSystems', role: 'Data Analyst', stipend: '₹12,000/mo' },
];

export const MOCK_PRINT_SHOPS: PrintShop[] = [
  {
    id: 'PS-01',
    name: 'Campus Copy Center',
    location: 'Student Center, Ground Floor',
    rating: 4.8,
    pricePerPageBW: 2.00, // Standard rate
    pricePerPageColor: 7.00, // Standard rate
    isOpen: true,
    distanceMeters: 150,
    latitude: 37.7755, 
    longitude: -122.4196
  },
  {
    id: 'PS-02',
    name: 'Library Printers',
    location: 'Main Library, 2nd Floor',
    rating: 4.2,
    pricePerPageBW: 2.00,
    pricePerPageColor: 7.00,
    isOpen: true,
    distanceMeters: 400,
    latitude: 37.7760,
    longitude: -122.4180
  },
  {
    id: 'PS-03',
    name: 'Gate 2 Xerox',
    location: 'Near North Gate Exit',
    rating: 4.5,
    pricePerPageBW: 2.00,
    pricePerPageColor: 7.00,
    isOpen: true,
    distanceMeters: 850,
    latitude: 37.7720,
    longitude: -122.4210
  }
];

// Central Campus Coordinates for Excel Engineering College, Komarapalayam, Namakkal District
export const CAMPUS_CENTER = { 
  lat: 11.44967, 
  lng: 77.77169,
  name: 'Excel Engineering College',
  campus: 'Excel Group Institutions',
  address: 'NH-544 Salem Main Road, Pallakkapalayam, Komarapalayam, Namakkal District, Tamil Nadu 637303'
};

export const EXCEL_CAMPUS_LANDMARKS = [
  { id: 'lm-1', name: 'Excel Main Admin & Engineering Block', lat: 11.4497, lng: 77.7717, category: 'Academic' },
  { id: 'lm-2', name: 'Convention Centre & Grand Auditorium', lat: 11.4485, lng: 77.7705, category: 'Auditorium' },
  { id: 'lm-3', name: 'Excel Tech Park & Advanced Computing Labs', lat: 11.4503, lng: 77.7712, category: 'Tech Park' },
  { id: 'lm-4', name: 'Aeronautical & Mechanical Systems Hangar', lat: 11.4512, lng: 77.7724, category: 'Lab' },
  { id: 'lm-5', name: 'Central Bus Terminal & NH-544 Gateway', lat: 11.4489, lng: 77.7698, category: 'Transport Gate' },
  { id: 'lm-6', name: 'Excel Student Hostels & Food Court', lat: 11.4476, lng: 77.7732, category: 'Residential' },
  { id: 'lm-7', name: 'Athletic Sports Arena & Cricket Oval', lat: 11.4515, lng: 77.7702, category: 'Sports' }
];

export const MOCK_BUSES: Bus[] = [
  {
    id: 'BUS-C1',
    routeNumber: 'Rt-101',
    destination: 'Salem Express Fleet',
    type: 'college',
    status: 'Moving',
    etaMinutes: 6,
    latitude: 11.4560,
    longitude: 77.7880,
    driverName: 'M. Saravanan (+91 94432-88120)',
    occupancy: 'Medium',
    stops: ['Salem New Bus Stand', 'Kondalampatti Bypass', 'Sankari Toll Gate', 'Sankari West', 'Excel Main Gate']
  },
  {
    id: 'BUS-C2',
    routeNumber: 'Rt-104',
    destination: 'Erode Junction & Town',
    type: 'college',
    status: 'Stopped',
    etaMinutes: 12,
    latitude: 11.4420,
    longitude: 77.7520,
    driverName: 'K. Thangavel (+91 98421-44310)',
    occupancy: 'High',
    stops: ['Erode Central Bus Stand', 'Solar Bypass', 'Pallipalayam Kaveri Bridge', 'Komarapalayam Old Town', 'Excel Engineering College']
  },
  {
    id: 'BUS-C3',
    routeNumber: 'Rt-108',
    destination: 'Tiruchengode Shuttle',
    type: 'college',
    status: 'Moving',
    etaMinutes: 14,
    latitude: 11.4360,
    longitude: 77.7950,
    driverName: 'P. Muthusamy (+91 97891-66230)',
    occupancy: 'Low',
    stops: ['Tiruchengode Bus Stand', 'Kailasampalayam', 'Padaiveedu', 'Sankari West', 'Excel Campus Depot']
  },
  {
    id: 'BUS-C4',
    routeNumber: 'Rt-112',
    destination: 'Bhavani & Anthiyur Route',
    type: 'college',
    status: 'Moving',
    etaMinutes: 4,
    latitude: 11.4475,
    longitude: 77.7580,
    driverName: 'R. Loganathan (+91 99440-12890)',
    occupancy: 'Medium',
    stops: ['Bhavani Sangameshwarar Temple', 'Lakshmi Nagar', 'Komarapalayam NH-544 Flyover', 'Excel Campus']
  },
  {
    id: 'BUS-P1',
    routeNumber: 'TNSTC-55A',
    destination: 'Salem - Erode NH-544 Express',
    type: 'public',
    status: 'Moving',
    etaMinutes: 3,
    latitude: 11.4490,
    longitude: 77.7660,
    occupancy: 'High',
    stops: ['Salem Central', 'Sankari Durg', 'Excel College NH-544 Stop', 'Komarapalayam Toll', 'Erode Central']
  },
  {
    id: 'BUS-P2',
    routeNumber: 'TNSTC-22B',
    destination: 'Komarapalayam - Sankari Town Bus',
    type: 'public',
    status: 'Delayed',
    etaMinutes: 22,
    latitude: 11.4380,
    longitude: 77.7390,
    occupancy: 'Medium',
    stops: ['Komarapalayam Bus Stand', 'Cauvery RS', 'Pallakkapalayam', 'Excel College Main Arch', 'Sankari R.S.']
  }
];

// This SQL Schema is provided for the AI to understand the database structure
// and for the user reference requested in the prompt.
export const SQL_SCHEMA_REFERENCE = `
-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('student', 'faculty', 'admin')),
    roll_number VARCHAR(50) UNIQUE, -- Nullable for faculty
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Classrooms Table (Geo-fencing)
CREATE TABLE classrooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    radius_meters INTEGER DEFAULT 50,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Attendance Table
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(id),
    classroom_id INTEGER REFERENCES classrooms(id),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) CHECK (status IN ('Present', 'Late', 'Absent')),
    device_id VARCHAR(100), -- To prevent proxy attendance
    CONSTRAINT unique_attendance_per_class_day UNIQUE (student_id, classroom_id, DATE(timestamp))
);

-- Events Table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    event_date TIMESTAMP NOT NULL,
    fee DECIMAL(10, 2) DEFAULT 0.00,
    organizer_id INTEGER REFERENCES users(id)
);

-- Internships Table
CREATE TABLE internships (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL,
    role_title VARCHAR(100) NOT NULL,
    description TEXT,
    stipend VARCHAR(50),
    application_link VARCHAR(255),
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Print Shops
CREATE TABLE print_shops (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(255),
    rating DECIMAL(2,1),
    price_bw DECIMAL(4,2),
    price_color DECIMAL(4,2)
);

-- Print Orders
CREATE TABLE print_orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    shop_id INTEGER REFERENCES print_shops(id),
    file_name VARCHAR(255),
    file_url VARCHAR(500), -- Encrypted URL
    pages INTEGER,
    copies INTEGER,
    is_color BOOLEAN,
    total_cost DECIMAL(10,2),
    status VARCHAR(20) CHECK (status IN ('Sent', 'Printing', 'Ready', 'Picked Up')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;