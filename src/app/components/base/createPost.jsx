
import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import moment from 'moment'




class CreatePost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            textAreaVal: ""
        }
    }

    

  

    // handleClose = () => {
    //     this.setState({ open: false, textAreaVal: "" });
    // };

    // handleSubmit = () => {
    //     this.setState({ open: false });
    // };

    handleTextValChange = (e) => {
        this.setState({ textAreaVal: e.target.value })
    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={false}
                onClick={this.handleSubmit}
            />,
        ];

         return (
<div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 timelineBg">
                    </div>
                <div className="col-md-3"></div>
            </div>

            <Dialog
                actions={actions}
                modal={true}
                open={this.props.open}
            >
                <div style={{ width: "100%" }}>
                    <div style={{ display: "inline" }}>
                        <div ><img className="smallUserPic" src={"/users/" + this.props.id + "/profile_pics/primary_profile_pic.jpg"} /></div>
                        <div className="postUserName">{this.props.firstName} {this.props.lastName}</div>
                        <div className="postDate">{this.props.postDate}</div>
                    </div>

                    <div className="card-body">
                        <p className="card-text">{this.state.textAreaVal}</p>
                    </div>
                    <textarea className="createPostTextInput" value={this.state.textAreaVal} onChange={this.handleTextValChange} />
                </div>
            </Dialog>
            </div>
         )        
    }
}

    export default CreatePost