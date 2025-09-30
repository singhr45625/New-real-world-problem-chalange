import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>My React Homepage ⚛️</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;