import React from "react";
import "./styles.css";

const IconLink = (props) => {

  let style = props.className ? "icon-link " + props.className : "icon-link" 
  return (
    <a className={style} href={props.link} target="_blank">
      <ion-icon size="large" name={props.icon} />
    </a>
  );
};

export default IconLink;
