import React from 'react';
import './App.css';
import title_page from './images/title.JPG';
import paintings from './images/paintings.JPG';
import lad from './images/lad.jpg';
import biomimickry from './images/biomimickry.jpg';
import tape from './images/tape.JPG';
import petrolStation from './images/petrolStation.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoYoutube from 'react-ionicons/lib/LogoYoutube';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';


function App() {
  return (
    <div className="App">
      <Container fluid id="title">
        <Row id="titleImage">
          <Col>
            <Image className="full" src={title_page}></Image>
          </Col>
        </Row>
        <Row id="titleContent">
          <Col className='titleStuff'>
            <h1> ROBERT GEORGE SANDERS </h1>
            <h4> Designer/Artist/Pornstar/Basketballer </h4>
            <LogoInstagram color='white'></LogoInstagram>
            <LogoYoutube color='white'></LogoYoutube>
            <LogoFacebook color='white'></LogoFacebook>
          </Col>
        </Row>
      </Container>
      <Container fluid id="project">
        <Row>
          <Col>
            <Image className='full' src={ petrolStation }></Image>
          </Col>
          <Col>
            <h1> PROJECTS </h1>
          </Col>
        </Row>
      </Container>
      <Container fluid id="videoShowcase">
        <Row>
          <Col>
            <h1> Whatever Title you wnt </h1>
            <h4> by Robert George Saunders </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image className='full' src={lad}></Image>
            <h6> some content that about who filmed </h6>
            <h6> some content that about who filmed </h6>
          </Col>
          <Col>
            <Image className='full' src={lad}></Image>
            <h6> some content that about who filmed </h6>
            <h6> some content that about who filmed </h6>
          </Col>
          <Col>
            <Image className='full' src={lad}></Image>
            <h6> some content that about who filmed </h6>
            <h6> some content that about who filmed </h6>
          </Col>
        </Row>
      </Container>
      <Container fluid id="carousel">
        <Carousel>
          <Carousel.Item>
              <Image className='full' src={lad}></Image>
            <Carousel.Caption>
              <h6> some content that about who filmed </h6>
              <h6> some content that about who filmed </h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='full' src={lad}></Image>
            <Carousel.Caption>
              <h6> some content that about who filmed </h6>
              <h6> some content that about who filmed </h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='full' src={lad}></Image>
            <Carousel.Caption>
              <h6> some content that about who filmed </h6>
              <h6> some content that about who filmed </h6>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default App;
