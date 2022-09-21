
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/Logo2.svg';
import userImage from '../../images/user.svg';
import './NavBarDashboard.css';

export const NavBarDashboard = ({ setToggleModal, uploadUrl, firstname }) => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">
                            <div className="frame-8591">
                                <div className="user">
                                    <div className="user-thumb" onClick={() => setToggleModal(true)}>
                                        <img src={uploadUrl} alt="" />
                                    </div>
                                    <div className="user-name">
                                        {firstname}
                                    </div>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
