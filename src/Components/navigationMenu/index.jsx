import "./styles.css";
import React from "react";
import { Col, Row, Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Thumbnail from "../thumbnail";
import IconLink from "../iconLink";

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
                      <IconLink link="https://github.com/hcandelaria" icon="logo-github" />
                      <IconLink link="https://twitter.com/gabriel66_7" icon="logo-twitter" />
                      <IconLink link="https://www.linkedin.com/in/hector-candelaria-986347136/" icon="logo-linkedin" />
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
