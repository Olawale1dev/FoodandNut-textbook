import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className="TableOfContent">
        <Toolbar>
          <Typography className="AppBarButton" component="div" sx={{ flexGrow: 1.5 }} >
           Food And Nutrition
           Textbook
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
