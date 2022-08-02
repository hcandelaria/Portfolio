import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { getAllItems } from '../../libs/api';
import './styles.css';

import Card from '../../Components/card';
import { Loading } from '../../Components/loading';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
    };
    this.getProjects = this.getProjects.bind(this);
  }
  /**
   * Get projects
   * Set state.projects to list of projects
   */
  async getProjects() {
    let data = await getAllItems();
    // Sort data dec
    data = data.projects.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ projects: data });
  }

  componentDidMount() {
    if (!this.state.projects) {
      this.getProjects();
    }
  }
  render() {
    return (
      <Col md={10} id='projects-page'>
        {this.state.projects ? (
          <Row
            className='overflow-auto d-flex align-items-center justify-content-center'
            id='projects-container'
            xs={1}
            sm={2}
            lg={3}
          >
            {this.state.projects.map((project) => {
              return (
                <Col key={project.id}>
                  <Card data={project} />
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
