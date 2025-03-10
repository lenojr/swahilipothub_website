import React from 'react';
import Image from 'next/image';

interface ImageHolderProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ src, alt, width, height, className }) => {
        return (
            <Image 
                src={src} 
                alt={alt} 
                width={width ? parseInt(width, 10) : undefined} 
                height={height ? parseInt(height, 10) : undefined} 
                className={className} 
            />
        );
};

export default ImageHolder;