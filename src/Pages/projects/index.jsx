import "./styles.css";
import { CardGroup, Col } from "react-bootstrap";
import React from "react";
import { getAllItems } from "../../libs/api";

import Card from "../../Components/card";
import { Loading } from "../../Components/loading";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsGroups: null,
    };
  }
  async getProjects() {
    const DATA = await getAllItems();
    const SIZE = 3;
    let res = [];
    for (let i = 0; i < DATA.projects.length; i += SIZE) {
      res.push(DATA.projects.slice(i, i + SIZE));
    }
    this.setState({ projectsGroups: res });
  }

  componentDidMount() {
    if (!this.state.projects) {
      this.getProjects();
    }
  }
  render() {
    return (
      <Col
        className="d-flex align-items-center justify-content-center"
        md={10}
        style={{ color: "white" }}
        id="projectsPage"
      >
        {this.state.projectsGroups ? (
          this.state.projectsGroups.map((projects,index) => {
            return (
              <CardGroup key={index}>
                {projects.map((project) => {
                  return <Card key={project.id} data={project} />;
                })}
              </CardGroup>
            );
          })
        ) : (
          <Loading />
        )}
      </Col>
    );
  }
}

export default Projects;
