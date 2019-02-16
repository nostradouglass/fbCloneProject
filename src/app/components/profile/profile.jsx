import React from 'react'
import Header from '../base/header'
import axios from 'axios';
// import SearchResults from '../search/searchResults'; 

class Profile extends React.Component {

	constructor(props) {
		super(props)
			this.state =  { parameter: '',
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            nickname: "",
            about: "",
            DOB: "",
            city: "",
            state: "",
            zip: "",
            work: "",
            relationship_status: "",
	    searchResultLists: ""
			}
	}

    componentWillMount() {
        var that = this
        axios.post('http://localhost:3000/users/findUserById', {
		searchTerm: this.props.test
		}).then(function (response){
			that.setState({ firstName: response.data.firstName})
		})
    .catch(function (error) {
	    console.log(error);
    })
    }

    

    render() {
        
        return (
            <div>
                <Header />
                <h1>Profile</h1>
                <h1>{this.state.searchResultLists}</h1>
                <h1>{this.state.firstName}</h1>
            </div>
        )
    }
}


export default Profile

