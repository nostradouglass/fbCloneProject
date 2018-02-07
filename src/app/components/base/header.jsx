import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <ul className="nav" style={styles.navbar}>
                    <div onClick={this.handleToggle} ><span style={styles.hamburger}>&#9776;</span></div>

                    <Drawer docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}>

                        <MenuItem
                            containerElement={<Link to="/auth" />}
                            primaryText="Time line" />
                        <MenuItem
                            containerElement={<Link to="/auth/myprofile" />}
                            primaryText="My Profile" />
                       <MenuItem
                            containerElement={<Link to="/auth/friends" />}
                            primaryText="Friends" />
                            <MenuItem
                            containerElement={<Link to="/auth/photos" />}
                            primaryText="Photos" />
                            <MenuItem
                            containerElement={<Link to="/auth/settings" />}
                            primaryText="Settings" />
                    </Drawer>


                </ul>
            </div>
        )
    }

}


var styles = {
    navbar: {
        backgroundColor: "#1FC144",
        height: "70px"
    },
    hamburger: {
        marginTop: '13px',
        marginLeft: '25px',
        fontSize: '30px'
    }
}
export default Header