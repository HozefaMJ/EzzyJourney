import React from 'react';

import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';

import ImgCompPackage from "../components/Sliders/SliderPackage/ImgCompPackage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Nav, NavItem,Card,CardBody,CardTitle } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../assets/images/ezzy_logo.png';
import QueryModalForm from '../components/forms/QueryModalForm';
import RightIconLink from 'components/Buttons/RightIconLink';



export default function ContactUs() {
  return (
    <>
      <Header1/>
      <Container>
       <div className="mt-3">
           <RightIconLink Name="Update Contacts" link="/UpdateContactus" icon="plus"/>
       </div>
            <div>
                <div>
                    <Card className="card-box mb-5 mt-3">
                        <CardBody>
                        <CardTitle className="font-weight-bold font-size-xl mb-4 text-center">
                            Contact US:
                        </CardTitle>
                        <div className="divider"/>
                        <Row>
                            <Col md="5" xl="6">
                            <div className="my-4 ">
                            <h6 className="text-dark font-weight-bold mb-3 text-uppercase pl-2">
                                Email:
                            </h6>
                            <p className="text-dark font-weight-bold ml-4">info@ezzyjourneys.com</p>
                        </div>
                        <div className="my-4 ">
                            <h6 className="text-dark font-weight-bold mb-3 text-uppercase pl-2">
                                Phone:
                            </h6>
                            <p className="text-dark font-weight-bold ml-4">+91-9699143309</p>
                        </div>
                        <div className="my-4 ">
                            <h6 className="text-dark font-weight-bold mb-3 text-uppercase pl-2">
                                Address:
                            </h6>
                            <p className="text-dark font-weight-bold ml-4">Jayshree 501</p>
                        </div>
                        <div className="my-4 my-xl-0">
                        <h6 className="text-dark font-weight-bold mb-3 text-uppercase pl-2">
                            Follow Us:
                        </h6>
                        <Nav className="nav-transparent justify-content-left">
                            <NavItem>
                            <NavLinkStrap
                                className="text-facebook"
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
                                className="text-twitter"
                                target='_blank'
                                href="/https://www.twitter.com">
                                <FontAwesomeIcon
                                icon={['fab', 'twitter']}
                                className="font-size-lg"
                                />
                            </NavLinkStrap>
                            </NavItem>
                            {/*
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
                            */}
                            <NavItem>
                            <NavLinkStrap
                                className="text-instagram"
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
                                className="text-success"
                                target='_blank'
                                href="https://api.whatsapp.com/send?phone=919137847581">
                                <FontAwesomeIcon
                                icon={['fab', 'whatsapp']}
                                className="font-size-lg"
                                />
                            </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                            <NavLinkStrap
                                className="text-first"
                                target='_blank'
                                href="http://linkedin.com/">
                                <FontAwesomeIcon
                                icon={['fab', 'linkedin']}
                                className="font-size-lg"
                                />
                            </NavLinkStrap>
                            </NavItem>
                        </Nav>
                        </div>
                            </Col>
                            <Col md="5" xl="6">
                                <div className="mt-4">
                                    <QueryModalForm buttonColor="ezzyColor" buttonName="Send A Query!"/>
                                    <img style={{width:'100%'}} src={projectLogo} alt=""/>
                                </div>
                            </Col>
                        </Row>
                        </CardBody>
                    </Card>
                </div>
                </div>
          
      </Container>
      <Footer1/>
    </>
  );
}

