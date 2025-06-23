import React from 'react';
import { X, Calendar, MapPin, DollarSign, User, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onPlaceBid?: (project: Project) => void;
  showBidButton?: boolean;
}

export default function ProjectDetails({ 
  project, 
  onClose, 
  onPlaceBid, 
  showBidButton = true 
}: ProjectDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <DollarSign className="w-4 h-4 mr-2" />
              <div>
                <p className="font-medium text-gray-900">{project.budget}</p>
                <p>Budget</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <div>
                <p className="font-medium text-gray-900">{project.timeline}</p>
                <p>Timeline</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <div>
                <p className="font-medium text-gray-900">{project.location}</p>
                <p>Location</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-2" />
              <div>
                <p className="font-medium text-gray-900">{project.bidCount} bids</p>
                <p>Received</p>
              </div>
            </div>
          </div>

          {/* Device Information */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Device Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Device Type:</span>
                <span className="ml-2 text-gray-600">{project.deviceType}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Regulatory Pathway:</span>
                <span className="ml-2 text-gray-600">{project.regulatoryPathway}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Project Description</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {project.requirements.map((req, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Expected Deliverables</h3>
            <ul className="space-y-2">
              {project.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          {showBidButton && project.status === 'open' && onPlaceBid && (
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="flex-1 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onPlaceBid(project);
                  onClose();
                }}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Place Bid
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}