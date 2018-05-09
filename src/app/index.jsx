import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './components/App'
import Home from './components/home/home'
import Friends from './components/friends/friends'
import Settings from './components/settings/settings'
import Photos from './components/photos/photos'
import MyProfile from './components/myProfile/myProfile'
import Search from './components/search/search'

const BasicExample = () => (
  <Router>
    <MuiThemeProvider>
      <div>


        {/* <Route exact path="/auth" component={App} />
        <Route path="/auth/home" component={Home} />
        <Route path="/auth/friends" component={Friends} />
        <Route path="/auth/myProfile" component={MyProfile} />
        <Route path="/auth/photos" component={Photos} />
        <Route path="/auth/settings" component={Settings} /> 
        <Route path="/auth/search" component={Search} />
      */}


        {/* For dev */}
        <Route exact path="/auth" component={Search} />
        <Route path="/auth/home" component={Home} />
        <Route path="/auth/friends" component={Friends} />
        <Route path="/auth/myProfile" component={MyProfile} />
        <Route path="/auth/photos" component={Photos} />
        <Route path="/auth/settings" component={Settings} /> 
        <Route path="/auth/search" component={Search} />
     

      </div>
    </MuiThemeProvider>
  </Router>
)



ReactDOM.render(<BasicExample />, document.getElementById('react-root'))