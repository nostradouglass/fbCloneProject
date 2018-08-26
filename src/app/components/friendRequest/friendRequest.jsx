import React from 'react'
import axios from 'axios'
import Header from '../base/header'
import FriendsReqList from './friendsReqList'

class FriendRequest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id : undefined,
            friendRequestArray: []
        }
    }

    componentDidMount() {
        var that = this
        function checkUniqueness () {
            return axios.get('/users/user')
            .then(function (res) {
                that.setState({
                    id: res.data._id
                })
            }).catch((err) => {
                console.log(err)
            })
        }

        checkUniqueness().then(() => {    
                axios.get(`/friends/pendingfriendrequest?friendRequestId=${this.state.id}`)
                    .then((response) => {
                        this.setState({friendRequestArray: response.data })
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        return (
            <div>

                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6"><FriendsReqList friendRequestArray = {this.state.friendRequestArray} /></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FriendRequest