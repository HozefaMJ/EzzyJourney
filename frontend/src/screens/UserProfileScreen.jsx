import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import particles2 from '../assets/images/hero-bg/particles-2.svg';
import hero1 from '../assets/images/hero-bg/hero-space-3.jpg';

import Header from "../components/Header";
import Footer from "../components/Footer";

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import HeroCarousels from 'components/carousels/HeroCarousels';
import StickyWhatsappButton from 'components/Buttons/StickyWhatsapp';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';
import UserProfileTab from 'components/Tabs/UserProfileTab';
import RightIconLink from 'components/Buttons/RightIconLink';

export default function HomeScreen1({history}) {
  return (
    <>
      <Header1/>
        <Container>
            <RightIconLink Name="Admin Panel" link="/AdminPanel" icon="user-cog"/>
            <UserProfileTab history={history}/>
        </Container>
      <Footer1/>
    </>
  );
}