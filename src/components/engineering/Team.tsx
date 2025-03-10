import React from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, name: 'Alice', role: 'Engineer', imageUrl: '/images/alice.jpg' },
    { id: 2, name: 'Bob', role: 'Designer', imageUrl: '/images/bob.jpg' },
    { id: 3, name: 'Charlie', role: 'Product Manager', imageUrl: '/images/charlie.jpg' },
];

const Team: React.FC = () => {
    return (
        <div>
            <h2>Our Team</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {teamMembers.map(member => (
                    <div key={member.id} style={{ margin: '10px', textAlign: 'center' }}>
                        <img src={member.imageUrl} alt={member.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;</div>