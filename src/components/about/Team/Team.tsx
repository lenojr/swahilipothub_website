import React from 'react';
import './Team.css';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        imageUrl: 'path/to/john-image.jpg',
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        imageUrl: 'path/to/jane-image.jpg',
    },
    // Add more team members as needed
];

const Team: React.FC = () => {
    return (
        <div className="team-container">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.imageUrl} alt={`${member.name}`} className="team-member-image" />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;</div>