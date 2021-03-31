import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import Slider from 'react-slick';
import HeroPackageCards from 'components/Cards/HeroPackageCards';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function HeroPackageCarousels() {
  const widgetsCarousels1A = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  const widgetsCarousels1B = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  return (
    <>
      <Row className="align-items-center">
        <Col xl="12" >
          <Slider
            className="rounded-lg overflow-hidden slider-dots-light"
            {...widgetsCarousels1A}>
                <HeroPackageCards/>
                <HeroPackageCards/>
                <HeroPackageCards/>
          </Slider>
        </Col>
      </Row>
    </>
  );
}
