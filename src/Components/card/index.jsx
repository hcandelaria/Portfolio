import React from 'react';
import { Card } from 'react-bootstrap';
import CardCarousel from '../cardCarousel';
import IconLink from '../iconLink';
import Pill from '../pill';
import './styles.css';

const Badge = (props) => {
  return (
    <Card>
      <CardCarousel images={props.data.images} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        {props.data.frontend.length > 0 ? (
          <div>
            Frontend:
            {props.data.frontend.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='info' />;
            })}
          </div>
        ) : (
          <></>
        )}
        {props.data.backend.length > 0 ? (
          <div>
            Backend:
            {props.data.backend.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='warning' />;
            })}
          </div>
        ) : (
          <></>
        )}

        {props.data.services.length > 0 ? (
          <div>
            Services:
            {props.data.services.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='primary' />;
            })}
          </div>
        ) : (
          <></>
        )}

        {props.data.analisys.length > 0 ? (
          <div>
            Analisys:
            {props.data.analisys.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='danger' />;
            })}
          </div>
        ) : (
          <></>
        )}

        {props.data.links[0] ? (
          <IconLink icon='logo-github' link={props.data.links[0]} />
        ) : (
          <IconLink icon='logo-github' className='disabled' />
        )}
        {props.data.links[1] ? (
          <IconLink icon='globe-outline' link={props.data.links[1]} />
        ) : (
          <IconLink icon='globe-outline' className='disabled' />
        )}
      </Card.Body>
    </Card>
  );
};

export default Badge;
