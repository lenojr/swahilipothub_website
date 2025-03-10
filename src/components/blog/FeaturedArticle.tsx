import React from 'react';

interface FeaturedArticleProps {
    title: string;
    summary: string;
    imageUrl: string;
    link: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ title, summary, imageUrl, link }) => {
    return (
        <div className="featured-article">
            <a href={link}>
                <img src={imageUrl} alt={title} className="featured-article-image" />
                <h2 className="featured-article-title">{title}</h2>
                <p className="featured-article-summary">{summary}</p>
            </a>
        </div>
    );
};

export default FeaturedArticle;