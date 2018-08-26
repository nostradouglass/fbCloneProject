import React from 'react'
import Header from '../base/header'
import axios from 'axios'
import SearchResults from './searchResults'


// Inside of 
class Search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
            searchResultsList: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {

        var that = this
        event.preventDefault();
	

        if (this.state.searchTerm) {

            axios.post('http://localhost:3000/users/findusers', {
                searchTerm: this.state.searchTerm
            }).then(function (response) {
                that.setState({ searchResultsList: response.data })
            })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }

   handleChange(e){ 
        this.setState({ searchTerm: e.target.value }, ()=> {
		
		
	});
    }
   


    render() {
    
        return (
            <div>
                <Header />
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div id="div1">

                        <input 
                        type="text" 
                       value={this.state.searchTerm} 
                        onChange={this.handleChange} 
                        placeholder="Find Friends..." /> 
			<button className="clearSubmitButton" type="submit"> 
                        <img src="/icons/svg/magnifying-glass.svg" 
                        alt="Search" className="searchIcon"/>
			</button>
                        
                    </div>
		 
                </form>

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-3" >left</div>

                        {/* Main Area */}
                        <div className="col-md-6" >
                            <SearchResults 
                            searchResultsList={this.state.searchResultsList} 
                            test = {this.props.test}
                             />
                        </div>

                        <div className="col-md-3" >right</div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Search
