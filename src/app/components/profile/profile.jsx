import React from 'react'
import Header from '../base/header'
// import SearchResults from '../search/searchResults'; 

class Profile extends React.Component {

	constructor(props) {
		super(props)
			this.state =  { parameter: ''};
	}


    render() {
        
        return (
            <div>
                <Header />
                <h1>Profile</h1>
                <h1>{this.props.test}</h1>
		{/* <SearchResults onSelectPerson={this.onSelectPerson}/> */}
            </div>
        )
    }
}


export default Profile

