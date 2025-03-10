import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 8,
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom>
                    Meet Our Board
                </Typography>
                <Typography variant="h5" component="p">
                    Dedicated professionals committed to our mission and vision.
                </Typography>
            </Container>
        </Box>
    );
};

export default Hero;