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
        data-testid='homePage'
      >
        <div id='welcome' data-testid='welcome'>
          Welcome
        </div>
      </Col>
    );
  }
}

export default Home;
