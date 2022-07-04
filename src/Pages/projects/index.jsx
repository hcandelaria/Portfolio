import './styles.css';
import { Col } from 'react-bootstrap';
import React from 'react';
import Card from '../../Components/card'

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
            <Card />
        </Col>
    );
  }
}

export default Projects;
