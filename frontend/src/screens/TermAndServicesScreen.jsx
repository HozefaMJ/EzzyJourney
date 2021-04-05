import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, TabContent, TabPane, Nav, NavItem,Container } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import ContentBox from "../components/TextBoxes/ContentBox";


import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

export default function TermsAndPolicy() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
    <Header1/>
      <Container>
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
                    <span className="font-size-md font-weight-bold">Terms & Conditions</span>
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
                      Privacy Policy
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                   <ContentBox content="The Website Owner, including subsidiaries and affiliates (“Website” or “Website Owner” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.



Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.



The term 'Sanskruti Vacations' or 'us' or 'we' refers to the owner of the website whose registered office is __________________. The term 'you' refers to the user or viewer of our website.



The use of this website is subject to the following terms of use:



The content of the pages of this website is for your general information and use only. It is subject to change without notice.



Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.

"/> 
              </TabPane>
              <TabPane tabId="2">
                <ContentBox content="We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.



Sanskruti Vacations may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.



 



What We Collect



We may collect the following information:



name and job title



contact information including email address



demographic information such as postcode, preferences and interests



other information relevant to customer surveys and/or offers

"/>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
      </Container>
    <Footer1/>
    </>
  );
}
