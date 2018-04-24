
import React from 'react'
import axios from 'axios'




class CurrentProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            nickname: "",
            about: "",
            DOB: "",
            city: "",
            state: "",
            zip: "",
            work: "",
            relationship_status: ""
        }

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

    render() {
        return (
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
                                            <label style={styles.textStyle} >Cover Photo</label>
                                            <div style={styles.coverPhotoBox}><a href="https://placeholder.com">
                                                <img src="http://via.placeholder.com/350x150" /></a>
                                            </div>

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
                    <div className="col-md-2" >right side</div>
                </div>





                <footer style={styles.footer}></footer>


            </div>



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

        borderRadius: '20px',
        color: "#333333"
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
    }
}



export default CurrentProfile