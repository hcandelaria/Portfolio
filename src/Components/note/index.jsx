import { motion } from "framer-motion";
import React from "react";
import IconLink from "../iconLink";
import NoteCarousel from "../noteCarousel";
import Pill from "../pill";
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
      role="note"
      className="mx-4 mt-5 flex justify-center bg-black-russian-700"
      variants={notes}
    >
      <div className="max-w-sm rounded-lg">
        <NoteCarousel images={props.data.images} />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium text-gray-400">
            {props.data.name}
          </h5>
          <p className="mb-4 text-base text-gray-300">
            {props.data.description}
          </p>
          {frontend.length > 0 && (
            <div className="my-1 select-none justify-center whitespace-pre-wrap text-gray-300">
              Frontend:
              {frontend.map((tech, index) => {
                return <Pill key={index} tech={tech} bg="info" />;
              })}
            </div>
          )}
          {backend.length > 0 && (
            <div className="my-1 select-none justify-center whitespace-pre-wrap text-gray-300">
              Backend:
              {backend.map((tech, index) => {
                return <Pill key={index} tech={tech} bg="warning" />;
              })}
            </div>
          )}

          {services.length > 0 && (
            <div className="my-1 select-none justify-center whitespace-pre-wrap text-gray-300">
              Services:
              {services.map((tech, index) => {
                return <Pill key={index} tech={tech} bg="primary" />;
              })}
            </div>
          )}

          {analisys.length > 0 && (
            <div className="my-1 select-none justify-center whitespace-pre-wrap text-gray-300">
              Analisys:
              {analisys.map((tech, index) => {
                return <Pill key={index} tech={tech} bg="danger" />;
              })}
            </div>
          )}
          {test.length > 0 && (
            <div className="my-1 select-none justify-center whitespace-pre-wrap text-gray-300">
              Test:
              {test.map((tech, index) => {
                return <Pill key={index} tech={tech} bg="success" />;
              })}
            </div>
          )}

          {props.data.links[0] ? (
            <IconLink icon="line-md:github" link={props.data.links[0]} />
          ) : (
            <IconLink icon="line-md:github" className="disabled" />
          )}
          {props.data.links[1] ? (
            <IconLink icon="line-md:cloud" link={props.data.links[1]} />
          ) : (
            <IconLink icon="line-md:cloud" className="disabled" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Badge;
