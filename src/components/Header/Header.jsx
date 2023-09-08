import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";



export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClassName = `nav navbar-dark py-3 mainNav fixed-top ${scrolled ? 'scrolled' : 'nonScrolled'}`;

    return (
        <Navbar expand="md" className={navbarClassName}>
            <Container>
                <Navbar.Brand className="fs-2 fw-bold">
                    <Link to="/" className="text-white nav-link">Start FrameWork</Link>
                </Navbar.Brand>
                <Navbar.Toggle className="border-0 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="ms-auto">
                        <Nav.Item>
                            <Link to="/about" className={`nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-3 rounded-3 ${location.pathname === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/portfolio" className={`nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-3 rounded-3 ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                                Portfolio
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact" className={`nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-3 rounded-3 ${location.pathname === '/contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
