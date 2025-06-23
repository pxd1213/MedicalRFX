import { Project, User, Consultant, RegisteredBody, Company } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'FDA 510(k) Submission for Cardiac Monitoring Device',
    description: 'Seeking regulatory consultant for FDA 510(k) submission of a novel cardiac monitoring device. The device is a Class II medical device requiring predicate device identification, substantial equivalence demonstration, and comprehensive submission preparation.',
    deviceType: 'Class II',
    regulatoryPathway: '510(k)',
    timeline: '4-5 months',
    budget: '$18,000 - $25,000',
    location: 'Remote',
    postedBy: 'CardioTech Solutions',
    postedDate: '2 days ago',
    status: 'open',
    bidCount: 8,
    tags: ['FDA', '510k', 'Cardiac', 'Class II', 'Medical Device'],
    requirements: [
      'Minimum 5 years experience with FDA 510(k) submissions',
      'Previous experience with cardiac devices preferred',
      'Knowledge of FDA guidance documents for cardiac monitors',
      'Ability to work within tight deadlines'
    ],
    deliverables: [
      'Complete 510(k) submission package',
      'Predicate device analysis',
      'Substantial equivalence documentation',
      'FDA correspondence handling',
      'Post-submission support'
    ]
  },
  {
    id: '2',
    title: 'CE Marking for Surgical Instrument Set',
    description: 'European market entry support needed for surgical instrument set. Requires CE marking compliance, technical documentation preparation, and MDR alignment for Class IIa medical devices.',
    deviceType: 'Class IIa',
    regulatoryPathway: 'CE Marking',
    timeline: '6-8 weeks',
    budget: '$12,000 - $18,000',
    location: 'EU timezone preferred',
    postedBy: 'SurgiPrecision Inc.',
    postedDate: '5 days ago',
    status: 'open',
    bidCount: 12,
    tags: ['CE Marking', 'MDR', 'Surgical', 'Europe', 'Class IIa'],
    requirements: [
      'EU MDR expertise required',
      'Experience with surgical instruments',
      'Notified Body relationship preferred',
      'Technical documentation writing skills'
    ],
    deliverables: [
      'Technical documentation package',
      'Risk management documentation',
      'Clinical evaluation report',
      'Declaration of conformity',
      'Notified Body submission support'
    ]
  },
  {
    id: '3',
    title: 'Health Canada Medical Device License Application',
    description: 'Support needed for Health Canada medical device license application for diagnostic imaging software. Class II medical device software requiring quality system certification and software lifecycle processes.',
    deviceType: 'Software',
    regulatoryPathway: 'Health Canada',
    timeline: '3-4 months',
    budget: '$15,000 - $22,000',
    location: 'Canada preferred',
    postedBy: 'DiagnoSoft Technologies',
    postedDate: '1 week ago',
    status: 'in-review',
    bidCount: 6,
    tags: ['Health Canada', 'Software', 'Diagnostic', 'Class II', 'MDRL'],
    requirements: [
      'Health Canada MDRL experience',
      'Software as Medical Device expertise',
      'ISO 14155 knowledge',
      'Quality management system experience'
    ],
    deliverables: [
      'Medical Device License application',
      'Software documentation package',
      'Quality management system documentation',
      'Clinical evidence compilation',
      'Regulatory pathway guidance'
    ]
  },
  {
    id: '4',
    title: 'FDA De Novo Pathway for Novel Therapeutic Device',
    description: 'Innovative therapeutic device requiring FDA De Novo classification pathway. First-of-kind device with no predicate requiring comprehensive regulatory strategy and risk-benefit analysis.',
    deviceType: 'Class III',
    regulatoryPathway: 'De Novo',
    timeline: '8-12 months',
    budget: '$35,000 - $50,000',
    location: 'US-based required',
    postedBy: 'InnoMed Therapeutics',
    postedDate: '3 days ago',
    status: 'open',
    bidCount: 4,
    tags: ['FDA', 'De Novo', 'Novel Device', 'Therapeutic', 'Class III'],
    requirements: [
      'Extensive FDA De Novo pathway experience',
      'Clinical trial design expertise',
      'Risk-benefit analysis capabilities',
      'FDA meeting preparation experience'
    ],
    deliverables: [
      'De Novo classification request',
      'Comprehensive regulatory strategy',
      'Clinical development plan',
      'Risk-benefit analysis',
      'FDA meeting support and correspondence'
    ]
  },
  {
    id: '5',
    title: 'Multi-jurisdictional IVD Registration Strategy',
    description: 'In vitro diagnostic device requiring regulatory approval in US (FDA), Europe (CE/IVDR), and Canada. Complex multi-jurisdictional strategy needed for rapid market access.',
    deviceType: 'Diagnostic',
    regulatoryPathway: 'Multiple',
    timeline: '6-9 months',
    budget: '$28,000 - $40,000',
    location: 'Remote - Global team',
    postedBy: 'GlobalDx Laboratories',
    postedDate: '1 day ago',
    status: 'open',
    bidCount: 15,
    tags: ['IVD', 'Global', 'FDA', 'IVDR', 'Multi-jurisdictional'],
    requirements: [
      'Multi-jurisdictional regulatory experience',
      'IVD/IVDR expertise required',
      'Project management capabilities',
      'Global regulatory network'
    ],
    deliverables: [
      'Global regulatory strategy document',
      'Jurisdiction-specific submission packages',
      'Harmonized technical documentation',
      'Regulatory timeline and milestones',
      'Cross-jurisdictional compliance guidance'
    ]
  },
  {
    id: '6',
    title: 'Quality Management System Implementation',
    description: 'ISO 13485 quality management system implementation for emerging medical device company. Need comprehensive QMS setup including procedures, training, and audit readiness.',
    deviceType: 'Multiple',
    regulatoryPathway: 'ISO 13485',
    timeline: '4-6 months',
    budget: '$20,000 - $30,000',
    location: 'Hybrid - Some on-site required',
    postedBy: 'MedTech Innovations',
    postedDate: '4 days ago',
    status: 'awarded',
    bidCount: 9,
    tags: ['ISO 13485', 'QMS', 'Quality', 'Implementation', 'Training'],
    requirements: [
      'ISO 13485 implementation experience',
      'Quality management expertise',
      'Training and documentation skills',
      'Audit preparation experience'
    ],
    deliverables: [
      'Complete QMS documentation suite',
      'Procedure development and training',
      'Internal audit program setup',
      'Management review processes',
      'Regulatory compliance framework'
    ]
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@cardiotechsolutions.com',
    name: 'John Martinez',
    company: 'CardioTech Solutions',
    type: 'company',
    rating: 4.8,
    location: 'Boston, MA',
    verified: true,
    joinDate: '2023-01-15'
  },
  {
    id: '2',
    email: 'sarah@regulatoryconsult.com',
    name: 'Dr. Sarah Chen',
    company: 'Regulatory Excellence Consulting',
    type: 'consultant',
    rating: 4.9,
    location: 'San Francisco, CA',
    verified: true,
    joinDate: '2022-08-20'
  }
];

