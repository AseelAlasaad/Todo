import React, { Component } from 'react';
import { ContextLogin } from '../../context/LoginContext.js'
import { Button, Card, FormGroup, InputGroup, Elevation, Switch } from "@blueprintjs/core";
import { When } from 'react-if';

class Login extends Component {
    static contextType = ContextLogin;
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.context.loginFunction(this.state.username, this.state.password);

    }
    render() {
        return (
            <div>
                <When condition={!this.context.LoggedIn}>

                    <form onSubmit={this.handelSubmit}>

                        <FormGroup label="Username">
                            <InputGroup type="text" placeholder="username" name="username" onChange={this.handelChange} />
                        </FormGroup>
                        <FormGroup label="Password">
                            <InputGroup type="password" placeholder="Password" name="password" onChange={this.handelChange} />
                        </FormGroup>
                        
                        <Button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg> Login</Button>
                    </form>
                </When>

                <When condition={this.context.LoggedIn}>
                    <Button   onClick={this.context.logoutFunction}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg> Logout</Button>
                </When>


            </div>
        );
    }
}

export default Login;