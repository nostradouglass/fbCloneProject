import React from 'react'
import Header from '../base/header'
import axios from 'axios';
import SearchResults from '../search/searchResults'; 

class Profile extends React.Component {

	constructor(props) {
		super(props)
			this.state =  { parameter: ''};
	}

    sendToProfile = (otherParameter) => {
	    console.log("This might work");
        console.log(otherParameter) // Not needed but an example of passing data up
        // look into person._id  anfd if that is correct Id pass that up
        this.setState({parameter: otherParameter});

    }

    render() {
        return (
            <div>
                <Header />
                <h1>Profile</h1>
		<SearchResults otherParameter= {this.sendToProfile}/>
            </div>
        )
    }
}


export default Profile

