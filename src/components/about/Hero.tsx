import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <h1>Welcome to Swahili Pothub</h1>
            <p>Your hub for Swahili language resources and learning</p>
            <button className="hero-button">Get Started</button>
        </div>
    );
};

export default Hero;