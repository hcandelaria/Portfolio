import React from "react";
import "./styles.css";

const IconLink = (props) => {
  return (
    <a className="icon-link" href={props.link} target="_blank">
      <ion-icon size="large" name={props.icon} />
    </a>
  );
};

export default IconLink;
