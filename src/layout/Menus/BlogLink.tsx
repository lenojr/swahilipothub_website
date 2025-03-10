import React from 'react';
import { Link } from 'react-router-dom';

interface BlogLinkProps {
    title: string;
    url: string;
}

const BlogLink: React.FC<BlogLinkProps> = ({ title, url }) => {
    return (
        <div className="blog-link">
            <Link to={url}>
                <h2>{title}</h2>
            </Link>
        </div>
    );
};

export default BlogLink;