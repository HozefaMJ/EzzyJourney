import React from 'react';

import { Row, Col, Container, Button } from 'reactstrap';

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function AllPackageScreen() {
  return (
    <>
      <Header1/>
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