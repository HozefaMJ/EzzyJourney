import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';
import SliderEzzy from 'components/Sliders/SliderEzzy';

import packages from "../packages";

import stock3 from '../assets/images/hero-bg/hero-5.jpg';
import stock5 from '../assets/images/hero-bg/hero-4.jpg';

export default function HomeScreen1() {
  return (
    <>
      <Header1/>
      {/*<HeroCarousels/>*/}
      <SliderEzzy/>
        <Container>
          <h2 className="mt-5">Latest Packages:</h2>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard packageImage={stock3} title="Mystical Ladakh" isFood={true} isHotel={true} isFlight={false} isTransportation={false} isVisa={false} rating={3}/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <PackageCard packageImage={stock5} title="Amazing Amazon" isFood={true} isHotel={true} isFlight={false} isTransportation={false} isVisa={false} rating={3}/>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <AllPackagesPagination/>
            </Col>
          </Row>
        </Container>
      <Footer1/>
    </>
  );
}