import './styles.css';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Thumbnail from '../thumbnail';


class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
    console.log('klk')
  }

  render() {
    return (
        <Col className='d-none d-md-block' id='nav-container'>
          <Thumbnail />
          <ul id='nav-menu'>
              <NavLink to="/"
                className={({ isActive }) =>
                isActive ? 'link active' : 'link'
              }>
              <li>
                  Home <ion-icon name="home-outline" />
              </li>
              </NavLink>
              <NavLink to="/about"
                  className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }>
                <li>
                  About <ion-icon name="book-outline"></ion-icon>
                </li>
              </NavLink>
              <NavLink to="/projects"
                  className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }>
                <li>
                  Projects <ion-icon name="briefcase-outline"></ion-icon>
                </li>
              </NavLink>
            <li>
            <Container id="nav-footer" className="d-grid gap-2">
              <Row>
                <Col>
                  <a href='https://github.com/hcandelaria' target="_blank">
                    <ion-icon size="large" name="logo-github"/>
                  </a>
                  <a href='https://twitter.com/gabriel66_7' target="_blank">
                    <ion-icon size="large" name="logo-twitter"/>
                  </a>
                  <a href='https://www.linkedin.com/in/hector-candelaria-986347136/' target="_blank">
                    <ion-icon size="large" name="logo-linkedin"/>
                  </a>
                </Col>
              </Row>
            </Container>
            </li>
          </ul>
        </Col>
    );
  }
}

export default Nav;
