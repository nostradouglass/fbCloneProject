import React from 'react'

class CurrentProfile extends React.Component {


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
                                                    <h5 style={styles.content}>John</h5>
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Last Name</label>
                                                <div>
                                                    <h5 style={styles.content}> Doe</h5>
                                                </div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Nickname</label>
                                                <div>
                                                    <h5 style={styles.content}>JDub</h5>
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Email</label>
                                                <div>
                                                    <h5 style={styles.content}>jdub18@fbclone.com</h5>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Work</label>
                                                <div>
                                                   <h5 style={styles.content}>Carpenter</h5>
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Relationship Status</label>
                                                <div>
                                                  <h5 style={styles.content}>Married</h5>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Zip</label>
                                                <div>
                                                 <h5 style={styles.content}>73110</h5>
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} > City</label>
                                                <div>
                                                   <h5 style={styles.content}>Yukon</h5>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >State</label>
                                                <div>
                                                    <h5 style={styles.content}>Oklahoma</h5>
                                                </div></div>
                                            <div className="col-md-6" style={styles.textInputArea}>
                                                <label style={styles.textStyle} > Country</label>
                                                <div>
                                                    <h5 style={styles.content}>United States</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-12" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Cover Photo</label>
                                                <div style={styles.coverPhotoBox}><a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150" /></a></div>

                                            </div>
                                            <div className="col-md-12" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >About</label>
                                                <div style={styles.aboutBox}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque dolor quis est fringilla eleifend. Aliquam bibendum ut nibh nec porttitor. Proin in neque tortor. Donec fringilla nisi in consequat sodales. Aenean porttitor volutpat velit, ut ultrices eros. Maecenas fermentum suscipit facilisis. Nam non felis sed odio fringilla vehicula. Donec vel erat vestibulum, lacinia.</p></div>

                                            </div>
                                            <div className="col-md-12" style={styles.textInputArea}>
                                                <label style={styles.textStyle} >Interest</label>
                                                <div style={styles.interestBox}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales dolor.</p></div>

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



export default CurrentProfile;
