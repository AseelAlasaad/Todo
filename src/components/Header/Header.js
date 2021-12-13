import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import {Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Button,
} from "@blueprintjs/core";

function Header(){
  return(
      
    <Navbar className="nav.bp3-navbar">
    <Navbar.Group>
        <Navbar.Heading>To Do List</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="settings" text="Settings" />
    </Navbar.Group>
</Navbar>

  )
}

export default Header;