import React from 'react'
import Header from '../base/header'
import CurrentProfile from './currentProfile'
import EditProfile from './editProfile'
import axios from 'axios'

import RaisedButton from 'material-ui/RaisedButton';




class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            EditProfileMode: false,
            ButtonText: "Edit",
            userData: {}

            // Do an axios get request for current user data and set to state.userData
        }
        this.onEditButtonPress = this.onEditButtonPress.bind(this)
        this.sendUpdatedUserData = this.sendUpdatedUserData.bind(this)
    }

    sendUpdatedUserData() {
       
        axios.put('/users', {
            firstName: this.state.userData.firstName,
                    lastName: this.state.userData.lastName,
                    email:this.state.userData.email,
                    nickname: this.state.userData.nickname,
                    about: this.state.userData.about,
                    // DOB:this.state.userData.DOB,
                    city: this.state.userData.city,
                    state:this.state.userData.state,
                    //zip:this.state.userData.zip,
                    country:this.state.userData.country,
                    work: this.state.userData.work,
                    relationship_status:this.state.userData.relationship_status
          })
          .then(function (response) {
            //console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    sendDataToServer = (dataFromChild) => {
        this.setState({userData: dataFromChild})



    }

    chooseView() {
        if (this.state.EditProfileMode) {
            return <EditProfile userData={this.sendDataToServer} />;   
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
            this.sendUpdatedUserData()
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