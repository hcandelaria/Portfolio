import './styles.css';
import React from 'react';
import { Image } from "react-bootstrap";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Image
        thumbnail
        roundedCircle
        src="https://toppng.com/public/uploads/preview/salamence-pokemon-anime-pocketmonsters-pokemon-pokemon-salamence-11562942170psv2llmtj7.png"
      />
    );
  }
}

export default Thumbnail;
