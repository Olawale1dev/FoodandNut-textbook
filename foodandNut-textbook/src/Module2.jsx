import React from "react";
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import about from './about.gif'
//import foodread from './foodread.gif';
import Unit6 from './Unit6.svg';
import Unit7 from './Unit7.svg';
import Unit8 from './Unit8.svg';
import Unit9 from './Unit9.svg';
import Unit10 from './Unit10.svg';

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
    <a href="http://localhost:3000/module2Unit1"><img src={Unit6} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module2Unit2"><img src={Unit7} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module2Unit3"><img src={Unit8} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module2Unit4"><img src={Unit9} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module2Unit5"><img src={Unit10} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <Stack direction="row" spacing={2} className="tableofcontent">
        
      
    </Stack>
        
    </div>
    
  );
}



export default Module2