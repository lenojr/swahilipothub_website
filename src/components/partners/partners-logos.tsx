import React from 'react';
import Image from 'next/image';

interface PartnerLogoProps {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}
const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logoUrl }) => {
  return (
    <div className="partner-logo">
      <Image src={logoUrl} alt={`${name} logo`} width={500} height={500} />
    </div>
  );
};

const partners = [
  {
    name: 'Partner 1',
    logoUrl: 'https://example.com/logo1.png',
    websiteUrl: 'https://example.com',
  },
  {
    name: 'Partner 2',
    logoUrl: 'https://example.com/logo2.png',
    websiteUrl: 'https://example.com',
  },
  // Add more partners as needed
];

const PartnersLogos: React.FC = () => {
  return (
    <div className="partners-logos">
      {partners.map((partner) => (
        <PartnerLogo
          key={partner.name}
          name={partner.name}
          logoUrl={partner.logoUrl}
          websiteUrl={partner.websiteUrl}
        />
      ))}
    </div>
  );
};

export default PartnersLogos;