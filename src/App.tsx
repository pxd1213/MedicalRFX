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

export default App;