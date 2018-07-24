import React from 'react'
import axios from 'axios'
import SearchResult from './searchResult'

class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        this.state =  { language: '' }

        this.mapSearchResultsList = this.mapSearchResultsList.bind(this)

    }


    handleLanguage = (langValue) => {
        console.log(langValue) // Not needed but an example of passing data up
        // look into person._id  anfd if that is correct Id pass that up
        this.setState({language: langValue})

    }

    handleLangChange2 = () => {
        var lang2 = this.props.personProp._id;
        this.props.onSelectLanguage2(lang);            
    }

    mapSearchResultsList() {

        if (this.props.searchResultsList) {

            var list = this.props.searchResultsList

            var mappedList = list.map((person) => {
                return <SearchResult personProp={person} key={person._id} onSelectLanguage={this.handleLanguage}/>
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
