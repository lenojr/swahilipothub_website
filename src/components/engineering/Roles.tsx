import React from 'react';

interface Role {
    id: number;
    title: string;
    description: string;
}

const roles: Role[] = [
    { id: 1, title: 'Software Engineer', description: 'Develops and maintains software applications.' },
    { id: 2, title: 'Data Scientist', description: 'Analyzes and interprets complex data to help companies make decisions.' },
    { id: 3, title: 'Product Manager', description: 'Oversees the development and delivery of products.' },
];

const Roles: React.FC = () => {
    return (
        <div>
            <h1>Engineering Roles</h1>
            <ul>
                {roles.map(role => (
                    <li key={role.id}>
                        <h2>{role.title}</h2>
                        <p>{role.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Roles;