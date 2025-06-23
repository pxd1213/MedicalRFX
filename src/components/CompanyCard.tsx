import React from 'react';
import { Star, MapPin, Users, Calendar, Globe, CheckCircle, ExternalLink } from 'lucide-react';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
  onViewProfile: (company: Company) => void;
  onContact: (company: Company) => void;
}

export default function CompanyCard({ company, onViewProfile, onContact }: CompanyCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'medical-device': return 'bg-blue-100 text-blue-800';
      case 'pharma': return 'bg-green-100 text-green-800';
      case 'biotech': return 'bg-purple-100 text-purple-800';
      case 'cro': return 'bg-orange-100 text-orange-800';
      case 'consulting': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'medical-device': return 'Medical Device';
      case 'pharma': return 'Pharmaceutical';
      case 'biotech': return 'Biotechnology';
      case 'cro': return 'CRO';
      case 'consulting': return 'Consulting';
      default: return type;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-semibold text-lg">
              {company.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
              {company.verified && (
                <CheckCircle className="w-4 h-4 text-blue-500 ml-2" />
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{company.location}, {company.country}</span>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(company.type)}`}>
          {getTypeText(company.type)}
        </span>
      </div>

      {/* Company Info */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>{company.size}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Founded {company.founded}</span>
        </div>
      </div>

      {/* Rating and Website */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span className="font-medium text-gray-900">{company.rating}</span>
          <span className="ml-1">({company.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center">
          <Globe className="w-4 h-4 mr-1" />
          <a 
            href={company.website} 
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
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>

      {/* Specializations */}
      <div className="mb-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="font-medium">Specializations</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {company.specializations.slice(0, 3).map((spec, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
            >
              {spec}
            </span>
          ))}
          {company.specializations.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{company.specializations.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={() => onViewProfile(company)}
          className="flex-1 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          View Profile
        </button>
        <button
          onClick={() => onContact(company)}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Connect
        </button>
      </div>
    </div>
  );
}