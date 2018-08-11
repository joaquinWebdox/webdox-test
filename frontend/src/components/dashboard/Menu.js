import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export const Menu = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>Webdox test</NavbarBrand>
      <Collapse isOpen={true} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/tickets">Tickets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
