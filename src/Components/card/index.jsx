import "./styles.css";
import React from "react";
import { Card } from "react-bootstrap";
import IconLink from "../iconLink";
import Pill from "../pill";
import CardCarousel from "../cardCarousel";

const Badge = (props) => {
  return (
    <Card>
      <CardCarousel images={props.data.images} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        <div>
          {props.data.stack.map((tech, index) => {
            return <Pill key={index} tech={tech} />;
          })}
        </div>
        { props.data.links[0] ?
          <IconLink icon="logo-github" link={props.data.links[0]} /> :
          <IconLink icon="logo-github" className="disabled"/>
        }
        { props.data.links[1] ?
          <IconLink icon="globe-outline" link={props.data.links[1]} /> :
          <IconLink icon="globe-outline" className="disabled"/>
        }
      </Card.Body>
    </Card>
  );
};

export default Badge;
