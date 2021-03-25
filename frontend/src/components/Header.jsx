import React, { useState } from 'react';

import clsx from 'clsx';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Collapse, Nav, NavItem, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../assets/images/react.svg';

import {
  Bell,
  Settings,
  Grid,
  Users,
  Briefcase,
  LifeBuoy
} from 'react-feather';
import SearchBarNav from './SearchBarNav';

export default function Header() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className=" header-nav-wrapper header-nav-wrapper-lg rounded navbar-dark m-3">
        <div className="app-nav-logo ml-4">
          <Link 
            to="/DashboardMonitoring"
            className="app-nav-logo app-nav-logo--dark"
          >
            <div className="app-nav-logo--icon rounded-sm bg-secondary border-0">
              <img
                alt="Ezzy Journeys"
                src={projectLogo}
              />
            </div>
            <div className="text-second ml-3 font-size-lg">
              <b>Ezzy Jouneys</b>
            </div>
          </Link>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <ul className="d-flex nav nav-neutral-first justify-content-center">
            {/*Comment Begins*/}
            <li>
              <a
                className="font-size-lg text-second font-weight-bold rounded-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Packages
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown">
                <div className="shadow-xxl bg-white rounded">
                  <Nav
                    pills
                    className="nav-neutral-primary nav-lg flex-column p-3">
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex align-items-center">
                        <span>Courses Heelo</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex align-items-center">
                        <span>Listings</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex align-items-center">
                        <span>Workplace</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex align-items-center">
                        <span>Software</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex align-items-center">
                        <span>Exchanges</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex align-items-center">
                        <span>Services</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </li>
            <li className="font-size-lg text-second font-weight-bold rounded-sm">
              <SearchBarNav/>
            </li>            
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Button outline className="btn-pill m-2" color="second">
                <span className="btn-wrapper--label">Hozefa Jaorawala</span>
                <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
            </Button>
          </span>
         {/**/}
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': collapse
              })}>
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

              <Nav pills className="nav-neutral-primary nav-lg flex-column p-3">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4 d-flex align-items-center">
                    <SearchBarNav/>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4 d-flex align-items-center">
                    <span>Hozefa Jaorawala</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-down']}
                      className="opacity-6 ml-auto"
                    />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
        </div>
        {/**/}
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
