import './styles.css';
import { Col, Container } from 'react-bootstrap';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test1: 'test1',
      test2: 'test2',
    }
  }
  render() {
    return (
      <Col id='aboutPage'
        md={10}>
          <Container 
            fluid
            className="d-flex align-items-center justify-content-center"
            id='about'>
              About
          </Container>
      </Col>
    );
  }
}

export default About;
