import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Swahili Pothub</h1>
                <p>Your one-stop hub for Swahili literature and resources.</p>
                <button className="hero-button">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;