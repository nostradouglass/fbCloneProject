import React from 'react'
import Header from '../base/header'
import axios from 'axios';
import SearchResult from '../search/searchResult'; 

class Profile extends React.Component {

	constructor(props) {
		super(props)
	}

    render() {
        return (
            <div>
                <Header />
                <h1>Profile</h1>
		<h1>{this.props.match.params.myparam}</h1>
            </div>
        )
    }
}


export default Profile

