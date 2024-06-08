import { motion } from 'framer-motion';
import React from 'react';
import IconLink from '../iconLink';
import NoteCarousel from '../noteCarousel';
import Pill from '../pill';
const notes = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Badge = (props) => {
  const {
    frontend = [],
    backend = [],
    services = [],
    analisys = [],
    test = [],
  } = props.data;

  return (
    <motion.div
      role='note'
      className='bg-black-russian-700 flex justify-center mx-4 mt-5'
      variants={notes}
    >
      <div className='rounded-lg max-w-sm'>
        <NoteCarousel images={props.data.images} />

        <div className='p-6'>
          <h5 className='text-gray-400 text-xl font-medium mb-2'>
            {props.data.name}
          </h5>
          <p className='text-gray-300 text-base mb-4'>
            {props.data.description}
          </p>
          {frontend.length > 0 && (
            <div className='justify-center my-1 select-none whitespace-pre-wrap text-gray-300'>
              Frontend:
              {frontend.map((tech, index) => {
                return <Pill key={index} tech={tech} bg='info' />;
              })}
            </div>
          )}
          {backend.length > 0 && (
            <div className='justify-center my-1 select-none whitespace-pre-wrap text-gray-300'>
              Backend:
              {backend.map((tech, index) => {
                return <Pill key={index} tech={tech} bg='warning' />;
              })}
            </div>
          )}

          {services.length > 0 && (
            <div className='justify-center my-1 select-none whitespace-pre-wrap text-gray-300'>
              Services:
              {services.map((tech, index) => {
                return <Pill key={index} tech={tech} bg='primary' />;
              })}
            </div>
          )}

          {analisys.length > 0 && (
            <div className='justify-center my-1 select-none whitespace-pre-wrap text-gray-300'>
              Analisys:
              {analisys.map((tech, index) => {
                return <Pill key={index} tech={tech} bg='danger' />;
              })}
            </div>
          )}
          {test.length > 0 && (
            <div className='justify-center my-1 select-none whitespace-pre-wrap text-gray-300'>
              Test:
              {test.map((tech, index) => {
                return <Pill key={index} tech={tech} bg='success' />;
              })}
            </div>
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
        </div>
      </div>
    </motion.div>
  );
};

export default Badge;
