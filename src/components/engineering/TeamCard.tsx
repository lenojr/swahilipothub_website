import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}

interface TeamCardProps {
    member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
    return (
        <div className="team-card">
            <img src={member.imageUrl} alt={`${member.name}'s photo`} className="team-card__image" />
            <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
            </div>
        </div>
    );
};

export default TeamCard;