import "./styles.css";
import React from "react";
import { Col, Row, Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Thumbnail from "../thumbnail";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : window.location.pathname,
    };
  }
  componentDidMount() {
    console.log(this.state.location)
  }

  render() {
    return (
      <Col id="nav-container">
        <Navbar expand="md" className="mb-3" collapseOnSelect>
          <Navbar.Toggle
            id="menu-button"
            aria-controls={`offcanvasNavbar-expand-md`}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Nav id="nav-menu" as="ul" defaultActiveKey={this.state.location}>
              <li>
                <Thumbnail />
              </li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <Nav.Link eventKey="/" as="li" className="link">
                    Home <ion-icon name="home-outline" />
                </Nav.Link>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <Nav.Link eventKey="/about" as="li" className="link">
                  About <ion-icon name="book-outline"></ion-icon>
                </Nav.Link>
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <Nav.Link eventKey="/projects" as="li" className="link">
                  Projects <ion-icon name="briefcase-outline"></ion-icon>
                </Nav.Link>
              </NavLink>
              <li>
                <Container id="nav-footer" className="d-grid gap-2">
                  <Row>
                    <Col>
                      <a href="https://github.com/hcandelaria" target="_blank">
                        <ion-icon size="large" name="logo-github" />
                      </a>
                      <a href="https://twitter.com/gabriel66_7" target="_blank">
                        <ion-icon size="large" name="logo-twitter" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hector-candelaria-986347136/"
                        target="_blank"
                      >
                        <ion-icon size="large" name="logo-linkedin" />
                      </a>
                    </Col>
                  </Row>
                </Container>
              </li>
            </Nav>
          </Navbar.Offcanvas>
        </Navbar>
      </Col>
    );
  }
}

export default NavigationMenu;
