import React from 'react';

const JoinYouth: React.FC = () => {
    return (
        <div>
            <h1>Join Youth Program</h1>
            <p>Welcome to the youth program. Please fill out the form below to join.</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required />
                </div>
                <button type="submit">Join</button>
            </form>
        </div>
    );
};

export default JoinYouth;