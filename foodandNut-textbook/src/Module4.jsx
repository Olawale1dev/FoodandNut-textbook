import React from "react";
//import Button from '@mui/material/Button';
//import about from './about.gif'
//import foodread from './foodread.gif';
import Unit16 from './Unit16.svg';
import Unit17 from './Unit17.svg';
import Unit18 from './Unit18.svg';
import Unit19 from './Unit19.svg';



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



 function Module4() {
  return (
    
    <div>
    <div className="foodimg">  
    <a href="./module4Unit1"><img src={Unit16} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module4Unit2"><img src={Unit17} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module4Unit3"><img src={Unit18} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="./module4Unit4"><img src={Unit19} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
   
   
   
        
    </div>
    
  );
}



export default Module4