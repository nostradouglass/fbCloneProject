import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './components/App'
import Friends from './components/friends/friends'
import Settings from './components/settings/settings'
import Photos from './components/photos/photos'
import MyProfile from './components/myProfile/myProfile'
import Search from './components/search/search'
import FriendRequest from './components/friendRequest/friendRequest'
import Testing from './components/testing'
import Profile from './components/profile/profile'

class BasicExample extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      personId : ""
    }

  }

 
  render() {
    
    return (
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
            <Route exact path="/auth" component={App} />
            <Route path="/auth/friends" component={Friends} />
            <Route path="/auth/myProfile" component={MyProfile} />
            <Route path="/auth/photos" component={Photos} />
            <Route path="/auth/settings" component={Settings} />
            <Route path="/auth/search" component={Search} onSelectPersonPass={this.props.onSelectPerson } />
            <Route path="/auth/friendRequest" component={FriendRequest} />
            <Route path="/auth/testing" component={Testing} />
            <Route path="/auth/profile" component={Profile} onSelectPersonPass={this.props.onSelectPerson }/>


          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}


ReactDOM.render(<BasicExample />, document.getElementById('react-root'))
