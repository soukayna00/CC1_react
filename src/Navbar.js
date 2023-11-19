import React,{useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from './Routes/Theme/Context/themeContext';
import BtnToggle from './Routes/Theme/Components/BtnToggle/BtnToogle';

export default function CustomNavbar() {
    const {theme } = useContext(ThemeContext)
    return (

        <Navbar bg={theme?'light':'dark'} expand='lg'>
            <Navbar.Brand as={Link} to='/'>
            <img src={process.env.PUBLIC_URL +`/logo.png`} width='100px' height='100px' alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP1'>
                        TP1
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP2'>
                        TP2
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP3'>
                        TP3
                    </Nav.Link>
                    <Nav.Link as={Link} to='/TP4'>
                        TP4
                    </Nav.Link>
                    
                    
                </Nav>
                <BtnToggle/>
            </Navbar.Collapse>
        </Navbar>
    );
}

