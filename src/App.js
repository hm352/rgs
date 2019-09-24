import React from 'react';
import './App.css';
import title_page from './images/title.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <Container fluid id="title">
        <Row>
          <Col>
            <Image src={title_page}></Image>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1> ROBERT GEORGE SANDER </h1>
            <h4> Designer/Artist/Pornstar/Basketballer </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
