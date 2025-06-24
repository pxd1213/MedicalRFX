import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
import NetworkSearch from './NetworkSearch';
import { Project, Consultant, RegisteredBody, Company } from '../types';
import { mockProjects, mockConsultantsData, mockRegisteredBodiesData, mockCompaniesData } from '../data/mockData';

// Add missing type declarations
// Remove custom ChangeEvent interfaces as they are not needed with proper React imports

interface DashboardProps {
  userType: 'consultant' | 'company' | 'admin';
  onPostProject?: () => void;
}

export default function Dashboard({ userType, onPostProject }: DashboardProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'open' | 'in-review' | 'awarded' | 'completed'>('all');
  const [activeTab, setActiveTab] = useState<'projects' | 'network'>('projects');

  const filteredProjects = mockProjects.filter((project: Project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  const handleBidClick = (project: Project) => {
    navigate(`/project/${project.id}/bid`);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value as 'all' | 'open' | 'in-review' | 'awarded' | 'completed');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-4 mt-4 sm:mt-0">
          {userType === 'company' && onPostProject && (
            <button
              onClick={onPostProject}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="w-5 h-5 mr-2" />
              Post Project
            </button>
          )}
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('projects')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'projects' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('network')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'network' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Network
          </button>
        </nav>
      </div>

      {activeTab === 'projects' && (
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="w-full sm:w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilterStatus(e.target.value)}
              className="mt-4 sm:mt-0 sm:ml-4 block w-full sm:w-48 pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="in-review">In Review</option>
              <option value="awarded">Awarded</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                project={project}
                onViewDetails={() => handleProjectClick(project)}
                onPlaceBid={() => handleBidClick(project)}
                showBidButton={userType === 'consultant'}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'network' && (
        <NetworkSearch
          consultants={mockConsultantsData}
          registeredBodies={mockRegisteredBodiesData}
          companies={mockCompaniesData}
        />
      )}
    </div>
  );
}