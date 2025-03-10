import React from 'react';
import Image from 'next/image';

const boardMembers = [
    {
        name: 'John Doe',
        position: 'Chairman',
        bio: 'John has over 20 years of experience in the industry and has been leading our board for the past 5 years.',
        image: 'path/to/john-image.jpg'
    },
    {
        name: 'Jane Smith',
        position: 'Vice Chair',
        bio: 'Jane is an expert in finance and has been a valuable member of our board for 3 years.',
        image: 'path/to/jane-image.jpg'
    },
    // Add more board members as needed
];

const BoardMembers: React.FC = () => {
    return (
        <div>
            <h1>Board Members</h1>
            <div className="board-members">
                {boardMembers.map((member, index) => (
                    <div>
                        <Image src={member.image} alt={member.name} width={500} height={500} />
                        <h2>{member.name}</h2>
                        <h3>{member.position}</h3>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoardMembers;