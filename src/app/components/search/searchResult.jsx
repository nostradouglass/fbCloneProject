import React from 'react'
<<<<<<< HEAD
import axios from 'axios'
=======
import { Link } from 'react-router-dom'
>>>>>>> working on the profile views


class SearchResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: ""
        }

        this.sendFriendRequest = this.sendFriendRequest.bind(this)
    }

<<<<<<< HEAD
=======
<div className="card searchResultCard">
<div style={{display: "inline"}}>
<div className="smallUserPic"></div>
    <div className="postUserName"><Link to="/auth/profile">{personProp.firstName} {personProp.lastName}</Link></div>
    <div className="postDate">{personProp.email}</div>
    </div>
    <p>Hello</p>
    <div className="card-body">
       
    </div>
    
</div>
>>>>>>> working on the profile views

    sendFriendRequest() {
        console.log("test")
        axios.post('http://localhost:3000/friends/newFriendRequest', {
            friendRequestId: this.props.personProp._id
    })

    }

    render() {
        return (

            <div className="card searchResultCard">
                <div style={{ display: "inline" }}>
                    <div className="smallUserPic"></div>
                    <div className="postUserName">{this.props.personProp.firstName} {this.props.personProp.lastName}</div>
                    <div className="postDate">{this.props.personProp.email}</div>
                </div>
                <p>Hello</p>
                <div className="card-body">
                    <button onClick={() => this.sendFriendRequest()} type="button" className="btn btn-primary btn-sm">Add Friend</button>
                </div>
            </div>
        )
    }
}


export default SearchResult;



