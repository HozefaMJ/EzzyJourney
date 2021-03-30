import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Container,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

import hero1 from '../assets/images/hero-bg/hero-leh.jpg';

import Header from "../components/Header";
//import MarketingHeaders5 from '../../MarketingHeaders/MarketingHeaders5';

export default function Package() {
  return (
    <>
    <Header/>
    <div className="divider" />
    <div>
        <img src={hero1} alt="" srcset="" style={{width:'100%',height:'60vh'}}/>
    </div>
    </>
  );
}


{/*
        <div
        className="shape-container-top-1 z-below"
        style={{ marginTop: '-320px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
            fill="var(--dark)"
            fillOpacity="1"
            d="M0,224L288,192L576,224L864,256L1152,128L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
        </svg>
        </div>
*/}