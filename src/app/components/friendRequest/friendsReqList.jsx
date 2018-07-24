import React from 'react'

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Paper from 'material-ui/Paper';

class FriendsReqList extends React.Component {

    constructor(props) {
        super(props)

    }

    requestList() {
        var friendRequestArray = this.props.friendRequestArray
        return friendRequestArray.map((person) => {
            var fullName = `${person.firstName} ${person.lastName}`
            return (
                <ListItem key={person._id}
                    primaryText={fullName}
                    leftAvatar={<Avatar src={"/users/" + person._id + "/profile_pics/primary_profile_pic.jpg"} />}
                    rightIcon={<CommunicationChatBubble />}
                />
            )
        })
    }

    suggestList() {
        var temp = ["Alice", "Dave"]
        return temp.map((Person) => {
            return (
                <ListItem key={Person}
                    primaryText={Person}
                    leftAvatar={<Avatar src="images/ok-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
            )
        })
    }


    render() {
        return (
            <div>
                <Paper style={style} zDepth={2} rounded={false} >
                    <List>
                        <Subheader>Friend Request's</Subheader>
                        {this.requestList()}
                    </List>
                    <Divider />
                    <List>
                        <Subheader>Suggested Friends</Subheader>
                        {this.suggestList()}
                    </List>
                </Paper>
            </div>
        )
    }
}

const style = {
    minHeight: 300,
    width: "100%",
    margin: 40,
    display: 'inline-block',
};

export default FriendsReqList