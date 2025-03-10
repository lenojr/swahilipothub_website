import React from 'react';

interface StatsProps {
    title: string;
    value: number;
    description: string;
}

const Stats: React.FC<StatsProps> = ({ title, value, description }) => {
    return (
        <div className="stats">
            <h2>{title}</h2>
            <p>{value}</p>
            <p>{description}</p>
        </div>
    );
};

export default Stats;