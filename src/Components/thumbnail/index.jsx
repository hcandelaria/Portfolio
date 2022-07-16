import "./styles.css";
import React from "react";
import { Image } from "react-bootstrap";

const Thumbnail = () => {
  return (
    <Image
      id="profile-image"
      thumbnail
      roundedCircle
      className="mx-auto d-block"
      src="https://hcandelariapersonalportfolio.s3.amazonaws.com/images/portofolio/profile.jpg"
    />
  );
};

export default Thumbnail;
