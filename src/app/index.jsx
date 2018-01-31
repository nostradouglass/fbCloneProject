import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import App from './components/App'
import Home from './components/home/home'

const BasicExample = () => (
    <Router>
      <div>
      <ul>
        <li><Link to="/auth">App</Link></li>
        <li><Link to="/auth/home">Home</Link></li>

      </ul>

      <hr/>

        <Route exact path="/auth" component={App}/>
        <Route path="/auth/home" component={Home}/>
      </div>
    </Router>
  )



ReactDOM.render(<BasicExample />, document.getElementById('react-root'))