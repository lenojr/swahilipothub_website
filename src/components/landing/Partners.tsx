import React from 'react';
import Image from 'next/image';
import './Partners.css'; // Assuming you have a CSS file for styling

const partners = [
  { name: 'Partner 1', logo: 'logo1.png', website: 'https://partner1.com' },
  { name: 'Partner 2', logo: 'logo2.png', website: 'https://partner2.com' },
  { name: 'Partner 3', logo: 'logo3.png', website: 'https://partner3.com' },
];

const Partners: React.FC = () => {
  return (
    <div className="partners">
      <h2>Our Partners</h2>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <a href={partner.website} target="_blank" rel="noopener noreferrer">
              <Image src={partner.logo} alt={partner.name} className="partner-logo" width={100} height={100} />
              <p>{partner.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;