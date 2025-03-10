import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <div 
            className="page-hero" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="page-hero-content">
                <h1>{title}</h1>
                {subtitle && <h2>{subtitle}</h2>}
            </div>
        </div>
    );
};

export default PageHero;