import React from 'react';

const SupportSTW: React.FC = () => {
    return (
        <div>
            <h1>Support Swahili Pothub</h1>
            <p>Your support helps us to continue our mission of promoting Swahili language and culture.</p>
            <form>
                <label htmlFor="donationAmount">Donation Amount:</label>
                <input type="number" id="donationAmount" name="donationAmount" min="1" required />
                
                <label htmlFor="donorName">Your Name:</label>
                <input type="text" id="donorName" name="donorName" required />
                
                <label htmlFor="donorEmail">Your Email:</label>
                <input type="email" id="donorEmail" name="donorEmail" required />
                
                <button type="submit">Donate</button>
            </form>
        </div>
    );
};

export default SupportSTW;