export const mockConsultants: Consultant[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    company: 'Regulatory Excellence Consulting',
    title: 'Senior Regulatory Consultant',
    location: 'San Francisco, CA',
    rating: 4.9,
    reviewCount: 47,
    hourlyRate: '$175 - $225/hr',
    availability: 'available',
    specializations: ['FDA 510(k)', 'CE Marking', 'Class II Devices', 'Cardiovascular'],
    certifications: ['RAC', 'PMP', 'ISO 13485 Lead Auditor'],
    experience: '12+ years',
    description: 'Experienced regulatory consultant specializing in FDA submissions and European market access for medical devices. Led over 150 successful device registrations.',
    completedProjects: 89,
    responseTime: '< 2 hours',
    languages: ['English', 'Mandarin'],
    verified: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    company: 'MedReg Solutions',
    title: 'Principal Regulatory Affairs Manager',
    location: 'Boston, MA',
    rating: 4.8,
    reviewCount: 32,
    hourlyRate: '$150 - $200/hr',
    availability: 'busy',
    specializations: ['FDA PMA', 'De Novo', 'Class III Devices', 'Clinical Trials'],
    certifications: ['RAC', 'RAPS Fellow'],
    experience: '15+ years',
    description: 'Former FDA reviewer with extensive experience in high-risk device approvals and clinical trial design for novel medical technologies.',
    completedProjects: 67,
    responseTime: '< 4 hours',
    languages: ['English', 'Spanish'],
    verified: true
  },
  {
    id: '3',
    name: 'Dr. Emma Thompson',
    company: 'EuroMed Regulatory',
    title: 'EU MDR Specialist',
    location: 'London, UK',
    rating: 4.7,
    reviewCount: 28,
    hourlyRate: '€120 - €180/hr',
    availability: 'available',
    specializations: ['EU MDR', 'CE Marking', 'Notified Body Relations', 'IVDR'],
    certifications: ['RAC', 'EU MDR Certified', 'ISO 14155'],
    experience: '10+ years',
    description: 'European regulatory expert with deep knowledge of MDR transition and CE marking processes. Strong relationships with major Notified Bodies.',
    completedProjects: 54,
    responseTime: '< 3 hours',
    languages: ['English', 'German', 'French'],
    verified: true
  },
  {
    id: '4',
    name: 'James Park',
    company: 'Global Device Consulting',
    title: 'Multi-Jurisdictional Regulatory Lead',
    location: 'Toronto, Canada',
    rating: 4.6,
    reviewCount: 19,
    hourlyRate: '$140 - $190/hr',
    availability: 'available',
    specializations: ['Health Canada', 'FDA', 'PMDA Japan', 'Global Strategy'],
    certifications: ['RAC', 'Health Canada MDEL'],
    experience: '8+ years',
    description: 'Specialist in global regulatory strategies with experience across North America, Europe, and Asia-Pacific markets.',
    completedProjects: 41,
    responseTime: '< 6 hours',
    languages: ['English', 'Korean', 'Japanese'],
    verified: true
  },
  {
    id: '5',
    name: 'Dr. Lisa Wang',
    company: 'SoftMed Regulatory',
    title: 'Software as Medical Device Expert',
    location: 'Seattle, WA',
    rating: 4.9,
    reviewCount: 35,
    hourlyRate: '$160 - $210/hr',
    availability: 'busy',
    specializations: ['SaMD', 'AI/ML Devices', 'Cybersecurity', 'Software Lifecycle'],
    certifications: ['RAC', 'IEC 62304', 'ISO 14971'],
    experience: '9+ years',
    description: 'Leading expert in software medical device regulations with focus on AI/ML applications and cybersecurity compliance.',
    completedProjects: 73,
    responseTime: '< 4 hours',
    languages: ['English', 'Mandarin'],
    verified: true
  }
];

