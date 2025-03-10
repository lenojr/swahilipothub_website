import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface SpacesCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const SpacesCard: React.FC<SpacesCardProps> = ({ title, description, imageUrl }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SpacesCard;