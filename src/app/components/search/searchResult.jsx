import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Profile from '../profile/profile';


class SearchResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: ""
        }

        this.sendFriendRequest = this.sendFriendRequest.bind(this)
    }


    sendFriendRequest() {
        console.log("test")
        axios.post('http://localhost:3000/friends/newFriendRequest', {
            friendRequestId: this.props.personProp._id
    })

    }

    render() {
        return (
			<Router>
            <div className="card searchResultCard">
	    {/*	<Profile test="this is a test, it works!"></Profile>*/}
                <div style={{ display: "inline" }}>
                    <div className="smallUserPic"></div>
    		    <div className="postUserName"><Link to={`/auth/profile/${this.props.personProp._id}`}>{this.props.personProp.firstName} {this.props.personProp.lastName}</Link></div>
                    <div className="postDate">{this.props.personProp.email}</div>
                </div>
                <p>Hello</p>
                <div className="card-body">
                    <button onClick={() => this.sendFriendRequest()} type="button" className="btn btn-primary btn-sm">Add Friend</button>
                </div>
	    <Route name={"/auth/profile/"+ this.props.personProp._id} path="/auth/profile/:myparam" component={Profile} />
            </div>
	    </Router>
        )
    }
}


export default SearchResult;



