import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';
function TableOfContent() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [goToPageNumber, setGoToPageNumber] = useState('');

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
      setPageNumber(1) 
  }

  /*function onDocumentLoadJumpToPage({numPages}){
    setNumPages(numPages);
    setPageNumber(goToPageNumber)
  }*/

  function onGoToPageClick(offSet) {
    if (goToPageNumber >= 1 && goToPageNumber <= numPages) {
      setNumPages(numPages);
      setPageNumber(goToPageNumber);
     //setPageNumber(goToPageNumber => goToPageNumber + offSet);
     //setNumPages(numPages);
     //onDocumentLoadJumpToPage();
      
     
     
      //changePage(goToPageNumber);
    } else {
      alert('Please enter a valid page number');
    }
  }

  
  function changePage(offSet){
    console.log("offSet is : " + offSet)
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
        <Document file="/foodandNut-About.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        
        <input type="text" value={goToPageNumber} onChange={e => setGoToPageNumber(e.target.value)} />
        <button onClick={onGoToPageClick}>Go to page</button>
        
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
      </header>
      <center>
        
      </center>
    </div>
  );
}

export default TableOfContent;