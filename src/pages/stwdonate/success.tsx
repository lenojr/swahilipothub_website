import React from 'react';
import { useRouter } from 'next/router';
import './success.css';

const SuccessPage: React.FC = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/');
    };

    return (
        <div className="success-container">
            <div className="success-message">
                <h1>Thank You for Your Donation!</h1>
                <button onClick={handleBackToHome} className="back-to-home-button">
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;