import React from 'react'

import TextField from 'material-ui/TextField';

class EditProfile extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1" ></div>





                    {/* Main Area */}
                    <div className="col-md-9" >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4" >
                                <div style={styles.inputBorder}>
                                <TextField
                                    hintText="Hint Text"
                                />
                                </div>
                                </div>
                                <div className="col-md-4"><div style={styles.inputBorder}>
                                <TextField
                                    hintText="Hint Text"
                                    
                                />
                                </div></div>
                                <div className="col-md-4" ><div style={styles.inputBorder}>
                                <TextField
                                    hintText="Hint Text"
                                />
                                </div></div>
                            </div>
                        </div>
                    </div>





                    <div className="col-md-2" >right side</div>

                </div>
            </div>

        )
    }
}

var styles = {
    test: {
        border: "2px solid black"
    },
    inputBorder: {
        width: '100%',
        border: "2px solid rgba(31,193,68, .5)",
        borderRadius: "22px",
        paddingLeft: '10px'
    }
}


export default EditProfile