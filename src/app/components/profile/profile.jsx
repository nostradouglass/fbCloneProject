import React from 'react'
import Header from '../base/header'
import axios from 'axios';

var myProfPict2;

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            parameter: '',
            firstName: '',
            lastName: '',
            myId: '',
            myProfPict: ''
        };
    }

   

    componentWillMount() {
        var that = this;
        axios.get('http://localhost:3000/auth/profile/' + this.props.profileId)
            .then(function (res) {
                that.setState({ firstName: res.data.firstName })
                that.setState({ lastName: res.data.lastName })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('/users/user')
            .then(function (res) {
                console.log(res.data)

                that.setState({
                    myId: res.data._id,
                    myProfPict: "/users/" + res.data._id + "/profile_pics/primary_profile_pic.jpg"
                    
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    profilePic() {

        myProfPict2 = this.state.myProfPict;

        return (
            <div style={{
                width: "150px",
                height: "150px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "50%"
            }}
            >
                <img style={{
                    display: "inline",
                    left: "50%",
                    position: "relative",
                    transform: "translateX(-50%)",
                    margin: "0 auto",
                    height: "100%",
                    width: "auto"
                }} src={"/users/" + this.state.myId + "/profile_pics/primary_profile_pic.jpg"} />
            </div>
        )
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

                                    <div className="col-md-6">

                                    </div>

                                    <div className="col-md-6">
                                        <div /* key={post.postId} */ className="card" style={{ width: "100%" }}>
                                            <div style={{ display: "inline" }}>
                                                <div> <img style={{margin: '10px',height: '70px',
        width: '70px',
               
        borderRadius: '50%',
        float: 'left' }}src= {"/users/" + this.state.myId+ "/profile_pics/primary_profile_pic.jpg"}/></div>
                                                <div className="postUserName">Write something to {this.state.firstName} {this.state.lastName}...</div>
                                                <div className="postDate"> </div>
                                            </div>

                                            <div className="card-body">
                                                <p className="card-text"></p>
                                            </div>
                                            <div className="postImage" ></div>
                                            <div className="row likeCommentButtons">
                                                <div className="col-md-1"></div>
                                                <div className="col-md-3"><button type="button" className="btn btn-outline-success">Like</button></div>
                                                <div className="col-md-4"></div>
                                                <div className="col-md-3"><button type="button" className="btn btn-outline-success">Comment</button></div>
                                                <div className="col-md-1"></div>
                                                <div style={{ display: "inline" }}>
                                                    <div className="addCommentPic"></div>
                                                    <input type="text" placeholder="Add a comment" style={{ width: "400px", marginTop: "20px" }} />
                                                </div>
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

