import React from "react";
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import about from './about.gif'
//import foodread from './foodread.gif';
import Unit11 from './Unit11.svg';
import Unit12 from './Unit12.svg';
import Unit13 from './Unit13.svg';
import Unit14 from './Unit14.svg';
import Unit15 from './Unit15.svg';


import './App.css';

//import Table from './Table';


/* <Stack direction="row" spacing={2} className="tableofcontent">
        
      <Button variant="contained" href="http://localhost:3001/TableOfContent" className="tableofcontent">
       ABOUT
      </Button>
    </Stack>*/ 
    /*<Button variant="contained" href="http://localhost:3001/Food" className="tableofcontent">
       CLICK TO READ
      </Button>*/ 



 function Module2() {
  return (
    
    <div>
    <div className="foodimg">  
    <a href="https://glittering-dodol-77f380.netlify.app/module3Unit1"><img src={Unit11} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="https://glittering-dodol-77f380.netlify.app/module3Unit2"><img src={Unit12} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="https://glittering-dodol-77f380.netlify.app/module3Unit3"><img src={Unit13} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="https://glittering-dodol-77f380.netlify.app/module3Unit4"><img src={Unit14} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="https://glittering-dodol-77f380.netlify.app/module3Unit5"><img src={Unit15} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <Stack direction="row" spacing={2} className="tableofcontent">
        
      
    </Stack>
        
    </div>
    
  );
}



export default Module2