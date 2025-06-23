import React, { useState } from 'react';
import { X, DollarSign, Calendar, FileText } from 'lucide-react';
import { Project } from '../types';

interface BidModalProps {
  project: Project;
  onClose: () => void;
  onSubmitBid: (bidData: any) => void;
}

export default function BidModal({ project, onClose, onSubmitBid }: BidModalProps) {
  const [bidData, setBidData] = useState({
    proposedPrice: '',
    timeline: '',
    proposal: '',
    experience: '',
    approach: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitBid({
      ...bidData,
      projectId: project.id,
      submittedDate: new Date().toLocaleDateString()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Submit Proposal</h2>
            <p className="text-gray-600 mt-1">{project.title}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Pricing and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <DollarSign className="w-4 h-4 inline mr-1" />
                Proposed Price
              </label>
              <input
                type="text"
                required
                value={bidData.proposedPrice}
                onChange={(e) => setBidData({ ...bidData, proposedPrice: e.target.value })}
                placeholder="e.g., $15,000 - $20,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Proposed Timeline
              </label>
              <input
                type="text"
                required
                value={bidData.timeline}
                onChange={(e) => setBidData({ ...bidData, timeline: e.target.value })}
                placeholder="e.g., 8-12 weeks"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relevant Experience
            </label>
            <textarea
              required
              value={bidData.experience}
              onChange={(e) => setBidData({ ...bidData, experience: e.target.value })}
              placeholder="Describe your relevant experience with similar device types and regulatory pathways..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Approach */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Approach
            </label>
            <textarea
              required
              value={bidData.approach}
              onChange={(e) => setBidData({ ...bidData, approach: e.target.value })}
              placeholder="Outline your approach to completing this project..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Detailed Proposal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 inline mr-1" />
              Detailed Proposal
            </label>
            <textarea
              required
              value={bidData.proposal}
              onChange={(e) => setBidData({ ...bidData, proposal: e.target.value })}
              placeholder="Provide a detailed proposal including methodology, deliverables, and any additional value you bring to the project..."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}