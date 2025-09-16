import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

// Component for confirmation before redirecting
function PermissionRedirect({ to }) {
  const [showButton, setShowButton] = useState(true);

  const handleRedirect = () => {
    window.open(to, '_blank'); // open in new tab
    setShowButton(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {showButton ? (
        <>
          <p>Click the button below to visit the external link:</p>
          <button onClick={handleRedirect} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
            Go to Link
          </button>
        </>
      ) : (
        <p>Redirected! You can close this tab.</p>
      )}
    </div>
  );
}

// Component that downloads resume from /public
function ResumeDownload() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/manojgowda.in.pdf"; // file must be inside /public
    link.download = "manojgowda.in.pdf"; // suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>
        Downloading resume... <br />
        If it doesn’t start automatically,{" "}
        <a href="/manojgowda.in.pdf" download>
          click here
        </a>.
      </p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Router>
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            {/* Internal pages */}
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* External links with permission */}
            <Route path="/github" element={<PermissionRedirect to="https://github.com/ManojGowda89" />} />
            <Route path="/linkedin" element={<PermissionRedirect to="https://www.linkedin.com/in/manojgowdabr89/" />} />
            <Route path="/whatsapp" element={<PermissionRedirect to="https://wa.me/9513849323" />} />
            <Route path="/instagram" element={<PermissionRedirect to="https://www.instagram.com/manoj_gowda_89/" />} />

            {/* Resume download (local file from /public) */}
            <Route path="/resume" element={<ResumeDownload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
