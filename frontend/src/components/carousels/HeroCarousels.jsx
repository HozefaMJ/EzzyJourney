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
        <Col xl="12">
          <Slider
            className="rounded-lg overflow-hidden mb-2 mb-lg-0 slider-dots-light"
            {...widgetsCarousels1A}>
            <div>
              <Card className="shadow-none rounded-0 overflow-hidden">
                <div className="card-img-wrapper rounded">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="img-wrapper-overlay p-1 p-xl-5 img-wrapper-overlay--visible rounded">
                    <div className="overlay-btn-wrapper card-body text-white text-center">
                      <h5 className="px-2 font-weight-bold display-4 mb-4">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h5>
                      <p className="font-size-lg text-white-50 mb-0">
                        This admin template is a complete frontend solution for
                        easy-building applications or presentation websites.
                        It&#39;s fully responsive and designed by professional
                        UI&#x2F;UX designers and developers.
                      </p>
                      <div className="mt-4">
                        <div className="avatar-icon-wrapper mx-auto mb-2">
                          <div className="avatar-icon shadow-sm-dark">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                        <div>Dalia Finney</div>
                      </div>
                    </div>
                    <div className="card-badges card-badges-top">
                      <Badge pill color="danger">
                        Development
                      </Badge>
                    </div>
                  </a>
                  <img
                    src={stock1}
                    className="card-overlay-image img-fit-container rounded"
                    alt="..."
                  />
                </div>
              </Card>
            </div>
            <div>
            <Card className="shadow-none rounded-0 overflow-hidden">
                <div className="card-img-wrapper rounded">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="img-wrapper-overlay p-1 p-xl-5 img-wrapper-overlay--visible rounded">
                    <div className="overlay-btn-wrapper card-body text-white text-center">
                      <h5 className="px-2 font-weight-bold display-4 mb-4">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h5>
                      <p className="font-size-lg text-white-50 mb-0">
                        This admin template is a complete frontend solution for
                        easy-building applications or presentation websites.
                        It&#39;s fully responsive and designed by professional
                        UI&#x2F;UX designers and developers.
                      </p>
                      <div className="mt-4">
                        <div className="avatar-icon-wrapper mx-auto mb-2">
                          <div className="avatar-icon shadow-sm-dark">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                        <div>Dalia Finney</div>
                      </div>
                    </div>
                    <div className="card-badges card-badges-top">
                      <Badge pill color="danger">
                        Development
                      </Badge>
                    </div>
                  </a>
                  <img
                    src={stock2}
                    className="card-overlay-image img-fit-container rounded"
                    alt="..."
                  />
                </div>
              </Card>
            </div>
          </Slider>
        </Col>
      </Row>
    </>
  );
}
