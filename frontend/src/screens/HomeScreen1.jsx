import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import particles2 from '../assets/images/hero-bg/particles-2.svg';
import hero1 from '../assets/images/hero-bg/hero-space-3.jpg';

import MarketingHeaders1 from '../example-components/MarketingHeaders/MarketingHeaders1';
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

import PackageCards from "components/Cards/PackageCard";
import HeroCarousels from 'components/carousels/HeroCarousels';
import QueryModalForm from "components/forms/QueryModalForm";

export default function HomeScreen1() {
  return (
    <>
      <Header1/>
      <Footer/>
    </>
  );
}