import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;