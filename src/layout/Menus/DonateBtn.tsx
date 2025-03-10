import React from 'react';
import { Button } from '@material-ui/core';

const DonateBtn: React.FC = () => {
    const handleDonateClick = () => {
        // Add your donation logic here
        console.log('Donate button clicked');
    };

    return (
        <Button variant="contained" color="primary" onClick={handleDonateClick}>
            Donate
        </Button>
    );
};

export default DonateBtn;