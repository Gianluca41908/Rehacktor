import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import supabase from "../supabase/supabase-client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbar from './Searchbar';
import SessionContext from '../context/SessionContext';

function Header() {
    const navigate = useNavigate();
    const { session } = useContext(SessionContext);

    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) console.log(error);
        alert('Signed Out');
        navigate("/");
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-dark position-fixed fixed-top">
            <Container>
                <Navbar.Brand className='text-light fw-bold fs-5' href="#home">Rehacktor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-light fw-bold fs-5' as={Link} to="/">Home</Nav.Link>
                        {session ? (
                            <NavDropdown className='text-light fw-bold fs-5' 
                            title={<span className='text-light'>Hey {session?.user.user_metadata.first_name || 'Hey guest'}</span>} 
                            id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={signOut} className='text-danger'>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>)
                            : null}

                        <Searchbar />
                    </Nav>
                    {session ? null : 
                    (<Nav>
                        <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                    </Nav>)}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header