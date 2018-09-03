import React from 'react'
import Header from '../base/header'
import axios from 'axios';

class Profile extends React.Component {

	constructor(props) {
		super(props)
			this.state =  { parameter: '',
			firstName: '',
			lastName: ''
			};
	}

	componentDidMount() {
		var that = this;
		axios.get('http://localhost:3000/auth/profile/'+this.props.profileId)
			.then(function(res) {
				that.setState({firstName: res.data.firstName}) 
				that.setState({lastName: res.data.lastName})
			})
			.catch(function(error) {
				console.log(error);
			});
	}


    render() {
        
        return (
            <div>
                <Header />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>{this.props.profileId}</h1>

		


		{/* <SearchResults onSelectPerson={this.onSelectPerson}/> */}
            </div>
        )
    }
}


export default Profile

