import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



class SearchResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUserId: null
        }

        this.sendFriendRequest = this.sendFriendRequest.bind(this)
    }



    componentDidMount() {
            var that = this
            axios.get('/users/user')
                .then(function (res) {
                    that.setState({ currentUserId: res.data._id })
    
                })
                .catch(function (error) {
                    console.log(error);
                });
    
    }



    sendFriendRequest() {
        axios.post('http://localhost:3000/friends/newFriendRequest', {
            currentUserId: this.state.currentUserId,
            friendRequestId:this.props.personProp._id

    })

    }

    sendPersonId = () => {
        var personId = this.props.personProp._id;
        this.props.onSelectPerson(personId);            
    }

    render() {
        return (
		
            <div className="card searchResultCard">
	    {/*	<Profile test="this is a test, it works!"></Profile>*/}
                <div>
                    <div className="smallUserPic"></div>
    		    <div className="postUserName"><Link  onClick={() => this.sendPersonId()} to={`/auth/profile`}>{this.props.personProp.firstName} {this.props.personProp.lastName}</Link></div>
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



