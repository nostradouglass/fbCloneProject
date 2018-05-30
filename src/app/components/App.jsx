import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Header from '../components/base/header'
import Timeline from '../components/timeline/timeline'


class App extends React.Component {

    render() {
        return (

            <div>
                <Header />
                <Link to="/auth/testing">Testing</Link>
<Timeline />
                <hr />
            </div>
        )
    }
}


export default App