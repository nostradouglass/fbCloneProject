import React from 'react'
import axios from 'axios'
import SearchResult from './searchResult'
import Profile from './../profile/profile'

class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        this.state =  { personIdState: '' }

        this.mapSearchResultsList = this.mapSearchResultsList.bind(this)
	this.sendToProfile = this.sendToProfile.bind(this);

    }

    sendToProfile = () => {
	    console.log("Working from sendToProfile");
	    var personIdToProfile = 'idtoprofile'/*this.props.personProp._id;*/
	    this.props.otherParameter(personIdToProfile)

    }


    sendPersonId= (personIdValue) => {
        console.log(personIdValue) // Not needed but an example of passing data up
        // look into person._id  anfd if that is correct Id pass that up
        this.setState({personIdState: personIdValue})

    }


    mapSearchResultsList() {

        if (this.props.searchResultsList) {

            var list = this.props.searchResultsList

            var mappedList = list.map((person) => {
                return <SearchResult personProp={person} key={person._id} onSelectPerson ={this.sendPersonId}/>
            })

            return mappedList
        } else {
            return <li></li>
        }
    }


    render() {
       
        return (
            <div>

                <ul>
                    {this.mapSearchResultsList()}
		    {this.sendToProfile()}
                </ul>
            </div>
        )
    }
}


export default SearchResults
