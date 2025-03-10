import React from 'react';
import Image from 'next/image';

interface Testimonial {
    name: string;
    message: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'John Doe',
        message: 'This is an amazing service! Highly recommend to everyone.',
        image: 'path/to/image1.jpg',
    },
    {
        name: 'Jane Smith',
        message: 'A wonderful experience from start to finish.',
        image: 'path/to/image2.jpg',
    },
    {
        name: 'Sam Wilson',
        message: 'Exceptional quality and fantastic customer support.',
        image: 'path/to/image3.jpg',
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <Image src={testimonial.image} alt={testimonial.name} width={500} height={500} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;