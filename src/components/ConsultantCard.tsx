import React from 'react';
import { Star, MapPin, Clock, CheckCircle, Globe, Award } from 'lucide-react';
import { Consultant } from '../types';

interface ConsultantCardProps {
  consultant: Consultant;
  onViewProfile: (consultant: Consultant) => void;
  onContact: (consultant: Consultant) => void;
}

export default function ConsultantCard({ consultant, onViewProfile, onContact }: ConsultantCardProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'busy': return 'Limited Availability';
      case 'unavailable': return 'Not Available';
      default: return 'Unknown';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {consultant.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-900">{consultant.name}</h3>
              {consultant.verified && (
                <CheckCircle className="w-4 h-4 text-blue-500 ml-2" />
              )}
            </div>
            <p className="text-gray-600 text-sm">{consultant.title}</p>
            <p className="text-gray-500 text-sm">{consultant.company}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(consultant.availability)}`}>
          {getAvailabilityText(consultant.availability)}
        </span>
      </div>

      {/* Rating and Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span className="font-medium text-gray-900">{consultant.rating}</span>
          <span className="ml-1">({consultant.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{consultant.location}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{consultant.responseTime}</span>
        </div>
      </div>

      {/* Rate and Experience */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-500">Hourly Rate:</span>
          <span className="ml-2 font-medium text-gray-900">{consultant.hourlyRate}</span>
        </div>
        <div>
          <span className="text-gray-500">Experience:</span>
          <span className="ml-2 font-medium text-gray-900">{consultant.experience}</span>
        </div>
        <div>
          <span className="text-gray-500">Projects:</span>
          <span className="ml-2 font-medium text-gray-900">{consultant.completedProjects}</span>
        </div>
        <div>
          <span className="text-gray-500">Languages:</span>
          <span className="ml-2 font-medium text-gray-900">{consultant.languages.join(', ')}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{consultant.description}</p>

      {/* Specializations */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {consultant.specializations.slice(0, 3).map((spec, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
            >
              {spec}
            </span>
          ))}
          {consultant.specializations.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{consultant.specializations.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Certifications */}
      {consultant.certifications.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Award className="w-4 h-4 mr-1" />
            <span className="font-medium">Certifications</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {consultant.certifications.slice(0, 2).map((cert, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
              >
                {cert}
              </span>
            ))}
            {consultant.certifications.length > 2 && (
              <span className="text-gray-500 text-xs px-2 py-1">
                +{consultant.certifications.length - 2} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={() => onViewProfile(consultant)}
          className="flex-1 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          View Profile
        </button>
        <button
          onClick={() => onContact(consultant)}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Contact
        </button>
      </div>
    </div>
  );
}