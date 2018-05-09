import React from 'react'
import Header from '../base/header'
import axios from 'axios'

class Search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ""
        }

        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        event.preventDefault();

        axios.post('http://localhost:3000/users/findusers', {
            searchTerm: this.state.searchTerm
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    }

    handleChange(e) {

        this.setState( { searchTerm: e.target.value})

        
    }

    render() {
        return (
            <div>
                <Header />
                
                <input type="text" placeholder="Find Friends..." /> <img onClick={()=> console.log("test")} src="/icons/svg/magnifying-glass.svg" alt="Search" className="searchIcon"/>
            
                <form onSubmit={this.handleSubmit} >
  <div className="form-group">
    <label >Email address</label>
    <input type="text" onChange={this.handleChange}
    value = {this.state.searchTerm}
    className="form-control" 
    placeholder="Enter searchTerm" />
    
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            
            </div>
        )
    }
}


export default Search