import React from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import {
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Link to='/Home'>
               <Button className="bp3-minimal" icon="home" text="Home" />
            </Link>
            <Link to='/Settings'> 
            <Button className="bp3-minimal" icon="settings" text="Settings" />
            </Link>
          </Navbar.Group>
        </Navbar>

      </>


    );
  }
}


export default Header;