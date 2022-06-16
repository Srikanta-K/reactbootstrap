import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Container>
                    <Navbar.Brand style={{ width: "100%", marginTop: "2%", marginLeft: "20%" }}><b> To User Registration page</b></Navbar.Brand>

                </Container>

                <Container>
                <Navbar.Brand style={{ width: "100%", marginTop: "2%", marginLeft: "30%" }}><b>CAPGEMINI LOGO</b></Navbar.Brand>
                </Container>

            </Navbar>

        </div>
    )
}

export default Menu
