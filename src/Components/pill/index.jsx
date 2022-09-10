import Badge from 'react-bootstrap/Badge';
import './styles.css';

const Pill = (props) => {
  return (
    <Badge className='pill' pill bg={props.bg}>
      {props.tech}
    </Badge>
  );
};

export default Pill;
