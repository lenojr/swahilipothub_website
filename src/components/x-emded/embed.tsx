import React from 'react';
import './embed.css';

interface EmbedProps {
    src: string;
    title?: string;
    width?: string;
    height?: string;
}

const Embed: React.FC<EmbedProps> = ({ src, title = "Embedded Content", width = "100%", height = "500px" }) => {
    return (
        <div className="embed-container">
        <div className="embed-wrapper">
            <iframe
                src={src}
                title={title}
                width={width}
                height={height}
                className="embed-iframe"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
        </div>
    );
};

export default Embed;