import './styles.css';
import { Col } from 'react-bootstrap';
import Thumbnail from '../thumbnail';
import { Link } from "react-router-dom";
import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <Col id='navegation-menu' md={2}>
          Nav
          <Thumbnail />
          <br/>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/about">About</Link>
          <br/>
          <Link to="/projects">projects</Link>
        </Col>
    );
  }
}

export default Nav;
