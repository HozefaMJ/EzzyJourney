import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../assets/images/react.svg';
import {Link} from "react-router-dom"
import {
  Bell,
  Settings,
  Grid,
  Users,
  Briefcase,
  LifeBuoy
} from 'react-feather';

import hero5 from '../assets/images/hero-bg/hero-5.jpg';
import particles3 from '../assets/images/hero-bg/particles-3.svg';

import SearchBarNav from "components/SearchBarNav";

export default function Header1() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="hero-wrapper overflow-hidden bg-composed-wrapper bg-second mb-5">
        <div className="hero-wrapper--content">
          <div className="bg-composed-wrapper--bg bg-second opacity-4" />
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm"
            style={{ backgroundImage: 'url(' + hero5 + ')' }}
          />
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <div className="header-nav-wrapper bg-white px-4 shadow-lg header-nav-wrapper-lg navbar-light">
              <div className="app-nav-logo">
                <a
                  href="/DashboardMonitoring"
                  title="Bamburgh React Admin Dashboard with Reactstrap PRO"
                  className="app-nav-logo app-nav-logo--dark">
                  <div className="app-nav-logo--icon rounded-sm bg-white border-0">
                    <img
                      alt="Bamburgh React Admin Dashboard with Reactstrap PRO"
                      src={projectLogo}
                    />
                  </div>
                  <div className="text-second ml-3 font-size-lg">
                    <b>Ezzy Journeys</b>
                  </div>
                </a>
              </div>
              <div className="header-nav-menu d-none d-lg-block">
                <ul className="d-flex nav nav-neutral-first justify-content-center">
                  <li>
                    <a
                      className="font-size-lg text-second rounded"
                      href="/AllPackages">
                      Packages
                      <span className="opacity-5 dropdown-arrow">
                        <FontAwesomeIcon icon={['fas', 'angle-right']} />
                      </span>
                    </a>
                  </li>
                  <li>
                      <SearchBarNav/>
                  </li>
                </ul>
              </div>
              <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
                <span className="d-none d-lg-block">
                  <Button
                    tag="a"
                    href="/Profile"
                    className="rounded-lg m-2"
                    color="first">
                    <span className="btn-wrapper--label">Hozefa J</span>
                    <span className="btn-wrapper-icon ml-1">
                        <FontAwesomeIcon icon={['far', 'user-circle']} />
                    </span>
                  </Button>
                </span>
                <span className="d-block d-lg-none">
                  <button
                    onClick={toggle}
                    className={clsx(
                      'navbar-toggler hamburger hamburger--elastic',
                      { 'is-active': collapse }
                    )}>
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </span>
              </div>
              <div className="d-flex d-lg-none">
                <Collapse
                  isOpen={collapse}
                  className="nav-collapsed-wrapper navbar-collapse">
                  <div className="nav-inner-wrapper">
                    <Button
                      onClick={toggle}
                      color="danger"
                      className="btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'times']} />
                      </span>
                    </Button>

                    <Nav
                      pills
                      className="nav-neutral-primary nav-lg flex-column p-3">
                      <NavItem>
                        <Link
                          to="/AllPackages"
                          className="px-4 d-flex align-items-center"
                          onClick={(e) => e.preventDefault()}>
                          <span>All Packages</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </Link>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <SearchBarNav/>
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Collapse>
                <div
                  className={clsx('collapse-page-trigger', {
                    'is-active': collapse
                  })}
                  onClick={toggle}
                />
              </div>
            </div>
            <div className="py-3 text-center text-white py-xl-5">
              <div className="py-2" />
              <Container className="py-3 py-xl-5">
                <Row>
                  <Col lg="10" xl="8" className="mx-auto">
                    <div className="font-size-sm d-inline-flex bg-white-10 px-4 rounded-lg text-white py-2 text-uppercase">
                      Examples
                    </div>
                    <h3 className="display-3 font-weight-bold my-4 text-uppercase">
                      How can we help?
                    </h3>
                    <p className="text-white-50 line-height-2 font-size-xxl px-3 px-xl-5 mb-0">
                      Browse through the live previews to see just how powerful
                      this admin template really is!
                    </p>
                  </Col>
                </Row>
              </Container>
              <div className="py-5" />
            </div>
            <div className="shape-container-top-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
