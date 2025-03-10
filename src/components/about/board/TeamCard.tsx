import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

interface TeamCardProps {
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl, bio }) => {
    return (
        <Card>
            <CardContent>
                <Avatar alt={name} src={imageUrl} />
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {role}
                </Typography>
                <Typography variant="body2" component="p">
                    {bio}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TeamCard;