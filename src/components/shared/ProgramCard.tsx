import React from 'react';
import Image from 'next/image';

interface ProgramCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div>
            <Image src={imageUrl} alt={title} className="program-card__image" layout="responsive" width={500} height={300} />
            <Image src={imageUrl} alt={title} className="program-card__image" layout="responsive" width={500} height={300} />
            <div className="program-card__content">
                <h3 className="program-card__title">{title}</h3>
                <p className="program-card__description">{description}</p>
            </div>
        </div>
    );
};

export default ProgramCard;