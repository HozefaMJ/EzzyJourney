import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Container,
  Badge,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import particles2 from '../assets/images/hero-bg/particles-1.svg';
import illustration1 from '../assets/images/illustrations/pack1/analysis.svg';

//import MarketingHeaders6 from '../../MarketingHeaders/MarketingHeaders6';

//import MarketingHeaders6 from '../example-components/MarketingHeaders/MarketingHeaders6';

import Header from "../components/Header";
import HeroCarousels from "../components/carousels/HeroCarousels";
import Footer from 'components/Footer';
import PackageCards from 'components/Cards/PackageCard';

export default function HomeScreen() {
  return (
    <>
      <Header />
       {/**/} 

          {/*
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-7"
            style={{ backgroundImage: 'url(' + particles2 + ')' }}
          />
          */}
          <div className="bg-composed-wrapper--content">     
                <HeroCarousels/>
          </div>
        
        <div className="bg-composed-wrapper--content">
          <PackageCards/>
        </div>
        <Footer/>
    </>
  );
}

{/*
          <div className="bg-composed-wrapper--content">
            <div className="py-3 py-xl-5">
              <Container className="text-black py-5">
                <Row>
                  <Col xl="6" className="d-flex align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <Badge
                          pill
                          color="success"
                          className="px-4 h-auto py-1">
                          New version
                        </Badge>
                        <span
                          className="text-black-50 ml-3"
                          id="PlaceholderTooltip1">
                          <FontAwesomeIcon icon={['far', 'question-circle']} />
                        </span>
                        <UncontrolledTooltip
                          placement="right"
                          target="PlaceholderTooltip1">
                          More info placeholder!
                        </UncontrolledTooltip>
                      </div>
                      <div className="text-black mt-3">
                        <h1 className="display-2 mb-3 font-weight-bold">
                          Bamburgh React Admin Dashboard with Reactstrap PRO
                        </h1>
                        <p className="font-size-lg text-black-50">
                          Bamburgh is a <b>Free Bootstrap 4 UI Kit</b> that
                          enhances the standard Bootstrap styles and components.
                        </p>
                        <p className="text-black-50">
                          In addition, it contains extra customized widgets,
                          pages and multiple landing pages.
                        </p>
                        <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25" />
                        <div>
                          <Button
                            tag="a"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            size="lg"
                            color="second"
                            className="d-block d-sm-inline-block">
                            <span className="btn-wrapper--label">
                              Browse gallery
                            </span>
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </span>
                          </Button>
                          <Button
                            tag="a"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            size="lg"
                            outline
                            color="second"
                            className="d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3">
                            <span>Plans & pricing</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    className="px-0 d-none d-xl-flex align-items-center">
                    <img
                      src={illustration1}
                      className="w-100 mx-auto d-block img-fluid"
                      alt="..."
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
*/}