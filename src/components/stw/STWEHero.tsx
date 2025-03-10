import React from 'react';
import './STWEHero.css';

const STWEHero: React.FC = () => {
    return (
        <div className="hero-container">
            <h1>Welcome to Swahili Pothub</h1>
            <p>Your hub for Swahili resources and learning</p>
            <button className="hero-button">Get Started</button>
        </div>
    );
};

export default STWEHero;