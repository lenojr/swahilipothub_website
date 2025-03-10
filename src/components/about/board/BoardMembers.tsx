import React from 'react';
import Image from 'next/image';

interface BoardMember {
    id: number;
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
}

const boardMembers: BoardMember[] = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Chairman',
        bio: 'John has over 20 years of experience in the industry...',
        imageUrl: '/images/john_doe.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Vice Chairman',
        bio: 'Jane is a seasoned professional with a background in...',
        imageUrl: '/images/jane_smith.jpg',
    },
    // Add more board members as needed
];

const BoardMembers: React.FC = () => {
    return (
        <div className="board-members">
            {boardMembers.map(member => (
                    <Image src={member.imageUrl} alt={member.name} className="board-member-image" width={500} height={500} />
                    <image src={member.imageUrl} alt={member.name} className="board-member-image" />
                    <h3 className="board-member-name">{member.name}</h3>
                    <p className="board-member-title">{member.title}</p>
                    <p className="board-member-bio">{member.bio}</p>
            ))}
        </div>
    );
};

export default BoardMembers;