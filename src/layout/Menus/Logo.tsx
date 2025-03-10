import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import logo from '../../assets/logo.png'; // Adjust the path as needed

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Link to="/">
                <Image src={logo} alt="Swahili Pothub Logo" />
            </Link>
        </div>
    );
};

export default Logo;