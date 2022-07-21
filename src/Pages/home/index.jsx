import './styles.css';
import { Col } from 'react-bootstrap';
import React from 'react';

class Home extends React.Component {

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
