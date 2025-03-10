import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const corePillars = [
  {
    title: 'Education',
    description: 'Providing quality education resources and opportunities.',
  },
  {
    title: 'Health',
    description: 'Promoting health and wellness in the community.',
  },
  {
    title: 'Empowerment',
    description: 'Empowering individuals through skills and knowledge.',
  },
];

const CorePillars: React.FC = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Our Core Pillars
      </Typography>
      <Grid container spacing={4}>
        {corePillars.map((pillar, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
              <Typography variant="h6" gutterBottom>
                {pillar.title}
              </Typography>
              <Typography variant="body1">
                {pillar.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CorePillars;