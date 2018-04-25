import React from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import axios from 'axios'

const myCustomTheme = getMuiTheme({
    textField: {
        focusColor: '#1fc144'
    }
});

class EditProfile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: 1,
            firstName: "",
            lastName: "",
            email: "",
            nickname: "",
            about: "",
            DOB: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            work: "",
            relationship_status: ""
        }
        this.updateUserData = this.updateUserData.bind(this)
    }

    componentWillMount() {
        var that = this
        axios.get('/users/user')
            .then(function (res) {
                that.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    nickname: res.data.nickname,
                    about: res.data.about,
                    DOB: res.data.DOB,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    country: res.data.country,
                    work: res.data.work,
                    relationship_status: res.data.relationship_status

                })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

     updateUserData = () => {
        this.props.userData(this.state)
      }

    render() {

        return (
            <MuiThemeProvider muiTheme={myCustomTheme}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1" ></div>

                        {/* Main Area */}
                        <div className="col-md-9" >
                            <div className="container">
                                <div style={styles.topArea}></div>

                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >First Name</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField 
                                                        onChange ={(e)=> {
                                                            this.setState({firstName: e.target.value}, this.updateUserData)
                                                        }}
                                                        hintText="Required Field"
                                                        value={this.state.firstName}
                                                    />
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Last Name</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                        onChange ={(e)=> { 
                                                            this.setState({lastName: e.target.value}, this.updateUserData)
                                                            this.props.userData(this.state)
                                                        }
                                                        }
                                                        hintText="Hint Text"
                                                        value={this.state.lastName}
                                                    />
                                                </div>
                                                </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Nickname</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                        onChange ={(e)=> this.setState({nickname: e.target.value}, this.updateUserData)}
                                                        hintText="Required Field"
                                                        value={this.state.nickname}
                                                    />
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Email</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                    onChange ={(e)=> this.setState({email: e.target.value}, this.updateUserData)}
                                                        hintText="Hint Text"
                                                        value={this.state.email}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Work</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                    onChange ={(e)=> this.setState({work: e.target.value}, this.updateUserData)}
                                                        hintText="Required Field"
                                                        value={this.state.work}
                                                    />
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Relationship Status</label>
                                                <div>
                                                    <SelectField
                                                        floatingLabelText="Frequency"
                                                        value={this.state.value}
                                                        onChange={() => null}
                                                        style={styles.SelectField}
                                                    >
                                                        <MenuItem value={1} primaryText="Single" />
                                                        <MenuItem value={2} primaryText="Married" />
                                                        <MenuItem value={3} primaryText="Dating" />
                                                        <MenuItem value={4} primaryText="Engaged" />
                                                        <MenuItem value={5} primaryText="It's Complicated" />
                                                    </SelectField>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Zip</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                    onChange ={(e)=> this.setState({zip: e.target.value}, this.updateUserData)}
                                                        hintText="Required Field"
                                                        value={this.state.zip}
                                                    />
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} > City</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                    onChange ={(e)=> this.setState({city: e.target.value}, this.updateUserData)}
                                                        hintText="Hint Text"
                                                        value={this.state.city}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >State</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                    onChange ={(e)=> this.setState({state: e.target.value}, this.updateUserData)}
                                                        hintText="Required Field"
                                                        value={this.state.state}
                                                    />
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Country</label>
                                                <div style={styles.inputBorder}>
                                                    <TextField
                                                        onChange ={(e)=> this.setState({country: e.target.value}, this.updateUserData)}
                                                        hintText="Hint Text"
                                                        value={this.state.country}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-12" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Cover Photo</label>
                                                <div style={styles.coverPhotoBox}></div>

                                            </div>
                                            <div className="col-md-12" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >{this.state.about}</label>
                                                <div style={styles.aboutBox}></div>

                                            </div>
                                            <div className="col-md-12" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Interest</label>
                                                <div style={styles.interestBox}></div>

                                            </div>
                                        </div>
                                    </div>


                                </div>



                            </div>


                        </div>
                        <div className="col-md-2" >right side</div>
                    </div>








                </div>

            </MuiThemeProvider>

        )
    }
}


var styles = {
    test: {
        border: "2px solid black"
    },
    topArea: {
        minHeight: "80px"
    },
    inputBorder: {
        width: '100%',
        border: "2px solid rgba(31,193,68, .5)",
        borderRadius: "20px",
        paddingLeft: '10px',
        height: "2.7em"
    },
    textStyle: {
        color: "#1FC144",
        marginLeft: "15px"
    },
    textInputArea: {
        marginTop: '30px'
    },
    coverPhotoBox: {
        height: "150px",
        border: "2px solid rgba(31,193,68, .5)",
        borderRadius: '20px'
    },
    aboutBox: {
        height: "125px",
        border: "2px solid rgba(31,193,68, .5)",
        borderRadius: '20px'
    },
    interestBox: {
        height: "125px",
        border: "2px solid rgba(31,193,68, .5)",
        borderRadius: '20px'
    },
    SelectField: {
        width: "180px"
    }
}

export default EditProfile
