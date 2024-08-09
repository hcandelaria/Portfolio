import React from "react";

const IconLink = (props) => {
  const style = props.className ? "icon-link " + props.className : "icon-link";
  return (
    <a className={style} href={props.link} target="_blank" rel="noreferrer">
      <iconify-icon width="32px" globe-outlineheight="32px" icon={props.icon} />
    </a>
  );
};

export default IconLink;
