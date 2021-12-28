import React from "react";
import logo from '../../img/logo.png'
import { Link, NavLink} from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap'


const menu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/todo">
                        <img
                            src={logo}
                            width="90"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Motopres logo"
                        />{' '}
                        Motopres
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/todo">Zlecenia</Nav.Link>
                        <Nav.Link as={NavLink} to="/doneTodo">Wykonane</Nav.Link>
                        <Nav.Link as={NavLink} to="/users">Użytkownicy</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/logout" className="justify-content-end">Wyloguj</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default menu