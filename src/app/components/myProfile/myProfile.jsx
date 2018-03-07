import React from 'react'
import Header from '../base/header'
import CurrentProfile from './currentProfile'
import EditProfile from './editProfile'

import RaisedButton from 'material-ui/RaisedButton';




class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            EditProfileMode: false,
            ButtonText: "Edit"
        }
        this.onEditButtonPress = this.onEditButtonPress.bind(this)
    }
    chooseView() {
        if (this.state.EditProfileMode) {
            return <EditProfile />;   
        } else {
            return <CurrentProfile />;    
        }
    }
    onEditButtonPress() {
        this.setState({ EditProfileMode: !this.state.EditProfileMode})
        if(this.state.ButtonText=="Edit"){
            this.setState({ButtonText:"Save"})
        }else{
            this.setState({ButtonText:"Edit"})
        }
        
    }
    render() {
        return (
            <div>
                <Header />
                
                <RaisedButton 
                    onClick={() => {this.onEditButtonPress()}} 
                    label={this.state.ButtonText} 
                    primary={true} 
                    style={{margin: "12"}} >
                        
                </RaisedButton>
            {this.chooseView()}
            </div>
        )
    }
}
export default MyProfile