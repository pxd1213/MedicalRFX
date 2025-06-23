import React from 'react';
import { Calendar, MapPin, DollarSign, Users, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  onPlaceBid?: (project: Project) => void;
  showBidButton?: boolean;
}

export default function ProjectCard({ 
  project, 
  onViewDetails, 
  onPlaceBid, 
  showBidButton = true 
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'in-review': return 'bg-yellow-100 text-yellow-800';
      case 'awarded': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ml-4 ${getStatusColor(project.status)}`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </span>
      </div>

      {/* Project Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Tag className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="font-medium">{project.deviceType}</span>
          <span className="mx-2">•</span>
          <span>{project.regulatoryPathway}</span>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{project.budget}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{project.bidCount} bids</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-gray-500 text-xs px-2 py-1">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={() => onViewDetails(project)}
          className="flex-1 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          View Details
        </button>
        {showBidButton && project.status === 'open' && onPlaceBid && (
          <button
            onClick={() => onPlaceBid(project)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Place Bid
          </button>
        )}
      </div>

      {/* Posted Date */}
      <div className="mt-3 text-xs text-gray-500">
        Posted {project.postedDate} by {project.postedBy}
      </div>
    </div>
  );
}