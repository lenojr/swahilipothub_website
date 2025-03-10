import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <div>
            <Image src="/path/to/logo.png" alt="Swahili Pothub Logo" width={500} height={500} />
            <Image src="/path/to/logo.png" alt="Swahili Pothub Logo" width={500} height={500} />
        </div>
    );
};

export default Logo;