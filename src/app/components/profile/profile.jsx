import React from 'react'
import Header from '../base/header'
import axios from 'axios';

class Profile extends React.Component {

	constructor(props) {
		super(props)
			this.state =  { parameter: '',
			firstName: '',
			lastName: ''
			};
	}

	componentWillMount() {
		var that = this;
		axios.get('http://localhost:3000/auth/profile/'+this.props.profileId)
			.then(function(res) {
				that.setState({firstName: res.data.firstName}) 
				that.setState({lastName: res.data.lastName})
			})
			.catch(function(error) {
				console.log(error);
			});
	}


    render() {
   /*     
        return (
            <div>
                <Header />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>{this.props.profileId}</h1>

		


            </div>
        ) */ 
	    
	    return (
			    <div>
			    <Header />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1" ></div>

                    {/* Main Area */}
                    <div className="col-md-9" >
                        <div className="container">
                            <div className="topArea"></div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12" style={styles.textInputArea}>

                                        <div style={styles.coverPhotoBox}>
                                            <img style={{
                                                display: "inline",
                                                left: "50%",
                                                position: "relative",
                                                transform: "translateX(-50%)",
                                                margin: "0 auto",
                                                height: "100%",
                                                width: "auto"
                                            }} src={"/users/" + this.props.profileId + "/cover_photo/cover_photo.jpg"} />
            <div style={{
                width: "150px",
                height: "150px",
                position: "absolute",
                overflow: "hidden",
                borderRadius: "50%",
		bottom: 0
            }}
            >
                <img style={{
                    display: "inline",
                    left: "50%",
                    position: "absolute",
                    transform: "translateX(-50%) scale(1.7)",
                    margin: "0 auto",
                    height: "100%",
                    width: "auto"
               }} src={"/users/" + this.props.profileId + "/profile_pics/primary_profile_pic.jpg"} />
            </div>
		    <div style={styles.profileName}> <h5 style={styles.profileHeader}>{this.state.firstName} {this.state.lastName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

			    <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >First Name</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.firstName}</h5>
                                            </div></div>
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Last Name</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.lastName}</h5>
                                            </div></div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Nickname</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.nickname}</h5>
                                            </div></div>
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Email</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.email}</h5>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Work</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.work}</h5>
                                            </div></div>
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Relationship Status</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.relationship_status}</h5>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Zip</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.zip}</h5>
                                            </div></div>
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} > City</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.city}</h5>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >State</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.state}</h5>
                                            </div></div>
                                        <div className="col-md-6" style={styles.textInputArea}>
                                            <label style={styles.textStyle} > Country</label>
                                            <div>
                                                <h5 style={styles.content}>{this.state.country}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="col-md-12" style={styles.textInputArea}>


                                            <label style={styles.textStyle} >Profile Image</label>

                                        </div>
                                        <div className="col-md-12" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >About</label>
                                            <div style={styles.aboutBox}>
                                                <p>{this.state.about}</p></div>

                                        </div>
                                        <div className="col-md-12" style={styles.textInputArea}>
                                            <label style={styles.textStyle} >Interest</label>
                                            <div style={styles.interestBox}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales dolor.</p></div>

                                        </div>
                                    </div>
                                </div>


                            </div>





                        </div>


                    </div>
                    <div className="col-md-2" ></div>
                </div>





                <footer style={styles.footer}></footer>


            </div>
	    </div>

	    )

    }
}

var styles = {
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
        height: "280px",
        width: "100%",
        border: "2px solid rgba(31,193,68, .5)",
	position: "relative"
    },
    aboutBox: {
        height: "125px",
        border: "2px solid rgba(31,193,68, .5)",
        color: "#333333",
        overflow: "auto",
        width: "350px",
        padding: "12px"
    },
    interestBox: {
        height: "125px",
        border: "2px solid rgba(31,193,68, .5)",
        color: "#333333",
        overflow: "auto",
        width: "350px",
        padding: "12px"
    },
    SelectField: {
        width: "180px"
    },
    content: {
        color: "rgb(51,51,51)",
        paddingLeft: "23px"
    },
    footer: {
        height: "70px"
    },
    profileHeader: {
	    color: "rgb(187,239,201)",
	    fontSize: "2.25rem"
    },
    profileName: {
	    position: "absolute",
	    bottom: "15%",
	    marginLeft: "16%"
    },
}


export default Profile

