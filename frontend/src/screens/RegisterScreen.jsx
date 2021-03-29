import React from 'react';

import { Row, Col, Container, FormGroup, Input, Button } from 'reactstrap';

import illustration1 from '../assets/images/illustrations/pack1/handshake.svg';

export default function RegisterScreen() {
  return (
    <>
      <div className="app-wrapper bg-white min-vh-100">
        <div className="app-main min-vh-90">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-3">
                  <Container>
                    <Row>
                      <Col lg="6" className="d-flex align-items-center">
                        <div className="divider-v d-none d-lg-block divider-v-md" />
                        <div className="w-100 pr-0 pr-lg-5">
                          <div className="text-center mb-4">
                            <h1 className="display-4 mb-1 font-weight-bold">
                              Create your account
                            </h1>
                            <p className="font-size-lg mb-0 text-black-50">
                              Start benefiting from our tools right away
                            </p>
                          </div>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Full Name
                            </label>
                            <Input
                              placeholder="Enter your full name"
                              type="text"
                            />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Email address
                            </label>
                            <Input
                              placeholder="Enter your email address"
                              type="email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Contact
                            </label>
                            <Input
                              placeholder="Enter your contact number"
                              type="tel"
                            />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Date of Birth
                            </label>
                            <Input
                              placeholder="Enter your date of birth"
                              type="date"
                            />
                          </FormGroup>
                          <FormGroup>
                            <div className="d-flex justify-content-between mg-b-5">
                              <label className="font-weight-bold">
                                Password
                              </label>
                            </div>
                            <Input
                              placeholder="Enter your password"
                              type="password"
                            />
                          </FormGroup>
                          <FormGroup>
                            <div className="d-flex justify-content-between mg-b-5">
                              <label className="font-weight-bold">
                                Confirm Password
                              </label>
                            </div>
                            <Input
                              placeholder="Enter your confirm password"
                              type="password"
                            />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Full Address
                            </label>
                            <Input
                              placeholder="Enter your Postal Address"
                              type="text"
                            />
                          </FormGroup>
                          <div className="form-group mb-3">
                            By clicking the <strong>Create account</strong>{' '}
                            button below you agree to our terms of service and
                            privacy statement.
                          </div>
                          <div className="text-center mb-5">
                            <Button
                              color="primary"
                              className="text-uppercase font-weight-bold font-size-sm my-3">
                              Create account
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="d-none d-lg-flex align-items-center">
                        <img
                          alt="ezzy logo illustration"
                          className="w-100 mx-auto d-block img-fluid"
                          src={illustration1}
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
