import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Thumbnail from '../../Components/thumbnail';
import './styles.css';

class About extends React.Component {
  render() {
    return (
      <Col
        md={10}
        className='overflow-auto d-flex align-items-center justify-content-center'
        id='about-page'
      >
        <Row>
          <Container fluid>
            <Thumbnail className='fade-in d-block d-md-none' />
            <h1 className='fade-in'>Hello there!</h1>
            <p className='flow-text fade-in'>
              My name is Hector. I am an enthusiastic software engineer from New
              Jersey.
            </p>
            <br />
            <p className='flow-text fade-in'>
              Since a very young age, I have developed a passion for technology,
              solving complex problems and data analyzes.
            </p>
            <br />
            <p className='flow-text fade-in'>I’ve experiences within:</p>
            <ul>
              <li className='flow-text fade-in'>
                The Health sector as an Information System Support at Atlantic
                Health System. Utilizing my skills for troubleshooting systems,
                networks, automation and data entry.
              </li>
              <li className='flow-text fade-in'>
                The Education sector, as an Teacher Assistant at Rutgers
                university. Teaching, mentoring, helping and inspiring youth and
                veteran developers learn new technologies.
              </li>
            </ul>

            <p className='flow-text fade-in'>
              I enjoy developing software, learning new technologies, mentoring
              and helping others. I've continuously learned new technologies to
              pursuit my passion and consider myself a jack-of-all-trades.
            </p>
            <div>
              <br />
              <p className='quote flow-text fade-in'>
                <span>"</span>Jack of all trades, Master of None, Though
                Oftentimes better Than master of one.<span>"</span>
              </p>
            </div>
          </Container>
        </Row>
      </Col>
    );
  }
}

export default About;
