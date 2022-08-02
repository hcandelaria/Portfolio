import React from 'react';
import { Image } from 'react-bootstrap';
import './styles.css';

const Thumbnail = (props) => {
  return (
    <Image
      thumbnail
      roundedCircle
      className={
        props.className
          ? props.className + ' mx-auto d-block profile-image'
          : 'mx-auto d-block profile-image'
      }
      src='https://hcandelariapersonalportfolio.s3.amazonaws.com/images/portofolio/profile.jpg'
    />
  );
};

export default Thumbnail;
