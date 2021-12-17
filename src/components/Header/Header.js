import React from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import {
  Navbar,
  Alignment,
  Button,
} from "@blueprintjs/core";


class Header extends React.Component {
  render() {

    return (
     
         <>
        <Navbar className="bp3-navbar bp3-dark">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>To Do List</Navbar.Heading>
            <Navbar.Divider />
            <a href="setting">
              <Button className="bp3-minimal" icon="settings" text="Settings" />

            </a>
            <a href="/todo-app">
              <Button className="bp3-minimal" icon="home" text="Home" />

            </a>
          </Navbar.Group>
        </Navbar>
        </>

   
    );
  }
}


export default Header;