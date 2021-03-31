import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import particles2 from '../assets/images/hero-bg/particles-2.svg';
import hero1 from '../assets/images/hero-bg/hero-space-3.jpg';

import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import HeroCarousels from 'components/carousels/HeroCarousels';
import StickyWhatsappButton from 'components/Buttons/StickyWhatsapp';

export default function HomeScreen1() {
  return (
    <>
      <Header1/>
      <HeroCarousels/>
        <Container>
          <h2 className="mt-5">Latest Packages:</h2>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard destination="Mystical Ladakh"/>
            </Col>
          </Row>
        </Container>
      <Footer1/>
    </>
  );
}