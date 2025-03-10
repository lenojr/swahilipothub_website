import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, date, imageUrl }) => {
    return (
            <div>
                <Image src={imageUrl} alt={title} className="card-image" layout="responsive" width={500} height={300} />
                <Image src={imageUrl} alt={title} className="card-image" layout="responsive" width={500} height={300} />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <p className="card-date">{date}</p>
            </div>
        </div>
    );
};

export default Card;