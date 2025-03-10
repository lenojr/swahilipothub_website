import React from 'react';
import Image from 'next/image';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, imageUrl }) => {
    return (
        <div>
            <Image src={imageUrl} alt={title} className="event-card__image" layout="responsive" width={700} height={475} />
            <Image src={imageUrl} alt={title} className="event-card__image" layout="responsive" width={700} height={475} />
            <div className="event-card__content">
                <h2 className="event-card__title">{title}</h2>
                <p className="event-card__date">{date}</p>
                <p className="event-card__description">{description}</p>
            </div>
        </div>
    );
};

export default EventCard;