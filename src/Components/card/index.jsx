import './styles.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import IconLink from '../iconLink';
import Pill from '../pill';



const Badge = (props) => {

  return (
    <Card>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        <div>
        {
          props.data.stack.map((tech,index) => {
            return <Pill key={index} tech={tech}/>
          })
        }
        </div>
        <IconLink icon="logo-github" link={props.data.links[1]}/>
        <IconLink icon="globe-outline" link={props.data.links[0]}/>
      </Card.Body>
    </Card>
  );
}

export default Badge;
