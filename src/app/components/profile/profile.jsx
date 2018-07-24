import React from 'react'
import Header from '../base/header'
import axios from 'axios';
import SearchResults from '../search/searchResults'; 

class Profile extends React.Component {

	constructor(props) {
		super(props)
			this.state =  { language2: ''};
	}

    handleLanguage2 = (langValue2) => {
	    console.log("This might work");
        console.log(langValue2) // Not needed but an example of passing data up
        // look into person._id  anfd if that is correct Id pass that up
        this.setState({language2: langValue2});

    }

    render() {
        return (
            <div>
                <Header />
                <h1>Profile</h1>
		<SearchResults onSelectLanguage2= {this.handleLanguage2}/>
            </div>
        )
    }
}


export default Profile

