import React from "react";
import HomePage from "./HomePage";

//import Table from './Table';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TableOfContent from "./TableOfContent";
import Module1unit1 from "./Module1unit1";
import Module1unit2 from "./Module1unit2";
import Module1unit3 from './Module1unit3';
import Module1unit4 from './Module1unit4';
import Module1unit5 from './Module1unit5';
import Module1 from './Module1';
import Module2 from './Module2';
import Module2unit1 from './Module2unit1';
import Module2unit2 from './Module2unit2';
import Module2unit3 from './Module2unit3';
import Module2unit4 from './Module2unit4';
import Module2unit5 from './Module2unit5';
import Module3 from './Module3';
import Module3unit1 from './Module3unit1';
import Module3unit2 from './Module3unit2';
import Module3unit3 from './Module3unit3';
import Module3unit4 from './Module3unit4';
import Module3unit5 from './Module3unit5';

import Module4 from './Module4';
import Module4unit1 from './Module4unit1';
import Module4unit2 from './Module4unit2';
import Module4unit3 from './Module4unit3';
import Module4unit4 from './Module4unit4';










 function MyRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/TableOfContent" exact element={<TableOfContent/>} />
          
          <Route path="/module1" exact element ={<Module1/>}/>
          <Route path="/module1Unit1" exact element ={<Module1unit1/>}/>
          <Route path="/module1Unit2" exact element ={<Module1unit2/>}/>
          <Route path="/module1Unit3" exact element ={<Module1unit3/>}/>
          <Route path="/module1Unit4" exact element ={<Module1unit4/>}/>
          <Route path="/module1Unit5" exact element ={<Module1unit5/>}/>
          <Route path="/module2" exact element ={<Module2/>}/>
          <Route path="/module2Unit1" exact element ={<Module2unit1/>}/>
          <Route path="/module2Unit2" exact element ={<Module2unit2/>}/>
          <Route path="/module2Unit3" exact element ={<Module2unit3/>}/>
          <Route path="/module2Unit4" exact element ={<Module2unit4/>}/>
          <Route path="/module2Unit5" exact element ={<Module2unit5/>}/>
          <Route path="/module3" exact element ={<Module3/>}/>
          <Route path="/module3Unit1" exact element ={<Module3unit1/>}/>
          <Route path="/module3Unit2" exact element ={<Module3unit2/>}/>
          <Route path="/module3Unit3" exact element ={<Module3unit3/>}/>
          <Route path="/module3Unit4" exact element ={<Module3unit4/>}/>
          <Route path="/module3Unit5" exact element ={<Module3unit5/>}/>
          <Route path="/module4" exact element ={<Module4/>}/>
          <Route path="/module4Unit1" exact element ={<Module4unit1/>}/>
          <Route path="/module4Unit2" exact element ={<Module4unit2/>}/>
          <Route path="/module4Unit3" exact element ={<Module4unit3/>}/>
          <Route path="/module4Unit4" exact element ={<Module4unit4/>}/>
          
         
        
          

        </Routes>
      </div>
    </Router>
  );
}



export default MyRouter