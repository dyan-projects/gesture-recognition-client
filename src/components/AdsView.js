import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Col, Row, Image, Badge } from 'react-bootstrap';

import * as img from '../assets/main-views-icons/img';
import '../assets/css/AdsView.css';

const baseUrl = 'http://localhost:4000/';
const maxAdsPerPage = 3;

const formatAdName = adName => {
  return adName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s/g, '_');
};

const getAdUrl = ad => {
  // console.log('currentAd', ad);
  if (ad) {
    return `${baseUrl}static/ads/${ad.id}_${formatAdName(ad.name)}.webp`;
  }
};

const getAdName = ad => {
  if (ad) {
    return ad.name;
  }
};

const AdsView = () => {
  const numberOfPages = useRef(0);
  const currentPage = useRef(1);
  const lastPageAds = useRef(0);
  const adLiked = useRef(false);
  const adDisliked = useRef(false);
  const currentAd = useRef(null);
  const [currentAds, setCurrentAds] = useState(null);
  const [selectedAdIndex, setSelectedAdIndex] = useState(0);

  const fetchCurrentAds = page => {
    axios.get(`${baseUrl}api/v1/adverts?page=${page}&max=${maxAdsPerPage}`).then(response => {
      numberOfPages.current = Math.ceil(response.data.count / maxAdsPerPage);
      // lastPageAds.current = console.log(numberOfPages.current);
      setCurrentAds(response.data.rows);
    });
  };

  const updateRatings = ratings => {
    axios.put(`${baseUrl}api/v1/adverts/${currentAds[selectedAdIndex].id}/likes`, ratings).then(response =>
      setCurrentAds(() => {
        currentAds[selectedAdIndex] = response.data;
        return [...currentAds];
      }),
    );
  };

  const likeCurrentAd = () => {
    if (adLiked.current) {
      adLiked.current = false;
      updateRatings({ like: -1, dislike: 0 });
    } else if (adDisliked.current) {
      adLiked.current = true;
      adDisliked.current = false;
      updateRatings({ like: 1, dislike: -1 });
    } else {
      adLiked.current = true;
      updateRatings({ like: 1, dislike: 0 });
    }
  };

  const dislikeCurrentAd = () => {
    if (adDisliked.current) {
      adDisliked.current = false;
      updateRatings({ like: 0, dislike: -1 });
    } else if (adLiked.current) {
      adDisliked.current = true;
      adLiked.current = false;
      updateRatings({ like: -1, dislike: 1 });
    } else {
      adDisliked.current = true;
      updateRatings({ like: 0, dislike: 1 });
    }
  };

  const previousAd = () => {
    adLiked.current = false;
    adDisliked.current = false;
    if (currentPage.current === 1 && selectedAdIndex > 0) {
      setSelectedAdIndex(prevIndex => prevIndex - 1);
    } else if (currentPage.current > 1) {
      if (selectedAdIndex === 0) {
        currentPage.current -= 1;
        setSelectedAdIndex(maxAdsPerPage - 1);
        fetchCurrentAds(currentPage.current);
      } else if (selectedAdIndex > 0) {
        setSelectedAdIndex(prevIndex => prevIndex - 1);
      }
    }
  };

  const nextAd = () => {
    adLiked.current = false;
    adDisliked.current = false;
    if (currentPage.current === numberOfPages.current && selectedAdIndex < lastPageAds) {
      setSelectedAdIndex(prevIndex => prevIndex + 1);
    } else if (currentPage.current < numberOfPages.current) {
      if (selectedAdIndex === maxAdsPerPage - 1) {
        currentPage.current += 1;
        setSelectedAdIndex(0);
        fetchCurrentAds(currentPage.current);
      } else if (selectedAdIndex < maxAdsPerPage - 1) {
        setSelectedAdIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  useEffect(() => {
    fetchCurrentAds(currentPage.current);
  }, []);

  useEffect(() => {
    if (currentAds) {
      currentAd.current = currentAds[selectedAdIndex];
      console.log(currentAd.current);
    }
  }, [selectedAdIndex, currentAds]);

  return (
    <Container className="main__container" fluid>
      <Row className="">
        <Col lg={2} md={2} xs={2} className="main__items">
          <div className="nav__img" onClick={previousAd}>
            <Image src={img.previous} className="previous__next" />
          </div>
        </Col>
        <Col lg={8} md={8} xs={8} className="main__items">
          <div className="">
            {currentAds ? (
              <Image
                src={currentAds ? getAdUrl(currentAds[selectedAdIndex]) : `Loading...`}
                fluid
                className="ad__img main__ad"
              />
            ) : (
              `Loading...`
            )}
          </div>
          {currentAds ? (
            <div className="main__ad__title">{`${getAdName(currentAds[selectedAdIndex])}`}</div>
          ) : (
            `Loading...`
          )}
        </Col>
        <Col lg={2} md={2} xs={2} className="main__items">
          <div className="nav__img" onClick={nextAd}>
            <Image src={img.next} className="previous__next" />
          </div>
        </Col>
      </Row>
      <Row className="ads__sublist">
        <Container className="main__container" fluid>
          <Row>
            <Col lg={2} md={2} xs={2} className="main__items"></Col>
            <Col lg={8} md={8} xs={8} className="main__items">
              <div className="ad__sublist">
                {currentAds
                  ? currentAds.map(currentAd => (
                      <div key={currentAd.id} className="ad__thumbnail">
                        <Image
                          key={currentAd.id}
                          src={currentAds ? getAdUrl(currentAd) : `Loading...`}
                          fluid
                          className={`ad__img small__ad ${
                            currentAds[selectedAdIndex]?.id === currentAd.id ? 'selected__ad' : ''
                          }`}
                        />
                      </div>
                    ))
                  : `Loading...`}
              </div>
            </Col>
            <Col lg={2} md={2} xs={2} className="main__items"></Col>
          </Row>
        </Container>
      </Row>
      <Row className="">
        <Container className="main__container" fluid>
          <Row>
            <Col className="main__items rating">
              <div className="ratings__container">
                <div className="emoji__likes__dislikes" onClick={likeCurrentAd}>
                  <Image
                    src={img.like}
                    className={`emoji__img ${adLiked.current ? 'rounded-circle border border-success' : ''}`}
                    fluid
                  />
                </div>
                <div className="count__likes__dislikes">
                  <Badge bg="success">{currentAds ? currentAds[selectedAdIndex]?.likes : 0}</Badge>
                </div>
              </div>
              <div className="ratings__container">
                <div className="emoji__likes__dislikes" onClick={dislikeCurrentAd}>
                  <Image
                    src={img.dislike}
                    className={`emoji__img ${
                      adDisliked.current ? 'rounded-circle border border-danger' : ''
                    }`}
                    fluid
                  />
                </div>
                <div className="count__likes__dislikes">
                  <Badge bg="danger">{currentAds ? currentAds[selectedAdIndex]?.dislikes : 0}</Badge>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Col lg={10} md={10} xs={10} className="main__items"></Col>
        <Col lg={2} md={2} xs={2} className="main__items">
          <div className="nav__img">
            <div className="exit__text">Exit</div>
            <Image src={img.exit} className="exit" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdsView;
