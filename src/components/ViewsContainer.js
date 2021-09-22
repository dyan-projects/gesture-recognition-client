import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import { Container, Col, Row, Image } from 'react-bootstrap';

import GestureRecognition from './GestureRecognition';
import DisplayGesture from './DisplayGesture';
import AdsView from './AdsView';
import HomeView from './HomeView';
import { tama_logo_blue } from '../assets/main-views-icons/img';

import '../assets/css/ViewsContainer.css';

const ViewsContainer = () => {
  const [emoji, setEmoji] = useState('');

  const setGesture = emoji => {
    setEmoji(emoji);
  };

  return (
    <Container fluid>
      <Row className="dashboard">
        <Col md={4} xs={3} className="dashboard__col">
          <div className="dashboard__items">
            <Link to="/">
              <Image src={tama_logo_blue} alt="App logo" fluid className="app-logo" />
            </Link>
          </div>
        </Col>
        <Col md={4} xs={6} className="dashboard__col">
          <div className="dashboard__items app__title">
            <span className="title__text">TAMA</span>
          </div>
          <div className="webcam-canvas">
            <GestureRecognition display={'none'} />
          </div>
        </Col>
        <Col md={4} xs={3} className="dashboard__col">
          <div className="dashboard__items emoji">
            <DisplayGesture detectedGesture={emoji} />
          </div>
        </Col>
      </Row>
      <Row className="body">
        <Col>
          <div>
            <Router>
              <HomeView onDetectGesture={setGesture} path="/" />
              <AdsView onDetectGesture={setGesture} path="/ads" />
            </Router>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewsContainer;
