import React from 'react';
import { Link } from 'react-router-dom';

const AboutMenu: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about/mission">Our Mission</Link>
                </li>
                <li>
                    <Link to="/about/team">Our Team</Link>
                </li>
                <li>
                    <Link to="/about/history">Our History</Link>
                </li>
                <li>
                    <Link to="/about/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AboutMenu;