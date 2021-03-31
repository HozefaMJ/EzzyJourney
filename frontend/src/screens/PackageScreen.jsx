import React from 'react';

import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import HeroPackageCarousels from "../components/carousels/HeroPackageCarousels";

export default function Package() {
  return (
    <>
      <Header1/>
      <HeroPackageCarousels/>
      <Container>
        <div>
          <h1>
            Ladakh Dreams
          </h1>
          <p>uidhuids sahuidhd dhuidehwed d dhuidehwed uidhuids sahuidhd dhuidehwed d dhuidehwed uidhuids sahuidhd dhuidehwed d dhuidehwed uidhuids sahuidhd dhuidehwed d dhuidehwed</p>
        </div>
      </Container>
      <Footer1/>
    </>
  );
}

