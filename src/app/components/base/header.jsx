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
                <nav className="navbar navbar-expand-lg nav" style={styles.navbar}>
                    <div onClick={this.handleToggle} ><span style={styles.hamburger}>&#9776;</span></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                            <a href="/logout"><button type="button" className="btn btn-outline-light">Logout</button></a>
                        </form>
                    </div>
                </nav>

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
        fontSize: '30px',
        color: '#ffffff'
    }
}
export default Header