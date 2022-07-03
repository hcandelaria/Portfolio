import './styles.css';
import { Col, Container } from 'react-bootstrap';
import React from 'react';

class Home extends React.Component {
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
          md={10}
          className="d-flex align-items-center justify-content-center"
          id='homePage'>
            <div
              id='welcome'>
              Welcome
            </div>
        </Col>
    );
  }
}

export default Home;
