import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MembershipHero: React.FC = () => {
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
                padding: '2rem',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Join Our Membership
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Become a part of our community and enjoy exclusive benefits.
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get Started
            </Button>
        </Box>
    );
};

export default MembershipHero;