import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

  const handlePostProject = (projectData: Omit<Project, 'id' | 'bidCount' | 'status'>) => {
    const newProject: Project = {
      ...projectData,
      id: String(projects.length + 1),
      postedBy: currentUser?.company || 'Anonymous Company',
      bidCount: 0,
      status: 'open'
    };
    setProjects([newProject, ...projects]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <h1>Medical Device Consulting RFX Platform</h1>
              <button onClick={handleGetStarted}>Get Started</button>
            </div>
          } />
          
          <Route path="/dashboard" element={
            <div>
              <h2>Dashboard</h2>
              <div>
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
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