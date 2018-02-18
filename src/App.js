import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.key = 1;
        this.state = { text: '' };
        this.updateText = this.updateText.bind(this);
    }


    updateText = (e, value) => {
        this.setState({ text: [value] });
    }

    submitText = (e) => {
        console.log(this.state.text);
        axios.post('/text', {
            text: this.state.text
        })
            .then(function (res) {
                console.log(res);
                console.log(res.data);
            })
            .catch(function (err) {
                console.log(err);
            })
        }

    render() {
        console.log(this.state.cards);
        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1> Welcome to Team F project </h1>
                    <TextField
                        hintText="Random input"
                        onChange={this.updateText}
                    />
                    <FlatButton 
                        label="Submit" 
                        primary={true}
                        onClick={this.submitText} 
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
