import React from 'react'

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Paper from 'material-ui/Paper';

class SideChat extends React.Component {

    constructor(props) {
        super(props)

    }



    requestList() {
        var temp = ["Dave", "Steve", "Mike", "Susan"]
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
            <div style={{ float: "right" }}>
                <Paper style={style} zDepth={2} rounded={false} >
                    <List>
                        <Subheader>Online Friends</Subheader>
                        {this.requestList()}
                    </List>
                    <Divider />
                    <List>
                        <Subheader>Recent Conversations</Subheader>
                        {this.suggestList()}
                    </List>
                </Paper>
            </div>
        )
    }
}

const style = {
    minHeight: 300,
    width: 250,
    margin: 10,
    display: 'inline-block',
};

export default SideChat