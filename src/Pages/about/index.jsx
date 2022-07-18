import "./styles.css";
import { Col, Container } from "react-bootstrap";
import React from "react";

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
        className="d-flex align-items-center justify-content-center"
        id="aboutPage"
      >
        <Container>
          <h1>Hello there!</h1>
          <p className="flow-text">My name is Hector.</p>
          <p className="flow-text">
            I am an enthusiastic Full Stack Web Developer from New Jersey.
            Hector developed a love for computers at the early age of 12. Since
            then, he continuously learn new technologies to pursuit his passion.
            Attracted to Software development, Hector found a rewarding feeling
            from developing software. Often described by him as the same feeling
            from winning a video game level.
          </p>
          <p className="flow-text">
            After completing Rutgers University Codingbootcamp, Hector accepted
            an job offer as a Teacher Assistant in the same Program. Where
            Hector helps and inspire young and veterans developers learn new
            technologies.
          </p>
          <p className="flow-text">
            Some of Hector's goals are to be part of a steep organization where
            he solves current life problems. To instruct his own class where he
            can teach and inpire developers. Create software and modules that
            can help others developers.
          </p>
        </Container>
      </Col>
    );
  }
}

export default About;
