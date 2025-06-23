import React, { useState } from 'react';
import { Plus, Filter, Search, TrendingUp, DollarSign, Calendar, Award, Users } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import BidModal from './BidModal';
import NetworkSearch from './NetworkSearch';
import { Project } from '../types';
import { mockConsultants, mockRegisteredBodies, mockCompanies } from '../data/mockData';

interface DashboardProps {
  userType: 'company' | 'consultant';
  projects: Project[];
  onPostProject?: () => void;
}

export default function Dashboard({ userType, projects, onPostProject }: DashboardProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [bidProject, setBidProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [activeTab, setActiveTab] = useState<'projects' | 'network'>('projects');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleSubmitBid = (bidData: any) => {
    console.log('Bid submitted:', bidData);
    // In a real app, this would send the bid to the backend
  };

  const stats = userType === 'company' 
    ? [
        { label: 'Active Projects', value: '3', icon: Calendar, color: 'text-blue-600' },
        { label: 'Total Bids', value: '47', icon: TrendingUp, color: 'text-green-600' },
        { label: 'Avg. Bid Price', value: '$18.5K', icon: DollarSign, color: 'text-purple-600' },
        { label: 'Success Rate', value: '94%', icon: Award, color: 'text-orange-600' }
      ]
    : [
        { label: 'Active Bids', value: '8', icon: Calendar, color: 'text-blue-600' },
        { label: 'Won Projects', value: '12', icon: Award, color: 'text-green-600' },
        { label: 'Total Earnings', value: '$156K', icon: DollarSign, color: 'text-purple-600' },
        { label: 'Success Rate', value: '78%', icon: TrendingUp, color: 'text-orange-600' }
      ];

  const tabs = [
    { id: 'projects', label: userType === 'company' ? 'My Projects' : 'Available Projects', icon: Calendar },
    { id: 'network', label: 'Network Directory', icon: Users }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {userType === 'company' ? 'Company Dashboard' : 'Consultant Dashboard'}
          </h1>
          <p className="text-gray-600 mt-1">
            {userType === 'company' 
              ? 'Manage your projects, review proposals, and connect with experts' 
              : 'Find opportunities, manage your bids, and grow your network'
            }
          </p>
        </div>
        {userType === 'company' && onPostProject && activeTab === 'projects' && (
          <button
            onClick={onPostProject}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center mt-4 sm:mt-0"
          >
            <Plus className="w-5 h-5 mr-2" />
            Post New Project
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'projects' ? (
        <>
          {/* Filters and Search */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Filter className="w-5 h-5 text-gray-400 mr-2" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in-review">In Review</option>
                    <option value="awarded">Awarded</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
                onPlaceBid={userType === 'consultant' ? setBidProject : undefined}
                showBidButton={userType === 'consultant'}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </>
      ) : (
        <NetworkSearch
          consultants={mockConsultants}
          registeredBodies={mockRegisteredBodies}
          companies={mockCompanies}
        />
      )}

      {/* Modals */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPlaceBid={userType === 'consultant' ? setBidProject : undefined}
          showBidButton={userType === 'consultant'}
        />
      )}

      {bidProject && (
        <BidModal
          project={bidProject}
          onClose={() => setBidProject(null)}
          onSubmitBid={handleSubmitBid}
        />
      )}
    </div>
  );
}