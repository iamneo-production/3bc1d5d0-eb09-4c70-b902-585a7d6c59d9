import React from 'react';
import DataFetch from './API/DataFetch';
function App() {
  return (
    <div>
       <br/>
         <h1  style={{'text-align':'center'}} >User Information </h1>
         <br/>
         <br/>
         <br/>
         {<DataFetch/>}
         <br/>
         <br/> 
         <br/>
         <br/>
         <br/>      
    </div>
  );
}

export default App;
