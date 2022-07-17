import "./styles.css";
import { CardGroup, Col, Row } from "react-bootstrap";
import React from "react";
import { getAllItems } from "../../libs/api";

import Card from "../../Components/card";
import { Loading } from "../../Components/loading";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
    };
  }
  async getProjects() {
    const DATA = await getAllItems();
    this.setState({ projects: DATA.projects });
  }

  componentDidMount() {
    if (!this.state.projects) {
      this.getProjects();
    }
  }
  render() {
    return (
      <Col md={10} id="projects-page">
        {this.state.projects ? (
          <Row
            className="overflow-auto d-flex align-items-center justify-content-center"
            id="projects-container"
            xs={1}
            sm={2}
            lg={3}
          >
            {this.state.projects.map((project) => {
              return (
                <Col key={project.id}>
                  <Card  data={project} />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Loading />
        )}
      </Col>
    );
  }
}

export default Projects;
