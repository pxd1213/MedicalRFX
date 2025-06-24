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

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'consultant' | 'company' | 'admin';
  expertise?: string[];
  experience?: number;
  location?: string;
  company?: string;
  portfolio?: string[];
}

export interface Consultant extends User {
  specializations: string[];
  certifications: string[];
  experience: number;
  rating: number;
  availability: string;
  areasOfExpertise: string[];
  projectsCompleted: number;
}

export interface RegisteredBody {
  id: string;
  name: string;
  location: string;
  accreditation: string;
  scope: string[];
  experience: number;
  rating: number;
  services: string[];
  clientsServed: number;
}

export interface Company {
  id: string;
  name: string;
  size: string;
  location: string;
  focus: string[];
  website: string;
}
