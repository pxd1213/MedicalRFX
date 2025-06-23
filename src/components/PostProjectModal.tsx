import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

interface PostProjectModalProps {
  onClose: () => void;
  onSubmitProject: (projectData: any) => void;
}

export default function PostProjectModal({ onClose, onSubmitProject }: PostProjectModalProps) {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    deviceType: '',
    regulatoryPathway: '',
    timeline: '',
    budget: '',
    location: '',
    requirements: [''],
    deliverables: [''],
    tags: ''
  });

  const addRequirement = () => {
    setProjectData({
      ...projectData,
      requirements: [...projectData.requirements, '']
    });
  };

  const removeRequirement = (index: number) => {
    setProjectData({
      ...projectData,
      requirements: projectData.requirements.filter((_, i) => i !== index)
    });
  };

  const updateRequirement = (index: number, value: string) => {
    const newRequirements = [...projectData.requirements];
    newRequirements[index] = value;
    setProjectData({ ...projectData, requirements: newRequirements });
  };

  const addDeliverable = () => {
    setProjectData({
      ...projectData,
      deliverables: [...projectData.deliverables, '']
    });
  };

  const removeDeliverable = (index: number) => {
    setProjectData({
      ...projectData,
      deliverables: projectData.deliverables.filter((_, i) => i !== index)
    });
  };

  const updateDeliverable = (index: number, value: string) => {
    const newDeliverables = [...projectData.deliverables];
    newDeliverables[index] = value;
    setProjectData({ ...projectData, deliverables: newDeliverables });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitProject({
      ...projectData,
      requirements: projectData.requirements.filter(req => req.trim() !== ''),
      deliverables: projectData.deliverables.filter(del => del.trim() !== ''),
      tags: projectData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      postedDate: new Date().toLocaleDateString(),
      status: 'open',
      bidCount: 0
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Post New Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Project Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title
              </label>
              <input
                type="text"
                required
                value={projectData.title}
                onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                placeholder="e.g., FDA 510(k) Submission for Class II Medical Device"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                required
                value={projectData.description}
                onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                placeholder="Provide a detailed description of your project requirements..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Type
                </label>
                <select
                  required
                  value={projectData.deviceType}
                  onChange={(e) => setProjectData({ ...projectData, deviceType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select device type</option>
                  <option value="Class I">Class I Medical Device</option>
                  <option value="Class II">Class II Medical Device</option>
                  <option value="Class III">Class III Medical Device</option>
                  <option value="Diagnostic">In Vitro Diagnostic</option>
                  <option value="Software">Software as Medical Device</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Regulatory Pathway
                </label>
                <select
                  required
                  value={projectData.regulatoryPathway}
                  onChange={(e) => setProjectData({ ...projectData, regulatoryPathway: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select pathway</option>
                  <option value="510(k)">FDA 510(k)</option>
                  <option value="PMA">FDA PMA</option>
                  <option value="De Novo">FDA De Novo</option>
                  <option value="CE Marking">CE Marking</option>
                  <option value="Health Canada">Health Canada</option>
                  <option value="Multiple">Multiple Jurisdictions</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <input
                  type="text"
                  required
                  value={projectData.budget}
                  onChange={(e) => setProjectData({ ...projectData, budget: e.target.value })}
                  placeholder="e.g., $15,000 - $25,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  required
                  value={projectData.timeline}
                  onChange={(e) => setProjectData({ ...projectData, timeline: e.target.value })}
                  placeholder="e.g., 3-4 months"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  required
                  value={projectData.location}
                  onChange={(e) => setProjectData({ ...projectData, location: e.target.value })}
                  placeholder="e.g., Remote, Boston, MA"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Project Requirements</h3>
              <button
                type="button"
                onClick={addRequirement}
                className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Requirement
              </button>
            </div>
            
            {projectData.requirements.map((requirement, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => updateRequirement(index, e.target.value)}
                  placeholder="Enter a project requirement..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {projectData.requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="text-red-600 hover:text-red-700 p-2"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Expected Deliverables</h3>
              <button
                type="button"
                onClick={addDeliverable}
                className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Deliverable
              </button>
            </div>
            
            {projectData.deliverables.map((deliverable, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={deliverable}
                  onChange={(e) => updateDeliverable(index, e.target.value)}
                  placeholder="Enter an expected deliverable..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {projectData.deliverables.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDeliverable(index)}
                    className="text-red-600 hover:text-red-700 p-2"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={projectData.tags}
              onChange={(e) => setProjectData({ ...projectData, tags: e.target.value })}
              placeholder="e.g., FDA, 510k, Class II, Medical Device, Regulatory"
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
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}