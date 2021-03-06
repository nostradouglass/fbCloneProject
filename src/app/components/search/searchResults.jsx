import React from 'react'
import axios from 'axios'
import SearchResult from './searchResult'


class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        this.state =  { personIdState: '' }

        this.mapSearchResultsList = this.mapSearchResultsList.bind(this)


    }



    sendPersonId = (personIdValue) => {
        this.setState({personIdState: personIdValue})
        return personIdValue

    }


    mapSearchResultsList() {

        if (this.props.searchResultsList) {

            var list = this.props.searchResultsList

            var mappedList = list.map((person) => {
                return <SearchResult 
                personProp={person} key={person._id} 
                test = {this.props.test} />
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
	
                </ul>
            </div>
        )
    }
}


export default SearchResults
