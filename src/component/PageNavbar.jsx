import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import fronticon from "../assets/images/icon-frontend-mentor.svg"
import githubicon from "../assets/images/icon-github.svg"
import linkedinicon from "../assets/images/icon-linkedin.svg"
import twittericon from "../assets/images/icon-twitter.svg"

export default function PageAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "none" }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        adamkeyes
                    </Typography>
                    <IconButton color="inherit"><img src={githubicon} alt='' /></IconButton>
                    <IconButton color="inherit"><img src={fronticon} alt='' /></IconButton>
                    <IconButton color="inherit"><img src={linkedinicon} alt='' /></IconButton>
                    <IconButton color="inherit"><img src={twittericon} alt='' /></IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}