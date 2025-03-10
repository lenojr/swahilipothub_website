import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <h1>Join Us</h1>
            <p>Be a part of our community and make a difference!</p>
            <button className="join-button">Get Started</button>
        </div>
    );
};

export default Hero;