import * as React from 'react';
import {Button, IconButton, Toolbar } from '@mui/material';
import  './App.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
//import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';


import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start"  aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
    
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d2dcf1',
    },
  },
});

const handleLogout = async () => {
  let res = await
  fetch("http://localhost:3000/login");
  let resJson = await res.json();
  //.then((res)=> res.json())
  //.then((resJson) => {
    console.log(resJson)
  if(resJson.status ===200){
    alert("You Have Logged Out Successfully")
    setTimeout(function(){window.location.replace("http://localhost:3000");}, 2000)
  }else{
    alert("Not Successfull")
  }
//})
}




export default function Header() {
  const [anchorel, setAnchorel] = React.useState(null);
  const open = Boolean(anchorel);
  const handleClick = (event) => {
    setAnchorel(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorel(null);
  };

 
 

  return (
      

    <div>
      
          <div
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <ThemeProvider theme={darkTheme}>
                  <AppBar position="static"  enableColorOnDark>
                  {appBarLabel('enableColorOnDark')}
                  </AppBar>
          
              </ThemeProvider>
          </Stack>
           
          </div>
        
     
      <Menu
        id="fade-menu"
        menulistprops={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorel}
        open={open}
        onClose={handleClose}
        transitioncomponent={Fade}
      >
        <MenuItem onClick={handleClose}><a href="http://localhost:3000" className="Listheader">Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/module1" className="Listheader">Module 1</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/module2" className="Listheader">Module 2</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/module3" className="Listheader">Module 3</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="http://localhost:3000/module4" className="Listheader">Module 4</a></MenuItem>
        
       
        
      </Menu>
        

    </div>

    
  );
}

