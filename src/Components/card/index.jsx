import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CardCarousel from '../cardCarousel';
import IconLink from '../iconLink';
import Pill from '../pill';
import './styles.css';

const Badge = (props) => {
  const {
    frontend = [],
    backend = [],
    services = [],
    analisys = [],
    test = [],
  } = props.data;

  return (
    <Card role='card'>
      <CardCarousel images={props.data.images} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        {frontend.length > 0 ? (
          <div>
            Frontend:
            {frontend.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='info' />;
            })}
          </div>
        ) : (
          <></>
        )}
        {backend.length > 0 ? (
          <div>
            Backend:
            {backend.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='warning' />;
            })}
          </div>
        ) : (
          <></>
        )}

        {services.length > 0 ? (
          <div>
            Services:
            {services.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='primary' />;
            })}
          </div>
        ) : (
          <></>
        )}

        {analisys.length > 0 ? (
          <div>
            Analisys:
            {analisys.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='danger' />;
            })}
          </div>
        ) : (
          <></>
        )}
        {test.length > 0 ? (
          <div>
            Test:
            {test.map((tech, index) => {
              return <Pill key={index} tech={tech} bg='success' />;
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
