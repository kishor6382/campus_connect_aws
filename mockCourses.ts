import { Course, RegisteredCourse } from './types';

export const MOCK_COURSES: Course[] = [
  {
    id: 'crs-cs101',
    code: 'CS-101',
    title: 'Introduction to Computer Science & Python',
    department: 'Computer Science',
    credits: 4,
    level: '100',
    term: 'Fall 2026',
    description: 'Fundamental principles of programming, algorithm design, algorithmic complexity, recursion, object-oriented concepts, and computational problem-solving with Python.',
    prerequisites: ['None (Open to all majors)'],
    syllabusTopics: ['Variables & Control Flow', 'Functions & Recursion', 'Object-Oriented Design', 'Sorting & Search', 'File I/O & JSON'],
    sections: [
      {
        id: 'sec-cs101-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Aris Thorne',
        instructorEmail: 'thorne.a@campus.edu',
        schedule: 'Mon, Wed, Fri · 09:00 - 10:15 AM',
        days: ['Mon', 'Wed', 'Fri'],
        timeSlot: '09:00 - 10:15 AM',
        location: 'Turing Hall 101',
        totalSeats: 60,
        enrolledSeats: 38,
        waitlistCapacity: 15,
        waitlistCount: 0
      },
      {
        id: 'sec-cs101-02',
        sectionCode: 'LEC-02',
        instructor: 'Prof. Elena Rostova',
        instructorEmail: 'rostova.e@campus.edu',
        schedule: 'Tue, Thu · 01:30 - 03:00 PM',
        days: ['Tue', 'Thu'],
        timeSlot: '01:30 - 03:00 PM',
        location: 'Ada Lovelace Auditorium',
        totalSeats: 50,
        enrolledSeats: 48,
        waitlistCapacity: 10,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-cs204',
    code: 'CS-204',
    title: 'Data Structures & Algorithms',
    department: 'Computer Science',
    credits: 4,
    level: '200',
    term: 'Fall 2026',
    description: 'Rigorous analysis of fundamental abstract data structures including trees, heaps, hash tables, and graphs. Covers amortized bounds, dynamic programming, and greedy algorithms.',
    prerequisites: ['CS-101', 'MATH-105'],
    syllabusTopics: ['Asymptotic Analysis (Big-O)', 'Self-Balancing Trees (AVL/Red-Black)', 'Graph Traversals (BFS/DFS)', 'Dijkstra & Prim Algorithms', 'Dynamic Programming Patterns'],
    sections: [
      {
        id: 'sec-cs204-01',
        sectionCode: 'LEC-01',
        instructor: 'Prof. David Vance',
        instructorEmail: 'vance.d@campus.edu',
        schedule: 'Mon, Wed · 10:30 - 12:00 PM',
        days: ['Mon', 'Wed'],
        timeSlot: '10:30 - 12:00 PM',
        location: 'Knuth Science Wing 204',
        totalSeats: 45,
        enrolledSeats: 44,
        waitlistCapacity: 10,
        waitlistCount: 0
      },
      {
        id: 'sec-cs204-02',
        sectionCode: 'LEC-02',
        instructor: 'Dr. Priya Sundaram',
        instructorEmail: 'sundaram.p@campus.edu',
        schedule: 'Tue, Thu · 10:00 - 11:30 AM',
        days: ['Tue', 'Thu'],
        timeSlot: '10:00 - 11:30 AM',
        location: 'Knuth Science Wing 208',
        totalSeats: 40,
        enrolledSeats: 40,
        waitlistCapacity: 12,
        waitlistCount: 4
      }
    ]
  },
  {
    id: 'crs-cs350',
    code: 'CS-350',
    title: 'Operating Systems & Distributed Concurrency',
    department: 'Computer Science',
    credits: 4,
    level: '300',
    term: 'Fall 2026',
    description: 'Hardware abstraction layers, virtual memory paging, process scheduling, synchronization primitives (mutexes, semaphores), file systems, and networked IPC mechanisms.',
    prerequisites: ['CS-204', 'ECE-210'],
    syllabusTopics: ['Process Lifecycle & Context Switching', 'POSIX Threads & Mutex Locks', 'Virtual Memory & TLB Management', 'Journaled File Systems', 'Distributed Consensus (Raft/Paxos)'],
    sections: [
      {
        id: 'sec-cs350-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Marcus Vance',
        instructorEmail: 'vance.m@campus.edu',
        schedule: 'Mon, Wed, Fri · 01:00 - 02:15 PM',
        days: ['Mon', 'Wed', 'Fri'],
        timeSlot: '01:00 - 02:15 PM',
        location: 'Turing Hall 302',
        totalSeats: 35,
        enrolledSeats: 35,
        waitlistCapacity: 10,
        waitlistCount: 6
      }
    ]
  },
  {
    id: 'crs-ds301',
    code: 'DS-301',
    title: 'Machine Learning Foundations & Statistical Modeling',
    department: 'Data Science & AI',
    credits: 3,
    level: '300',
    term: 'Fall 2026',
    description: 'Supervised and unsupervised learning formulations: linear/logistic regression, SVMs, decision trees, boosting, PCA, clustering, and cross-validation empirical methodology.',
    prerequisites: ['MATH-215', 'CS-204'],
    syllabusTopics: ['Gradient Descent & Optimization', 'Bias-Variance Decomposition', 'Support Vector Machines', 'Ensemble Trees & XGBoost', 'Unsupervised Dimensionality Reduction'],
    sections: [
      {
        id: 'sec-ds301-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Clara Chen',
        instructorEmail: 'chen.c@campus.edu',
        schedule: 'Tue, Thu · 09:30 - 11:00 AM',
        days: ['Tue', 'Thu'],
        timeSlot: '09:30 - 11:00 AM',
        location: 'Shannon Data Lab 110',
        totalSeats: 50,
        enrolledSeats: 46,
        waitlistCapacity: 15,
        waitlistCount: 0
      },
      {
        id: 'sec-ds301-02',
        sectionCode: 'LEC-02',
        instructor: 'Prof. Harold Finch',
        instructorEmail: 'finch.h@campus.edu',
        schedule: 'Mon, Wed · 03:00 - 04:30 PM',
        days: ['Mon', 'Wed'],
        timeSlot: '03:00 - 04:30 PM',
        location: 'Shannon Data Lab 114',
        totalSeats: 45,
        enrolledSeats: 29,
        waitlistCapacity: 15,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-ece210',
    code: 'ECE-210',
    title: 'Signals & Continuous Systems',
    department: 'Electrical Engineering',
    credits: 3,
    level: '200',
    term: 'Fall 2026',
    description: 'Continuous-time and discrete-time signals, LTI systems, convolution integrals, Fourier transforms, Laplace transforms, and frequency-domain stability criteria.',
    prerequisites: ['MATH-215', 'PHYS-102'],
    syllabusTopics: ['LTI System Properties & Impulse Response', 'Convolution & Difference Equations', 'Continuous Fourier Transforms', 'Laplace Poles, Zeros & Stability', 'Analog Filter Synthesis'],
    sections: [
      {
        id: 'sec-ece210-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Rajiv Menon',
        instructorEmail: 'menon.r@campus.edu',
        schedule: 'Mon, Wed, Fri · 11:30 - 12:45 PM',
        days: ['Mon', 'Wed', 'Fri'],
        timeSlot: '11:30 - 12:45 PM',
        location: 'Tesla Hall 202',
        totalSeats: 40,
        enrolledSeats: 26,
        waitlistCapacity: 10,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-ece320',
    code: 'ECE-320',
    title: 'Embedded Microcontrollers & Edge Systems',
    department: 'Electrical Engineering',
    credits: 4,
    level: '300',
    term: 'Fall 2026',
    description: 'ARM Cortex architectures, memory-mapped I/O, interrupt service routines, DMA transfers, I2C/SPI bus protocols, real-time operating systems (FreeRTOS), and hardware sensors.',
    prerequisites: ['ECE-210', 'CS-101'],
    syllabusTopics: ['ARM Cortex-M Hardware & Registers', 'Interrupt Latency & Priorities', 'SPI, I2C & UART Peripherals', 'FreeRTOS Task Queues & Semaphores', 'Low-Power Sleep Modes'],
    sections: [
      {
        id: 'sec-ece320-01',
        sectionCode: 'LEC-01',
        instructor: 'Prof. Simon Keller',
        instructorEmail: 'keller.s@campus.edu',
        schedule: 'Tue, Thu · 03:15 - 04:45 PM',
        days: ['Tue', 'Thu'],
        timeSlot: '03:15 - 04:45 PM',
        location: 'Robotics Workshop B',
        totalSeats: 30,
        enrolledSeats: 28,
        waitlistCapacity: 8,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-math215',
    code: 'MATH-215',
    title: 'Linear Algebra & Matrix Decompositions',
    department: 'Mathematics',
    credits: 4,
    level: '200',
    term: 'Fall 2026',
    description: 'Vector spaces, linear maps, orthogonal bases, Gram-Schmidt orthogonalization, eigenvalues/eigenvectors, Singular Value Decomposition (SVD), and least-squares approximations.',
    prerequisites: ['MATH-102 (Calculus II)'],
    syllabusTopics: ['Vector Subspaces & Dimension', 'Rank-Nullity Theorem', 'Orthogonality & Projections', 'Spectral Theorem & Diagonalization', 'Singular Value Decomposition (SVD)'],
    sections: [
      {
        id: 'sec-math215-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Miriam Becker',
        instructorEmail: 'becker.m@campus.edu',
        schedule: 'Mon, Wed, Fri · 08:30 - 09:45 AM',
        days: ['Mon', 'Wed', 'Fri'],
        timeSlot: '08:30 - 09:45 AM',
        location: 'Euler Hall 105',
        totalSeats: 65,
        enrolledSeats: 58,
        waitlistCapacity: 15,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-des110',
    code: 'DES-110',
    title: 'Human-Computer Interaction & Product Design',
    department: 'Design & Media',
    credits: 3,
    level: '100',
    term: 'Fall 2026',
    description: 'Cognitive models of user interaction, affordances, information architecture, wireframing, heuristic usability evaluation, accessibility (WCAG AA), and modern design systems.',
    prerequisites: ['None'],
    syllabusTopics: ['Mental Models & Affordances', 'Typography & Visual Hierarchy', 'User Research & Journey Mapping', 'Interactive Prototyping', 'Accessibility & Usability Testing'],
    sections: [
      {
        id: 'sec-des110-01',
        sectionCode: 'LEC-01',
        instructor: 'Prof. Leila Ortiz',
        instructorEmail: 'ortiz.l@campus.edu',
        schedule: 'Wed, Fri · 02:00 - 03:30 PM',
        days: ['Wed', 'Fri'],
        timeSlot: '02:00 - 03:30 PM',
        location: 'Design Studio 4A',
        totalSeats: 28,
        enrolledSeats: 27,
        waitlistCapacity: 8,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-mgt201',
    code: 'MGT-201',
    title: 'Technology Venture Formation & Product Strategy',
    department: 'Management',
    credits: 3,
    level: '200',
    term: 'Fall 2026',
    description: 'Frameworks for launching tech startups, market sizing, unit economics, IP protection, venture capital cap tables, customer discovery, and go-to-market execution.',
    prerequisites: ['None (Sophomore standing)'],
    syllabusTopics: ['Market Sizing (TAM/SAM/SOM)', 'Customer Discovery Interviews', 'Financial Modeling & Burn Rate', 'Term Sheets & Cap Tables', 'Go-To-Market Playbooks'],
    sections: [
      {
        id: 'sec-mgt201-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Gregory Sterling',
        instructorEmail: 'sterling.g@campus.edu',
        schedule: 'Tue, Thu · 04:00 - 05:30 PM',
        days: ['Tue', 'Thu'],
        timeSlot: '04:00 - 05:30 PM',
        location: 'Business Pavilion 102',
        totalSeats: 45,
        enrolledSeats: 18,
        waitlistCapacity: 10,
        waitlistCount: 0
      }
    ]
  },
  {
    id: 'crs-cs490',
    code: 'CS-490',
    title: 'Senior Capstone Software Engineering',
    department: 'Computer Science',
    credits: 4,
    level: '400',
    term: 'Fall 2026',
    description: 'Year-long enterprise software development practicum. Multi-disciplinary teams architect, test, CI/CD deploy, and present an end-to-end production software system for real stakeholders.',
    prerequisites: ['CS-350', 'Senior Standing'],
    syllabusTopics: ['System Architecture & DDD', 'CI/CD Pipelines & Infrastructure as Code', 'Automated Integration Testing', 'Security Audits & Pen-testing', 'Executive Final Showcase'],
    sections: [
      {
        id: 'sec-cs490-01',
        sectionCode: 'LEC-01',
        instructor: 'Dr. Aris Thorne & Industry Mentors',
        instructorEmail: 'thorne.a@campus.edu',
        schedule: 'Fri · 01:00 - 04:00 PM',
        days: ['Fri'],
        timeSlot: '01:00 - 04:00 PM',
        location: 'Incubation Lab 300',
        totalSeats: 24,
        enrolledSeats: 24,
        waitlistCapacity: 6,
        waitlistCount: 2
      }
    ]
  }
];

export const INITIAL_REGISTERED_COURSES: RegisteredCourse[] = [
  {
    courseId: 'crs-cs101',
    courseCode: 'CS-101',
    courseTitle: 'Introduction to Computer Science & Python',
    credits: 4,
    sectionId: 'sec-cs101-01',
    sectionCode: 'LEC-01',
    instructor: 'Dr. Aris Thorne',
    schedule: 'Mon, Wed, Fri · 09:00 - 10:15 AM',
    days: ['Mon', 'Wed', 'Fri'],
    timeSlot: '09:00 - 10:15 AM',
    location: 'Turing Hall 101',
    status: 'enrolled',
    registeredAt: '2026-09-12'
  },
  {
    courseId: 'crs-math215',
    courseCode: 'MATH-215',
    courseTitle: 'Linear Algebra & Matrix Decompositions',
    credits: 4,
    sectionId: 'sec-math215-01',
    sectionCode: 'LEC-01',
    instructor: 'Dr. Miriam Becker',
    schedule: 'Mon, Wed, Fri · 08:30 - 09:45 AM',
    days: ['Mon', 'Wed', 'Fri'],
    timeSlot: '08:30 - 09:45 AM',
    location: 'Euler Hall 105',
    status: 'enrolled',
    registeredAt: '2026-09-12'
  }
];
