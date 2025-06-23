import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import PostProjectModal from './components/PostProjectModal';
import { mockProjects, mockUsers } from './data/mockData';
import { Project } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'company-dashboard' | 'consultant-dashboard'>('landing');
  const [showPostProject, setShowPostProject] = useState(false);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [currentUser, setCurrentUser] = useState(null);

  const handleGetStarted = () => {
    // For demo purposes, we'll simulate logging in as a company
    setCurrentUser(mockUsers[0]);
    setCurrentView('company-dashboard');
  };

  const handleLogin = () => {
    // For demo purposes, we'll simulate logging in as a consultant
    setCurrentUser(mockUsers[1]);
    setCurrentView('consultant-dashboard');
  };

  const handleRegister = () => {
    handleGetStarted();
  };

  const handlePostProject = (projectData: any) => {
    const newProject: Project = {
      ...projectData,
      id: String(projects.length + 1),
      postedBy: currentUser?.company || 'Anonymous Company',
      bidCount: 0,
      status: 'open'
    };
    setProjects([newProject, ...projects]);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'company-dashboard':
        return (
          <Dashboard
            userType="company"
            projects={projects.filter(p => p.postedBy === currentUser?.company)}
            onPostProject={() => setShowPostProject(true)}
          />
        );
      case 'consultant-dashboard':
        return (
          <Dashboard
            userType="consultant"
            projects={projects}
          />
        );
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentUser={currentUser}
        onLoginClick={handleLogin}
        onRegisterClick={handleRegister}
      />
      
      {renderCurrentView()}

      {showPostProject && (
        <PostProjectModal
          onClose={() => setShowPostProject(false)}
          onSubmitProject={handlePostProject}
        />
      )}

      {/* Quick Navigation for Demo */}
      {currentView !== 'landing' && (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => {
              setCurrentUser(mockUsers[0]);
              setCurrentView('company-dashboard');
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-lg"
          >
            Company View
          </button>
          <button
            onClick={() => {
              setCurrentUser(mockUsers[1]);
              setCurrentView('consultant-dashboard');
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors shadow-lg"
          >
            Consultant View
          </button>
          <button
            onClick={() => {
              setCurrentUser(null);
              setCurrentView('landing');
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors shadow-lg"
          >
            Landing Page
          </button>
        </div>
      )}
    </div>
  );
}

export default App;