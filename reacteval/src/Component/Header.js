const {Component} = require("react")
const {Nav, Navbar} = require('react-bootstrap')
const {Link} = require("react-router-dom");

// import {Nav,Navbar,NavDropdown,FormControl,Form,Button} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/Home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as="div">
                            <Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link as="div">
                            <Link to = "/Sections">Section</Link>
                        </Nav.Link>
                        <Nav.Link as="div">
                            <Link to = "/Teachers">Teachers</Link>
                        </Nav.Link>
                        <Nav.Link as="div">
                            <Link to = "/Create">Create</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export {Header};