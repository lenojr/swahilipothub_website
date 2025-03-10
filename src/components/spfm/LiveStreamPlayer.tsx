import React from 'react';

interface LiveStreamPlayerProps {
    streamUrl: string;
}

const LiveStreamPlayer: React.FC<LiveStreamPlayerProps> = ({ streamUrl }) => {
    return (
        <div className="live-stream-player">
            <iframe
                src={streamUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Stream"
                width="100%"
                height="500px"
            ></iframe>
        </div>
    );
};

export default LiveStreamPlayer;