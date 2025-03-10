import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image paths here
    ];

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;