import './css/App.css';
import { api } from './api';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  api.get('/random').then(response => console.log(response.data.value));

  return (
    <Container>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
    </Container>
  );
}

export default App;
