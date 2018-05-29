import React from 'react'



const SearchResult = ({ personProp }) => (


<div className="card searchResultCard">
<div style={{display: "inline"}}>
<div className="smallUserPic"></div>
    <div className="postUserName">{personProp.firstName} {personProp.lastName}</div>
    <div className="postDate">{personProp.email}</div>
    </div>
    <p>Hello</p>
    <div className="card-body">
       
    </div>
    
</div>

);

export default SearchResult;



