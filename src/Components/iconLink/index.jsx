import React from 'react';

const IconLink = (props) => {
  const style = props.className ? 'icon-link ' + props.className : 'icon-link';
  return (
    <a className={style} href={props.link} target='_blank' rel='noreferrer'>
      <ion-icon size='large' name={props.icon} />
    </a>
  );
};

export default IconLink;
