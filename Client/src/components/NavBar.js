import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cars/newcar">Add Cars</Nav.Link>
          <Nav.Link href="/orderlist">My Order</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
