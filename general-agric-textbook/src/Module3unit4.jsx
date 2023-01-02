import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';
function  Module3unit4() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }
 

  return (
    <div className="App">
      <header className="App-header">
        <Document file="/GeneralAgric-Module3Unit4.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        <br></br>
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
        <br></br>
        <center>
       
      </center>
      </header>
      
    </div>
  );
}

export default Module3unit4;