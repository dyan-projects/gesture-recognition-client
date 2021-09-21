import React from 'react';
import { Link } from '@reach/router';
import { Container, Col, Row, Image } from 'react-bootstrap';

import * as gestures from '../assets/main-views-icons/emojis';

import '../assets/css/HomeView.css';

const keywords = ['left', 'right', 'thumbs_up', 'thumbs_down', 'victory', 'closed_fist'];

const instructions = {
  waving_hand: 'Wave to start',
  closed_fist: 'Exit',
  victory: 'Cancel',
  left: 'Previous',
  right: 'Next',
  thumbs_up: 'Like',
  thumbs_down: 'Dislike',
};

const HomeView = () => {
  return (
    <Container className="main__container" fluid>
      <Row className="main__wave">
        <Col lg={4} md={3} xs={1} className="main__items"></Col>
        <Col lg={2} md={3} xs={5} className="main__items">
          <Link to="/ads">
            <Image src={gestures.waving_hand} fluid className="main__emoji" />
          </Link>
        </Col>
        <Col lg={2} md={3} xs={5} className="main__items main__emoji">
          <span className="wave__text">{instructions.waving_hand}</span>
        </Col>
        <Col lg={4} md={3} xs={1} className="main__items"></Col>
      </Row>
      <Row className="main__emojis">
        <Container className="main__container" fluid>
          {keywords.map(keyword => (
            <Row key={keyword} className="">
              <Col lg={4} md={3} xs={1} className="main__items"></Col>
              <Col lg={2} md={3} xs={5} className="main__items">
                <Image src={gestures[keyword]} fluid className="main__emoji" rounded />
              </Col>
              <Col lg={2} md={3} xs={5} className="main__items text__col">
                <span className="main__text">{instructions[keyword]}</span>
              </Col>
              <Col lg={4} md={3} xs={1} className="main__items"></Col>
            </Row>
          ))}
        </Container>
      </Row>
    </Container>
  );
};

export default HomeView;
