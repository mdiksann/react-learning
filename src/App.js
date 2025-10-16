import ReactGA from "react-ga";
import './App.css';
import { useState, useEffect } from 'react';
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

function App() {
  const [resumeData, setResumeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        const response = await fetch('./resumeData.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        console.error('Error fetching resume data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '18px' 
        }}>
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: 'red',
          fontSize: '18px' 
        }}>
          Error loading data: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      <Portfolio data={resumeData.portfolio}/>
      <Contact data={resumeData.main}/>
      <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;