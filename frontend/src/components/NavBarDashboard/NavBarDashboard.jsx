
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/Logo2.svg';
import { Button } from '../Utils/Button/Button';
import userImage from '../../images/user.svg';
import './NavBarDashboard.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBarDashboard = ({ setToggleModal, uploadUrl, firstname }) => {

    const navigate = useNavigate();

    const handeClick = () => {
        navigate("/update")
    }
    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto nav-right-items mr-6 col-md-12">
                        {!firstname &&
                            <>
                                <Nav.Link className="navlink-active flex-item" href="/">Home</Nav.Link>
                                <Nav.Link className="flex-item" href="/about"><span>About Us</span></Nav.Link>
                                <Nav.Link className="flex-item" href="/products">Products</Nav.Link>
                                <Nav.Link className="flex-item" href="/contact">Contact Us</Nav.Link>
                                <a href="/login" className="button-sm flex-item float-right">
                                    <Button type="button" text="Login" />
                                </a>
                            </>
                        }


                        {firstname &&
                            <Nav.Link className="margin-user" href="#">
                                <div className="frame-8591">
                                    <div className="user">
                                        <div className="user-thumb" onClick={handeClick}>
                                            <img src={uploadUrl} alt="avatar" />
                                        </div>
                                        <div className="user-name">
                                            {firstname}
                                        </div>
                                    </div>
                                </div>
                            </Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
