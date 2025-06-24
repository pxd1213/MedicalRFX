import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';
import BidModal from './components/BidModal';
import NetworkSearch from './components/NetworkSearch';
import { mockProjects, mockUsers } from './data/mockData';

interface Project {
  id: string;
  title: string;
  description: string;
  postedBy: string;
  bidCount: number;
  status: string;
  budget: number;
  deadline: string;
  location: string;
  requirements: string[];
  skills: string[];
}

interface User {
  id: string;
  name: string;
  company: string;
  userType: 'consultant' | 'company' | 'admin';
  email: string;
  phone: string;
  address: string;
}

function App() {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  const handleGetStarted = () => {
    setCurrentUser(mockUsers[0]);
  };

  return (
    <div className="App">
      <nav className="bg-gray-800 text-white p-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/network">Network</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Medical Device Consulting RFX Platform</h1>
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        } />
        
        <Route path="/dashboard" element={
          <Dashboard 
            userType={currentUser?.userType || 'consultant'}
            onPostProject={() => console.log('Post project clicked')}
          />
        } />

        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/project/:projectId/bid" element={<BidModal />} />
        <Route path="/network" element={<NetworkSearch />} />
      </Routes>
    </div>
  );
}

export default App;