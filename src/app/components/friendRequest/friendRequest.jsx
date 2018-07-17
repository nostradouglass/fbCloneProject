import React from 'react'

import Header from '../base/header'
import FriendsReqList from './friendsReqList'

class FriendRequest extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
            <Header />
            <h3><FriendsReqList /></h3>
            </div>
        )
    }

}

export default FriendRequest