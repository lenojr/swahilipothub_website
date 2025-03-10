import React from 'react';
import './TeamCard.css';

interface TeamCardProps {
    name: string;
    role: string;
    imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl }) => {
    return (
        <div className="team-card">
            <img src={imageUrl} alt={`${name}'s profile`} className="team-card__image" />
            <div className="team-card__info">
                <h3 className="team-card__name">{name}</h3>
                <p className="team-card__role">{role}</p>
            </div>
        </div>
    );
};

export default TeamCard;</div>