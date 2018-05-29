import React from 'react'
import axios from 'axios'
import SearchResult from './searchResult'

class SearchResults extends React.Component {

    constructor(props) {
        super(props)

        this.mapSearchResultsList = this.mapSearchResultsList.bind(this)

    }

    mapSearchResultsList() {

        if (this.props.searchResultsList) {

            var list = this.props.searchResultsList

            var mappedList = list.map((person) => {
                return <SearchResult personProp={person} key={person._id} />
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