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
        this.submitText = this.submitText.bind(this);
        this.exampleApiCall = this.exampleApiCall.bind(this);
    }


    updateText = (e, value) => {
        this.setState({ text: [value] });
    }


    exampleApiCall = (e) => {
        console.log("calling api")

        axios.get('/api', {
            text: 'api'
        })
        .then(function(res) {
            console.log(res);
        })
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
                    <FlatButton
                        label="API Call"
                        primary={true}
                        onClick={this.exampleApiCall}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
