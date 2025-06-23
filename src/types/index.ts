export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  type: 'company' | 'consultant';
  avatar?: string;
  rating?: number;
  location?: string;
  verified: boolean;
  joinDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  deviceType: string;
  regulatoryPathway: string;
  timeline: string;
  budget: string;
  location: string;
  postedBy: string;
  postedDate: string;
  status: 'open' | 'in-review' | 'awarded' | 'completed';
  bidCount: number;
  tags: string[];
  requirements: string[];
  deliverables: string[];
}

export interface Bid {
  id: string;
  projectId: string;
  consultantId: string;
  consultantName: string;
  consultantCompany: string;
  proposedPrice: string;
  timeline: string;
  proposal: string;
  submittedDate: string;
  status: 'pending' | 'accepted' | 'rejected';
  rating?: number;
}

export interface Consultant {
  id: string;
  name: string;
  company: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  availability: 'available' | 'busy' | 'unavailable';
  specializations: string[];
  certifications: string[];
  experience: string;
  description: string;
  completedProjects: number;
  responseTime: string;
  languages: string[];
  verified: boolean;
  avatar?: string;
}

export interface RegisteredBody {
  id: string;
  name: string;
  type: 'notified-body' | 'testing-lab' | 'certification-body';
  location: string;
  country: string;
  accreditations: string[];
  specializations: string[];
  website: string;
  contactEmail: string;
  description: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  logo?: string;
}

export interface Company {
  id: string;
  name: string;
  type: 'medical-device' | 'pharma' | 'biotech' | 'cro' | 'consulting';
  location: string;
  country: string;
  size: string;
  founded: string;
  website: string;
  description: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  logo?: string;
}