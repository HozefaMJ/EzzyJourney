import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import particles2 from '../assets/images/hero-bg/particles-2.svg';
import hero1 from '../assets/images/hero-bg/hero-space-3.jpg';

import MarketingHeaders1 from '../example-components/MarketingHeaders/MarketingHeaders1';
import Header from "../components/Header";
import Footer from "../components/Footer";

import PackageCards from "components/Cards/PackageCard";
import HeroCarousels from 'components/carousels/HeroCarousels';

export default function HomeScreen1() {
  return (
    <>
      <Header/>
      <div className="divider"/>
      <div className="hero-wrapper bg-composed-wrapper">
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
{
  /*
            <div className="bg-composed-wrapper--bg bg-danger opacity-3" />
          <div className="bg-composed-wrapper--bg bg-primary opacity-7" />
  */
}
          <div className="bg-composed-wrapper--bg bg-royal
 opacity-7" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over text-white text-center py-5">
              <Col md="11" lg="10" xl="8" className="mx-auto py-5">
                <h2 className="display-3 font-weight-bold">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h2>
                <p className="font-size-xl py-3 text-white-50">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
                <div className="py-4 mb-4">
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                    className="btn-pill shadow-second-sm"
                    color="first">
                    <span className="btn-wrapper--label">Browse gallery</span>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </span>
                  </Button>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                    color="link"
                    className="bg-white-10 text-white btn-pill ml-3">
                    <span>Documentation</span>
                  </Button>
                </div>
                <div className="mt-5 mb-5 ">
                  <HeroCarousels/>
                </div>
              </Col>
            </Container>
            <div className="z-below" style={{ marginTop: '-350px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,32L120,58.7C240,85,480,139,720,138.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-composed-wrapper--content">
          <PackageCards/>
        </div>
        <Footer/>
    </>
  );
}

{/*
<Row className="no-gutters">
                    <Col md="6" lg="4" className="p-3">
                      <div className="divider-v bg-white-10 divider-v-lg" />

                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'envelope']}
                            className="display-3 text-info"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">$9,693</b>
                          <span className="text-white-50 font-size-lg d-block">
                            revenue
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6" lg="4" className="p-3">
                      <div className="divider-v bg-white-10 divider-v-lg" />

                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'lightbulb']}
                            className="display-3 text-success"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">2,345</b>
                          <span className="text-white-50 font-size-lg d-block">
                            users
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6" lg="4" className="d-none d-lg-block p-3">
                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'keyboard']}
                            className="display-3 text-danger"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">1,024</b>
                          <span className="text-white-50 font-size-lg d-block">
                            orders
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
*/}