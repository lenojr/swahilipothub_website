import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const ProgramMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <button aria-controls="program-menu" aria-haspopup="true" onClick={handleClick}>
                Open Program Menu
            </button>
            <Menu
                id="program-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Program 1</MenuItem>
                <MenuItem onClick={handleClose}>Program 2</MenuItem>
                <MenuItem onClick={handleClose}>Program 3</MenuItem>
            </Menu>
        </div>
    );
};

export default ProgramMenu;</div>