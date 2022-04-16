import React, { useState, useEffect } from "react";
import Axios from "axios";
import './DatFetch.css'
function DataFetch() {
  const [post, setPost] = useState({});
  const[id,setId]=useState(1)
  useEffect(() => {
    Axios
       .get(`http://localhost:8080/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
        {/*<input type="text"value={id} onChange={e => setId(e.target.value)}/>*/}
        <br/> <br/>
     <div className="table">
         <div>Name :{post.name}</div>
         <br/>
         <br/> 
         <div>loan_ID: {post.loan_ID}</div>
         <br/> 
         <br/>
         <div>Age: {post.age}</div>
         <br/>
         <br/>
         <div>Applied Date: {post.Date}</div>
         <br/>
         <br/>
         <div>Staus: {post.status}</div>
         </div>
    </div>
  );
}

export default DataFetch;
