import React from 'react';
import { ArrowRight, CheckCircle, Users, Briefcase, Award } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Trusted by Leading Medical Device Companies
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Connect with Expert
              <span className="text-blue-600"> Medical Device </span>
              Regulatory Consultants
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The premier platform for medical device companies to find qualified regulatory consultants 
              for FDA submissions, CE marking, and global device registrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onGetStarted}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center group"
              >
                Post Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-semibold">
                Browse Opportunities
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Vetted consultants with proven FDA experience</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Average project completion in 45% less time</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>$2M+ in successful device registrations</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Platform Activity</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">247</p>
                    <p className="text-sm text-gray-600">Active Projects</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">1,423</p>
                    <p className="text-sm text-gray-600">Verified Consultants</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">98.4%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Activity</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• New 510(k) project posted - $15K budget</p>
                  <p>• CE marking consultant awarded project</p>
                  <p>• Class II device successfully registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}