import Spinner from 'react-bootstrap/Spinner';
import './styles.css';

const Loading = () => {
  return (
    <div
      id='loading-component'
      className='d-flex align-items-center justify-content-center'
    >
      <Spinner animation='border' variant='info' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loading;
