import React, { useState, ChangeEvent } from 'react';
import { Search, Filter, Users, Building, Award, MapPin, Star } from 'lucide-react';
import ConsultantCard from './ConsultantCard';
import RegisteredBodyCard from './RegisteredBodyCard';
import CompanyCard from './CompanyCard';
import { Consultant, RegisteredBody, Company } from '../types';

interface NetworkSearchProps {
  consultants: Consultant[];
  registeredBodies: RegisteredBody[];
  companies: Company[];
}

export default function NetworkSearch({
  consultants,
  registeredBodies,
  companies,
}: NetworkSearchProps) {
  const [activeTab, setActiveTab] = useState<'consultants' | 'bodies' | 'companies'>('consultants');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationFilter(e.target.value);
  };

  const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSpecializationFilter(e.target.value);
  };

  const handleAvailabilityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAvailabilityFilter(e.target.value);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRatingFilter(e.target.value);
  };

  const handleViewProfile = (item: Consultant | RegisteredBody | Company) => {
    console.log('View profile:', item);
  };

  const handleContact = (item: Consultant | RegisteredBody | Company) => {
    console.log('Contact:', item);
  };

  const filteredResults = (() => {
    switch (activeTab) {
      case 'consultants':
        return consultants.filter((consultant: Consultant) => {
          const matchesSearch = consultant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               (consultant.specializations?.some((spec: string) => spec.toLowerCase().includes(searchTerm.toLowerCase())) ?? false);
          
          const matchesLocation = !locationFilter || (consultant.location?.toLowerCase().includes(locationFilter.toLowerCase()) ?? false);
          
          const matchesSpecialization = !specializationFilter || (consultant.specializations?.includes(specializationFilter) ?? false);
          
          const matchesAvailability = availabilityFilter === 'all' || 
                                    (availabilityFilter === 'available' && consultant.availability === 'available') ||
                                    (availabilityFilter === 'busy' && consultant.availability === 'busy') ||
                                    (availabilityFilter === 'unavailable' && consultant.availability === 'unavailable');
          
          const matchesRating = ratingFilter === 'all' || 
                              (ratingFilter === '4+' && consultant.rating >= 4) ||
                              (ratingFilter === '4.5+' && consultant.rating >= 4.5);

          return matchesSearch && matchesLocation && matchesSpecialization && matchesAvailability && matchesRating;
        });

      case 'bodies':
        return registeredBodies.filter((body: RegisteredBody) => {
          const matchesSearch = body.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               (body.scope?.some((scopeItem: string) => scopeItem.toLowerCase().includes(searchTerm.toLowerCase())) ?? false);
          
          const matchesLocation = !locationFilter || (body.location?.toLowerCase().includes(locationFilter.toLowerCase()) ?? false);
          
          const matchesSpecialization = !specializationFilter || (body.scope?.includes(specializationFilter) ?? false);
          
          return matchesSearch && matchesLocation && matchesSpecialization;
        });

      case 'companies':
        return companies.filter((company: Company) => {
          const matchesSearch = company.name?.toLowerCase().includes(searchTerm.toLowerCase());
          
          const matchesLocation = !locationFilter || (company.location?.toLowerCase().includes(locationFilter.toLowerCase()) ?? false);
          
          return matchesSearch && matchesLocation;
        });

      default:
        return [];
    }
  })();

  const tabs = [
    { id: 'consultants', label: 'Consultants', icon: Users, count: consultants.length },
    { id: 'bodies', label: 'Registered Bodies', icon: Award, count: registeredBodies.length },
    { id: 'companies', label: 'Companies', icon: Building, count: companies.length }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Network Directory</h2>
        <p className="text-gray-600">
          Discover and connect with regulatory consultants, testing laboratories, and industry partners
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'consultants' | 'bodies' | 'companies')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLocationFilter(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Specialization Filter */}
          <div>
            <input
              type="text"
              placeholder="Specialization"
              value={specializationFilter}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSpecializationFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Additional Filters */}
          <div className="flex gap-2">
            {activeTab === 'consultants' && (
              <select
                value={availabilityFilter}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setAvailabilityFilter(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="all">All Availability</option>
                <option value="available">Available</option>
                <option value="busy">Limited</option>
                <option value="unavailable">Unavailable</option>
              </select>
            )}
            
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={ratingFilter}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setRatingFilter(e.target.value)}
                className="pl-9 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none bg-white"
              >
                <option value="all">All Ratings</option>
                <option value="4+">4+ Stars</option>
                <option value="4.5+">4.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            {filteredResults.length} {activeTab} found
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort by Relevance</option>
              <option>Sort by Rating</option>
              <option>Sort by Experience</option>
              <option>Sort by Location</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {activeTab === 'consultants' 
            ? filteredResults.map((consultant: Consultant) => (
                <ConsultantCard
                  key={consultant.id}
                  consultant={consultant}
                  onViewProfile={() => handleViewProfile(consultant)}
                  onContact={() => handleContact(consultant)}
                />
              ))
            : activeTab === 'bodies'
            ? filteredResults.map((body: RegisteredBody) => (
                <RegisteredBodyCard
                  key={body.id}
                  body={body}
                  onViewDetails={() => handleViewProfile(body)}
                  onContact={() => handleContact(body)}
                />
              ))
            : filteredResults.map((company: Company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  onViewProfile={() => handleViewProfile(company)}
                  onContact={() => handleContact(company)}
                />
              ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No {activeTab} found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}