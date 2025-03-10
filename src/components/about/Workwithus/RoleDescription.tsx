import React from 'react';

interface RoleDescriptionProps {
    title: string;
    description: string;
    requirements: string[];
}

const RoleDescription: React.FC<RoleDescriptionProps> = ({ title, description, requirements }) => {
    return (
        <div className="role-description">
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Requirements:</h3>
            <ul>
                {requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoleDescription;</div>