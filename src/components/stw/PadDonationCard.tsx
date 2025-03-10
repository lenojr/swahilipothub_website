import React from 'react';

interface PadDonationCardProps {
    title: string;
    description: string;
    imageUrl: string;
    donationLink: string;
}

const PadDonationCard: React.FC<PadDonationCardProps> = ({ title, description, imageUrl, donationLink }) => {
    return (
        <div className="pad-donation-card">
            <img src={imageUrl} alt={title} className="pad-donation-card__image" />
            <div className="pad-donation-card__content">
                <h2 className="pad-donation-card__title">{title}</h2>
                <p className="pad-donation-card__description">{description}</p>
                <a href={donationLink} className="pad-donation-card__donate-button">Donate Now</a>
            </div>
        </div>
    );
};

export default PadDonationCard;