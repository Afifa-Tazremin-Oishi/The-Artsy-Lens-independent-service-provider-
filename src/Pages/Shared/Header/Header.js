import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import PreparedLink from '../PreparedLink/PreparedLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={PreparedLink} to="/">The Artsy Lens</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link as={PreparedLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={PreparedLink} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={PreparedLink} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    < button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>LogOut</button>
                                    : <Nav.Link eventKey={2} as={PreparedLink} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;