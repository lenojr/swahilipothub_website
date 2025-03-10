import React, { useState, useEffect } from 'react';

interface RadioStreamProps {
    streamUrl: string;
}

const RadioStream: React.FC<RadioStreamProps> = ({ streamUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio ref={audioRef} src={streamUrl} />
            <button onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default RadioStream;