import React from 'react';
import { Col } from 'react-bootstrap';
import './styles.css';

class Home extends React.Component {
  render() {
    return (
      <Col
        md={10}
        className='d-flex align-items-center justify-content-center'
        id='homePage'
      >
        <div id='welcome'>Welcome</div>
      </Col>
    );
  }
}

export default Home;
