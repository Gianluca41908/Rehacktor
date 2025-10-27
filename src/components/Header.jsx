import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbar from './Searchbar';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home">Rehacktor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Settings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Searchbar />
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/register" >Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header