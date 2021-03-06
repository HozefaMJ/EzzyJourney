import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import UpdateProfileForm from 'components/forms/UpdateProfileForm';
import UserQueryTable from 'components/Tables/UserQueryTable';
import WishlistTable from 'components/Tables/WishlistTable';

export default function UserProfileTab({history}) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="shadow-xxl p-3 mt-5 mb-5">
            <div className="nav-line-alt nav-tabs-second">
              <Nav className="nav-line">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="font-size-md font-weight-bold">Profile</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="font-size-md font-weight-bold">
                      My Queries
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="font-size-md font-weight-bold">
                      My Wishlist
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                   <UpdateProfileForm history={history}/> 
              </TabPane>
              <TabPane tabId="2">
                <UserQueryTable/>
              </TabPane>
              <TabPane tabId="3">
                <WishlistTable/>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </>
  );
}
