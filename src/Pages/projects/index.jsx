import './styles.css';
import { Col, Container } from 'react-bootstrap';
import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test1: 'test1',
      test2: 'test2',
    }
  }
  render() {
    return (
        <Col 
          className="d-flex align-items-center justify-content-center"
          md={10}
          style={{color:'white'}}
          id='projectsPage'>
              Projects
        </Col>
    );
  }
}

export default Projects;
