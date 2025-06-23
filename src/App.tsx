import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { mockProjects, mockUsers } from './data/mockData';

interface Project {
  id: string;
  title: string;
  description: string;
  postedBy: string;
  bidCount: number;
  status: string;
}

interface User {
  id: string;
  name: string;
  company: string;
}

function App() {
  const [projects, setProjects] = React.useState<Project[]>(mockProjects);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  const handleGetStarted = () => {
    setCurrentUser(mockUsers[0]);
  };

  return (
    <div className="App">
      <nav className="bg-gray-800 text-white p-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
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
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;