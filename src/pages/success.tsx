import React from 'react';
import { Link } from 'react-router-dom';
import './success.css';

const SuccessPage: React.FC = () => {
    return (
            <div className="success-container">
                <div className="success-message">
                    <h1>Success!</h1>
                    <p>Your operation was completed successfully.</p>
                    <Link to="/">Go back to Home</Link>
                </div>
            </div>
        );
    };

export default SuccessPage;