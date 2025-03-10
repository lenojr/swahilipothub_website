import React from 'react';

interface BlogHeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <div 
            className="blog-hero" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="blog-hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default BlogHero;</div>