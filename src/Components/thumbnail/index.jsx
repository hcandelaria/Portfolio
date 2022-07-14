import './styles.css';
import React from 'react';
import { Image } from "react-bootstrap";
import profile from './profile.jpg'; 

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Image
        id="profile-image"
        thumbnail
        roundedCircle
        className='mx-auto d-block'
        src={profile}
      />
    );
  }
}

export default Thumbnail;
