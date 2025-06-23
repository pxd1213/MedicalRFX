import React from 'react';
import { Star, MapPin, Globe, CheckCircle, Award, ExternalLink } from 'lucide-react';
import { RegisteredBody } from '../types';

interface RegisteredBodyCardProps {
  body: RegisteredBody;
  onViewDetails: (body: RegisteredBody) => void;
  onContact: (body: RegisteredBody) => void;
}

export default function RegisteredBodyCard({ body, onViewDetails, onContact }: RegisteredBodyCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'notified-body': return 'bg-blue-100 text-blue-800';
      case 'testing-lab': return 'bg-green-100 text-green-800';
      case 'certification-body': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'notified-body': return 'Notified Body';
      case 'testing-lab': return 'Testing Laboratory';
      case 'certification-body': return 'Certification Body';
      default: return type;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-gray-600" />
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-900">{body.name}</h3>
              {body.verified && (
                <CheckCircle className="w-4 h-4 text-blue-500 ml-2" />
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{body.location}, {body.country}</span>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(body.type)}`}>
          {getTypeText(body.type)}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span className="font-medium text-gray-900">{body.rating}</span>
          <span className="ml-1">({body.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center">
          <Globe className="w-4 h-4 mr-1" />
          <a 
            href={body.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            Website
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{body.description}</p>

      {/* Accreditations */}
      <div className="mb-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Award className="w-4 h-4 mr-1" />
          <span className="font-medium">Accreditations</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {body.accreditations.slice(0, 3).map((accred, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium"
            >
              {accred}
            </span>
          ))}
          {body.accreditations.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{body.accreditations.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Specializations */}
      <div className="mb-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="font-medium">Specializations</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {body.specializations.slice(0, 3).map((spec, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
            >
              {spec}
            </span>
          ))}
          {body.specializations.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{body.specializations.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={() => onViewDetails(body)}
          className="flex-1 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          View Details
        </button>
        <button
          onClick={() => onContact(body)}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Contact
        </button>
      </div>
    </div>
  );
}