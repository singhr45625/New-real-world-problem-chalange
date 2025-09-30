import React, { useState } from 'react';

function HeroSection() {
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    setGreeting('Hello from React! State management is awesome. 😊');
  };

  return (
    <section id="hero" className="hero-section">
      <div className="profile-container">
        {/* Placeholder for your image */}
        <img 
          src="./photo.jpg" 
          alt="Your Profile" 
          className="profile-photo"
        />
        <h2>Welcome to My React Space!</h2>
      </div>
      
      <p>This page is built with reusable components and state management.</p>
      
      <button 
        className="button" 
        onClick={handleGreet}
      >
        Click Me for a Greeting!
      </button>

      <p className="greeting-message">{greeting}</p>
    </section>
  );
}

export default HeroSection;