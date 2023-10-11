import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status" type='dotting' style={{color:'blue'}}>
      <span className="visually-hidden"> Loading...</span>
    </Spinner>
    
  );
}
