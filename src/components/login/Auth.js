import React, { Component } from 'react';
import { ContextLogin } from '../../context/LoginContext.js'
import { When } from 'react-if';
class auth extends Component {
    static contextType = ContextLogin;

    render() {
        const isLoggedIn = this.context.LoggedIn;
        const doHaveCapabiliy = this.context.can(this.props.capability);

        return (
            <div>
                <When condition={isLoggedIn && doHaveCapabiliy}>
                    {this.props.children}
                </When>
            </div>
        );
    }
}

export default auth;