export const mockRegisteredBodies: RegisteredBody[] = [
  {
    id: '1',
    name: 'TÜV SÜD Product Service',
    type: 'notified-body',
    location: 'Munich',
    country: 'Germany',
    accreditations: ['ISO 17021', 'ISO 17065', 'EU MDR', 'IVDR'],
    specializations: ['Active Implantable Devices', 'Cardiovascular', 'Orthopedic', 'Software'],
    website: 'https://www.tuvsud.com',
    contactEmail: 'medical@tuvsud.com',
    description: 'Leading European Notified Body with extensive experience in medical device conformity assessment and CE marking.',
    rating: 4.7,
    reviewCount: 156,
    verified: true
  },
  {
    id: '2',
    name: 'BSI Group',
    type: 'notified-body',
    location: 'London',
    country: 'United Kingdom',
    accreditations: ['ISO 17021', 'ISO 17065', 'EU MDR', 'UKCA'],
    specializations: ['IVD', 'Surgical Instruments', 'Dental Devices', 'Quality Systems'],
    website: 'https://www.bsigroup.com',
    contactEmail: 'medical.devices@bsigroup.com',
    description: 'Global standards and certification body with comprehensive medical device assessment capabilities.',
    rating: 4.6,
    reviewCount: 203,
    verified: true
  },
  {
    id: '3',
    name: 'Intertek Medical Device Services',
    type: 'testing-lab',
    location: 'Melville, NY',
    country: 'United States',
    accreditations: ['ISO 17025', 'FDA 510(k) Testing', 'IEC 60601', 'ISO 10993'],
    specializations: ['Biocompatibility', 'Electrical Safety', 'EMC Testing', 'Software Validation'],
    website: 'https://www.intertek.com',
    contactEmail: 'medical@intertek.com',
    description: 'Comprehensive testing laboratory providing pre-market testing services for medical device manufacturers.',
    rating: 4.5,
    reviewCount: 89,
    verified: true
  },
  {
    id: '4',
    name: 'SGS Medical Device Services',
    type: 'testing-lab',
    location: 'Geneva',
    country: 'Switzerland',
    accreditations: ['ISO 17025', 'GLP', 'ISO 10993', 'ASTM Standards'],
    specializations: ['Biocompatibility', 'Sterilization Validation', 'Package Testing', 'Clinical Research'],
    website: 'https://www.sgs.com',
    contactEmail: 'medical.devices@sgs.com',
    description: 'Global testing and certification company offering comprehensive medical device testing and validation services.',
    rating: 4.4,
    reviewCount: 127,
    verified: true
  },
  {
    id: '5',
    name: 'DEKRA Medical Device Testing',
    type: 'certification-body',
    location: 'Stuttgart',
    country: 'Germany',
    accreditations: ['ISO 17021', 'ISO 13485', 'EU MDR', 'FDA Recognition'],
    specializations: ['Quality Management', 'Risk Management', 'Clinical Evaluation', 'Post-Market Surveillance'],
    website: 'https://www.dekra.com',
    contactEmail: 'medical@dekra.com',
    description: 'International certification body specializing in quality management systems and regulatory compliance for medical devices.',
    rating: 4.6,
    reviewCount: 94,
    verified: true
  }
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Medtronic',
    type: 'medical-device',
    location: 'Minneapolis, MN',
    country: 'United States',
    size: '10,000+ employees',
    founded: '1949',
    website: 'https://www.medtronic.com',
    description: 'Global leader in medical technology, services, and solutions with a focus on improving patient outcomes.',
    specializations: ['Cardiovascular', 'Diabetes', 'Neurological', 'Surgical Technologies'],
    rating: 4.8,
    reviewCount: 245,
    verified: true
  },
  {
    id: '2',
    name: 'Boston Scientific',
    type: 'medical-device',
    location: 'Marlborough, MA',
    country: 'United States',
    size: '5,000-10,000 employees',
    founded: '1979',
    website: 'https://www.bostonscientific.com',
    description: 'Leading innovator of medical solutions that improve the health of patients around the world.',
    specializations: ['Interventional Cardiology', 'Electrophysiology', 'Urology', 'Endoscopy'],
    rating: 4.7,
    reviewCount: 189,
    verified: true
  },
  {
    id: '3',
    name: 'Siemens Healthineers',
    type: 'medical-device',
    location: 'Erlangen',
    country: 'Germany',
    size: '10,000+ employees',
    founded: '2018',
    website: 'https://www.siemens-healthineers.com',
    description: 'Pioneer and leader in medical technology with over 170 years of experience and 18,000 patents globally.',
    specializations: ['Imaging', 'Diagnostics', 'Advanced Therapies', 'Digital Health'],
    rating: 4.6,
    reviewCount: 167,
    verified: true
  },
  {
    id: '4',
    name: 'IQVIA',
    type: 'cro',
    location: 'Durham, NC',
    country: 'United States',
    size: '10,000+ employees',
    founded: '2016',
    website: 'https://www.iqvia.com',
    description: 'Leading global provider of advanced analytics, technology solutions and clinical research services.',
    specializations: ['Clinical Trials', 'Real World Evidence', 'Technology Solutions', 'Consulting'],
    rating: 4.5,
    reviewCount: 134,
    verified: true
  },
  {
    id: '5',
    name: 'Regulatory Pathways',
    type: 'consulting',
    location: 'Rockville, MD',
    country: 'United States',
    size: '50-100 employees',
    founded: '2008',
    website: 'https://www.regulatorypathways.com',
    description: 'Specialized regulatory consulting firm focused on medical device and pharmaceutical regulatory strategy.',
    specializations: ['FDA Strategy', 'EU Regulatory', 'Quality Systems', 'Clinical Affairs'],
    rating: 4.9,
    reviewCount: 78,
    verified: true
  },
  {
    id: '6',
    name: 'Emergo by UL',
    type: 'consulting',
    location: 'Austin, TX',
    country: 'United States',
    size: '100-500 employees',
    founded: '1997',
    website: 'https://www.emergobyul.com',
    description: 'Global regulatory consulting and testing services for medical device and IVD manufacturers.',
    specializations: ['Global Market Access', 'Regulatory Strategy', 'Quality Assurance', 'Clinical Research'],
    rating: 4.7,
    reviewCount: 112,
    verified: true
  }
];