import React from 'react';

interface MenuCTAProps {
    text: string;
    onClick: () => void;
}

const MenuCTA: React.FC<MenuCTAProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="menu-cta-button">
            {text}
        </button>
    );
};

export default MenuCTA;