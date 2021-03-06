import React from 'react'
import axios from 'axios'
import moment from 'moment'

import SideChat from '../base/sideChat'
import CreatePost from '../base/createPost'

class Timeline extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: null,
            firstName: "",
            lastName: "",
            email: "",
            nickname: "",
            open: false,
            textAreaVal: "",
            postDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
            tempPostInfo: [
                {
                    postId: "123",
                    userName: "Steve Holt",
                    postDate: "May 29th 2018",
                    postText: "Arrested Season 5!",
                    postImageUrl: "",
                    postComments: [
                        {
                            user: "Maybe Funke",
                            comment: "Where?"
                        },
                        {
                            user: "Steve Holt",
                            comment: "Netflix"
                        },
                    ]
                },
                {
                    postId: "456",
                    userName: "Dave Thomas",
                    postDate: "March 23rd 2018",
                    postText: "Eat at Wendy's",
                    postImageUrl: "",
                    postComments: [
                        {
                            user: "",
                            comment: ""
                        }
                    ]
                }
            ]
        }


    }

    componentWillMount() {
        var that = this
        axios.get('/users/user')
            .then(function (res) {
                that.setState({
                    id: res.data._id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    nickname: res.data.nickname,
                })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

  createPost() {
        this.setState({ open: true });
    }
    
    post() {

        return this.state.tempPostInfo.map((post) => {
            return (
                <div key={post.postId} className="card" style={{ width: "100%" }}>
                    <div style={{ display: "inline" }}>
                        <div className="smallUserPic"> </div>
                        <div className="postUserName">{post.userName}</div>
                        <div className="postDate">{post.postDate}</div>
                    </div>

                    <div className="card-body">
                        <p className="card-text">{post.postText}</p>
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
            )
        })
    }
    

    render() {


        return (
            <div><SideChat />
                <div className="container">
                    <div className="subHeadArea"> </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6"><button type="button" className="btn btn-outline-success  btn-lg" onClick={this.createPost}>Create Post</button></div>
                        <div className="col-md-3"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">{this.post()}</div>
                        
                    </div>

                     <CreatePost open={this.state.open} id={this.state.id} firstName={this.state.firstName} lastName={this.state.lastName} postDate={this.state.postDate} />

                </div>



            </div >
        )
    }
}


export default Timeline