import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Swahili Pothub. All rights reserved.</p>
            </div>
        </footer>
    );
};

import './Footer.css';

export default Footer;