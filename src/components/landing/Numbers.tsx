import React from 'react';
import './Numbers.css';

const Numbers: React.FC = () => {
  return (
    <div className="numbers-container">
      <div className="number-item">
        <h2>100+</h2>
        <p>Projects Completed</p>
      </div>
      <div className="number-item">
        <h2>50+</h2>
        <p>Happy Clients</p>
      </div>
      <div className="number-item">
        <h2>10+</h2>
        <p>Years of Experience</p>
      </div>
    </div>
  );
};

export default Numbers;