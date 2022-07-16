import "./styles.css";
import Badge from 'react-bootstrap/Badge';

const Pill = (props) => {
  return (

      <Badge className="pill" pill bg="info">
        {props.tech}
      </Badge>
  );
}

export  default Pill;