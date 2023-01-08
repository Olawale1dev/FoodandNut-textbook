import React from "react";
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import about from './about.gif'
//import foodread from './foodread.gif';
import Unit1 from './Unit1.svg';
import Unit2 from './Unit2.svg';
import Unit3 from './Unit3.svg';
import Unit4 from './Unit4.svg';
import Unit5 from './Unit5.svg';

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



 function Module1() {
  return (
    
    <div>
    <div className="foodimg">  
    <a href="./module1Unit1"><img src={Unit1} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module1Unit2"><img src={Unit2} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module1Unit3"><img src={Unit3} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module1Unit4"><img src={Unit4} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module1Unit5"><img src={Unit5} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <Stack direction="row" spacing={2} className="tableofcontent">
        
      
    </Stack>
        
    </div>
    
  );
}



export default Module1