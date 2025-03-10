import React from 'react';

const SentryTest: React.FC = () => {
    const handleClick = () => {
        throw new Error('Sentry test error');
    };

    return (
        <div>
            <h1>Sentry Test Page</h1>
            <button onClick={handleClick}>Trigger Error</button>
        </div>
    );
};

export default SentryTest;