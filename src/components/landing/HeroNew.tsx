import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroNew: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: 'url(/path/to/your/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '0 20px',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Swahili Pothub
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Discover the best Swahili content and resources
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get Started
            </Button>
        </Box>
    );
};

export default HeroNew;