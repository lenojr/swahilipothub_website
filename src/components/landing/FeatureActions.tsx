import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

const FeatureActions: React.FC = () => {
    return (
        <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Feature 1
                </Typography>
                <Button variant="contained" color="primary">
                    Action 1
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Feature 2
                </Typography>
                <Button variant="contained" color="secondary">
                    Action 2
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Feature 3
                </Typography>
                <Button variant="contained" color="default">
                    Action 3
                </Button>
            </Grid>
        </Grid>
    );
};

export default FeatureActions;