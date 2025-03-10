import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const DonateHero: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
                padding: '0 20px',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Support Our Cause
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Your donation helps us to continue our mission and reach more people.
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Donate Now
            </Button>
        </Box>
    );
};

export default DonateHero;