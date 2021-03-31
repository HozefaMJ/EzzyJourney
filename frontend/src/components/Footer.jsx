import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import {Link} from "react-router-dom";
import QueryModalForm from './forms/QueryModalForm';

export default function Footer() {
  return (
    <>
      <div className="bg-neutral-second m-4 pb-5 pt-0 pt-md-5 rounded">
        <Container className="pt-0 pt-xl-5">
          <Row>
            <Col xl="7" className="d-flex align-items-center">
              <div className="w-100">
                <Row className="d-none d-md-flex mt-3">
                  <Col md="4">
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Services
                      </h6>
                      <Nav className="nav-transparent flex-column">
                        <NavItem>
                          <NavLinkStrap
                            href="/AllPackages"
                            className="px-0 py-1 text-black-50">
                            Packages
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="/AboutUs"
                            className="px-0 py-1 text-black-50">
                            About us
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="/ContactUs"
                            className="px-0 py-1 text-black-50">
                            Contact us
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col md='4'>
                            <div className="pl-0 pl-lg-3">
                              <h6 className="text-black font-weight-bold mb-3">
                                Address
                              </h6>
                              <div>
                                <p className="text-black-50">
                                  504 Jayshree Apt, Syedna Mohammad Burhanuddin Marg, Mumbra, Thane-612.
                                </p>
                              </div>
                            </div>
                  </Col>
                  <Col md='4'>
                            <div className="pl-0 pl-lg-3">
                              <h6 className="text-black font-weight-bold mb-3">
                                Contact
                              </h6>
                              <div>
                                <p className="text-black-50">
                                  +919699530451
                                  +919137847541
                                </p>
                                
                              </div>
                            </div>
                    </Col>
                </Row>
              </div>
            </Col>
            <Col xl="5" className="d-flex align-items-center">
              <QueryModalForm buttonColor="second"/>
            </Col>
          </Row>
          <div>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto mb-4 mt-5 w-25" />
            <ul className="d-flex justify-content-around align-content-center">
              <a
                className="text-facebook hover-scale-sm"
                href="https://www.facebook.com"
                target='_blank'>
                <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-lg"
                  />
              </a>
              <a
                className="text-twitter hover-scale-sm"
                href="https://www.twitter.com"
                target='_blank'>
                <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
              </a>
              <a
                className="text-instagram hover-scale-sm"
                href="https://www.instagram.com/ezzyjourneys/"
                target='_blank'>
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-lg"
                  />
              </a>
              <a
                className="text-google hover-scale-sm"
                href="mailto:hozefa24imp@gmail.com?subject=I came here from Saucery">
                <FontAwesomeIcon
                    icon={['fab', 'google']}
                    className="font-size-lg"
                  />
              </a>
              <a 
                className="text-success hover-scale-sm"
                href="https://api.whatsapp.com/send?phone=918452088328"
                target='_blank'>
                <FontAwesomeIcon
                    icon={['fab', 'whatsapp']}
                    className="font-size-lg"
                  />
              </a>
            </ul>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25" />
            {/*
            <div className="text-center d-block text-black-50">
              Copyright &copy; {new Date().getFullYear()} - Ezzy Journeys
            </div>
            */}

            <div className="text-center d-block text-black-50">
              This Website is Powered by <a href="">Unknown</a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

