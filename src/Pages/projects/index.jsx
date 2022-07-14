import './styles.css';
import { Col } from 'react-bootstrap';
import React from 'react';
import { getItem, getAllItems } from '../../libs/ddb_query'

import Card from '../../Components/card'
import { Loading } from '../../Components/loading';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: null
    }
  }
  async getProjects(){
    const PAYLOAD = {
      TableName: "portfolio",
    };
    const results = await getAllItems(PAYLOAD);
    this.setState({projects:results.Items})
  }

  componentDidMount(){
    if(!this.state.projects){
      this.getProjects();
    }
  }
  render() {
    return (
        <Col 
          className="d-flex align-items-center justify-content-center"
          md={10}
          style={{color:'white'}}
          id='projectsPage'>
            {
              this.state.projects ? this.state.projects.map( project =>{
                return <Card  key={project.id} project/>
              }) : <Loading />
            }
        </Col>
    );
  }
}

export default Projects;
