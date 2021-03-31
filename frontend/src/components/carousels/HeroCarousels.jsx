import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import Slider from 'react-slick';
import stock1 from '../../assets/images/stock-photos/stock-4.jpg';
import stock2 from '../../assets/images/stock-photos/stock-5.jpg';
import stock3 from '../../assets/images/stock-photos/stock-2.jpg';

import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';


import LargeRating from "../Ratings/LargeRating";
import CarouselCards from 'components/Cards/CarouselCards';

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

export default function HeroCarousels() {
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
            <CarouselCards packageName="Ladakh Dreams" packageDescription="A dream vacation for dreams because dreams are important because we see dreams"/>
            <CarouselCards packageName="London Dreams" packageDescription="A dream vacation for dreams because dreams are important because we see dreams"/>
            <CarouselCards packageName="Paris Dreams" packageDescription="A dream vacation for dreams because dreams are important because we see dreams"/>
          </Slider>
        </Col>
      </Row>
    </>
  );
}
