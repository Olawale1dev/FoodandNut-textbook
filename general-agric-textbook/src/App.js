

import './App.css';
import ButtonAppBar from './ButtonAppBar';
import Header from './Header';
import MyRouter from './MyRouter';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
  
// Importing loader
import PacmanLoader from "react-spinners/PacmanLoader";
//import ClockLoader from "react-spinners/ClockLoader";
function App() {
  const [isloading, setIsLoading] = useState(true);
  
  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
  
    // Wait for 3 seconds
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  });

  
  

  useEffect(() => {
  
    // Wait for 3 seconds
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  });
  
  // Custom css for loader
  const override = `
  display: block;
  padding: 0px;
  border-color: red;
`;
  
 


  return (isloading ?
    <PacmanLoader  isloading={isloading}
      size={90} className="pacmanLoader" /> :
    <div className="App">

      <ButtonAppBar/>
      <Header/>
      <Stack direction="row" spacing={2} className="tableofcontent">
        
    </Stack>
      <MyRouter/>
      
      
    </div>
  );

}

export default App;