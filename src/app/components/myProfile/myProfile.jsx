import React from 'react'
import Header from '../base/header'

import CurrentProfile from './currentProfile'
import EditProfile from './editProfile'


class MyProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            EditProfileMode: false
        }
        this.onEditButtonPress = this.onEditButtonPress.bind(this)
    }


    chooseView() {
        if (this.state.EditProfileMode) {
            return <EditProfile />
        } else {
            return <CurrentProfile />
        }
    }

    onEditButtonPress() {
        this.setState({ EditProfileMode: !this.state.EditProfileMode})
    }

    render() {
        return (
            <div>
                <Header />
                <button onClick={() => {this.onEditButtonPress()}} >Change</button>
            {this.chooseView()}

            </div>
        )
    }
}


export default MyProfile