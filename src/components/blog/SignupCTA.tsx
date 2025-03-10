import React from 'react';

const SignupCTA: React.FC = () => {
    return (
        <div className="signup-cta">
            <h2>Join Our Community</h2>
            <p>Sign up to receive the latest updates and exclusive content.</p>
            <form className="signup-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupCTA;