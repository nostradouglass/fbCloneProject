import React from 'react'



const SearchResult = ({ personProp }) => (

<div className="card" style={{ width: "18rem"}}>
  <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{personProp.firstName} {personProp.lastName}</h5>
    <p className="card-text">{personProp.email}</p>
    
  </div>    
</div>
);

export default SearchResult;