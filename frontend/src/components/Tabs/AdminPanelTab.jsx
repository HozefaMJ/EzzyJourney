import React, { useState } from 'react';
import {useSelector} from "react-redux";
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import UpdateProfileForm from 'components/forms/UpdateProfileForm';
import UserQueryTable from 'components/Tables/UserQueryTable';
import EmployeesAdminPanelTable from 'components/Tables/EmployeesAdminPanelTable';
import PackagesAdminPanelTable from 'components/Tables/PackagesAdminPanelTable';
import QueriesAdminPanelTable from 'components/Tables/QueriesAdminPanelTable';
import UserAdminPanelTable from 'components/Tables/UserAdminPanelTable';

export default function AdminPanelTab({history}) {
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
                    <span className="font-size-md font-weight-bold">All Users</span>
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
                      All Queries
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
                      All Packages
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '4' })}
                    onClick={() => {
                      toggle('4');
                    }}>
                    <span className="font-size-md font-weight-bold">
                      All Employees
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                   <UserAdminPanelTable history={history}/> 
              </TabPane>
              <TabPane tabId="2">
                <QueriesAdminPanelTable/>
              </TabPane>
              <TabPane tabId="3">
                <PackagesAdminPanelTable/>
              </TabPane>
              <TabPane tabId="4">
                  <EmployeesAdminPanelTable/>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </>
  );
}
