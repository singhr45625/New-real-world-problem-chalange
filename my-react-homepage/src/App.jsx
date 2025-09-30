import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import './App.css'; // Import the styles

// ... (imports remain the same) ...

function App() {
  return (
    <div className="app-container">
      {/* ... (Header component) ... */}

      <Header />
      
      <main className="container main-content">
        <HeroSection />

        <section id="about" className="section about-me">
          <h2>About Me - [Rohan Singh]</h2>
          <p>
            Hello! I'm Rohan Singh, a Third year student at LPU based in Phagwara 
            My professional journey is centered around Full-Stack Development, Mobile App Developement using Flutter and react native.
          </p>
          <p>
            I am passionate about  clean code, web performance and constantly seeking new ways 
            to optimize user experiences . This simple homepage is a practice project, 
            but I hope to expand it soon with my portfolio.
          </p>
          <p>
            **Connect with me:** [Link to LinkedIn or GitHub]
          </p>
        </section>

        {/* ... (Services section and Footer component) ... */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;