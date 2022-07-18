import "./styles.css";
import { Col, Container } from "react-bootstrap";
import React from "react";
import Thumbnail from "../../Components/thumbnail";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: "test1",
      test2: "test2",
    };
  }
  render() {
    return (
      <Col
        md={10}
        style={{ color: "white" }}
        className="overflow-auto d-flex align-items-center justify-content-center"
        id="about-page"
      >
        <Container>
          <Thumbnail className="fade-in d-block d-md-none" />
          <h1 className="fade-in">Hello there!</h1>
          <p className="flow-text">My name is Hector.</p>
          <p className="flow-text">
            I am an enthusiastic software engineer from New Jersey. I developed
            a love for computers since my early teens. Since then, I've
            continuously learned new technologies to pursuit my passion and
            consider myself a jack-of-all-trades. I find a rewarding and
            accomplishment feeling from developing software. The very same as
            winning a video game level.
          </p>
          <p className="flow-text">
            After completing Rutgers University Codingbootcamp, Hector accepted
            an job offer as a Teacher Assistant in the same Program. Where
            Hector helps and inspire young and veterans developers learn new
            technologies.
          </p>
          <p className="flow-text">
            Some of my career goals are to be part of a steep organization where
            we solve current life problems. To instruct my own class where I can
            teach and inspire developers. Create software and modules that can
            help others developers.
          </p>
          <div>
            <br />
              <p className="quote flow-text">" Jack of all trades, Master of None, Though Oftentimes better Than master of one."</p>
          </div>
        </Container>
      </Col>
    );
  }
}

export default About;
