import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../assets/images/ezzy_logo.png';
import QueryModalForm from './forms/QueryModalForm';

export default function Footer1() {
  return (
    <>
      <div className="bg-vicious-stance font-size-sm">
        <Container className="py-5">
          <div className="app-nav-logo d-flex w-100 pb-5 justify-content-center">
            <a
              href="/Home"
              title="Ezzy Journeys"
              className="d-inline-flex">
              <div className="app-nav-logo--icon rounded-circle">
                <img
                  alt="Ezzy Journeys"
                  src={projectLogo}
                />
              </div>
              <div className="text-white ml-2 mt-2">
                <b>Ezzy Journeys</b>
              </div>
            </a>
          </div>
          <div className="pt-4">
            <Row className="text-center no-gutters w-100">
              <Col md="4" xl="3">
                <div className="my-4 my-xl-0">
                  <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                    Services
                  </h6>
                  <Nav className="nav-transparent flex-column justify-content-center">
                    <NavItem>
                      <NavLinkStrap
                        href="/AllPackages"
                        className="px-0 py-1 d-block text-white-50">
                        Packages
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="/Aboutus"
                        className="px-0 py-1 d-block text-white-50">
                        About Us
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="/Contactus"
                        className="px-0 py-1 d-block text-white-50">
                        Contact us
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="4" xl="3">
                <div className="my-4 my-xl-0">
                  <h6 className="text-white font-weight-bold mb-3 text-uppercase pl-2">
                    Social Connections
                  </h6>
                  <p className="text-white-50">
                    Follow Us At!
                  </p>
                  <Nav className="nav-transparent justify-content-center">
                    <NavItem>
                      <NavLinkStrap
                        className="text-white-50"
                        target='_blank'
                        href="https://www.facebook.com">
                        <FontAwesomeIcon
                          icon={['fab', 'facebook']}
                          className="font-size-lg"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        className="text-white-50"
                        target='_blank'
                        href="/https://www.twitter.com">
                        <FontAwesomeIcon
                          icon={['fab', 'twitter']}
                          className="font-size-lg"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        className="text-white-50"
                        target='_blank'
                        href="mailto:hozefa24imp@gmail.com?subject=I came here from Ezzy Jounrneys">
                        <FontAwesomeIcon
                          icon={['fab', 'google']}
                          className="font-size-lg"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        className="text-white-50"
                        target='_blank'
                        href="https://www.instagram.com/ezzyjourneys/">
                        <FontAwesomeIcon
                          icon={['fab', 'instagram']}
                          className="font-size-lg"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        className="text-white-50"
                        target='_blank'
                        href="https://api.whatsapp.com/send?phone=918452088328">
                        <FontAwesomeIcon
                          icon={['fab', 'whatsapp']}
                          className="font-size-lg"
                        />
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="4" xl="3">
                <QueryModalForm buttonColor="info"/>
              </Col>
            </Row>
            <div className="divider mb-4 mt-5 bg-white opacity-2" />
            <div className="py-3 d-block d-lg-flex font-size-xs justify-content-between">
              <div className="text-center d-block mb-3 mb-md-0 text-white">
              This Website is Powered by <a href="" className="text-white">Unknown</a>
              </div>
              <Nav className="nav-transparent justify-content-center">
                <NavItem>
                  <NavLinkStrap
                    className="text-white-50"
                    href="/Privacy">
                    Privacy Policy
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className="text-white-50"
                    href="/TermsAndServices">
                    Terms of Service
                  </NavLinkStrap>
                </NavItem>
              </Nav>
              <Nav className="nav-transparent justify-content-center">
                <NavItem>
                  <NavLinkStrap
                    className="text-white-50"
                    href="/Profile">
                    My Account
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
