import React from 'react';
import { Link } from 'react-router-dom';
import './InnerNav.css';

const InnerNav: React.FC = () => {
    return (
        <nav className="inner-nav">
            <ul>
                <li>
                    <Link to="/about/workwithus">Work With Us</Link>
                </li>
                <li>
                    <Link to="/about/team">Our Team</Link>
                </li>
                <li>
                    <Link to="/about/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default InnerNav;