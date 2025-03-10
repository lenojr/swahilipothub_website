import React from 'react';
import { Button, Typography, Container } from '@material-ui/core';

const PageCTA: React.FC = () => {
    return (
        <Container style={{ textAlign: 'center', padding: '2rem 0' }}>
            <Typography variant="h4" gutterBottom>
                Join Swahili Pothub Today!
            </Typography>
            <Typography variant="body1" paragraph>
                Discover the best Swahili literature, connect with authors, and share your own stories.
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get Started
            </Button>
        </Container>
    );
};

export default PageCTA;