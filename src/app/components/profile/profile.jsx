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
                <h1>{this.state.temp}</h1>
		{/*<h1>{this.props.test}</h1>*/}
            </div>
        )
    }
}


export default Profile

