import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Header from '../components/base/header'



class App extends React.Component {

    render() {
        return (

            <div>
                <Header />
                <form action="/logout" method="post">
                    <input type="submit" value="Logout" />
                </form>
                <ul>
                    <Link to="/auth">Timeline</Link>
                    <Link to="/auth/myprofile">My Profile</Link>
                    <Link to="/auth/friends">friends</Link>
                    <Link to="/auth/photos">Photos</Link>
                    <Link to="/auth/setting">Settings</Link>
                </ul>

                <hr />
            </div>
        )
    }
}


export default App