import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  InputGroupText,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import {Link} from "react-router-dom";

export default function QueryModalForm({buttonColor}) {
  const [modal5, setModal5] = useState(false);

  const toggle5 = () => setModal5(!modal5);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button size="lg" className="btn-pill shadow-second-sm" color={buttonColor} className="m-2" onClick={toggle5}>
            <span className="btn-wrapper--label">Your Dream Vacation Just a Query Away!</span>
            <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'map-marked-alt']} />
            </span>
        </Button>
        <Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
          <div>
            <Card className="bg-secondary shadow-none border-0">
              <div className="card-header d-block bg-white pt-4 pb-5">
                <div className="text-dark text-center mb-3">
                  <h4>Register Today!</h4>
                  <p>And get upto 10% off on your first Vacation</p>
                </div>
                <div className="text-center">
                  <Link to="/Register">
                    <Button color="twitter" className="ml-2 hover-scale-sm">
                    <span className="btn-wrapper--label">SignUp</span>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="card-body px-lg-5 py-lg-5">
                <div>
                  <div className="form-group mb-3">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'signature']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Name" type="text" />
                    </div>
                  </div>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Email" type="email" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'phone']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Contact" type="tel" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Destination" type="text" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="d-flex space-between">
                        <div className=" d-flex flex-column input-group input-group-alternative">
                            <span>From</span>
                            <div className="d-flex">
                                <div className="input-group-prepend">
                                    <InputGroupText>
                                    <FontAwesomeIcon icon={['fas', 'calendar']} />
                                    </InputGroupText>
                                </div>
                                <Input placeholder="From" type="date" />
                            </div>
                        </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="d-flex space-between">
                        <div className="d-flex flex-column input-group input-group-alternative">
                            <span>To</span>
                            <div className="d-flex">
                                <div className="input-group-prepend">
                                    <InputGroupText>
                                    <FontAwesomeIcon icon={['fas', 'calendar']} />
                                    </InputGroupText>
                                </div>
                                <Input placeholder="To" type="date" />
                            </div>
                        </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'users']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="People" type="number" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'utensils']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Food Preferance" type="text" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'comment']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Message" type="text" />
                    </div>
                  </FormGroup>
                  <div className="text-center">
                    <Button color="second" className="mt-4">
                      Let's Go!!!
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Modal>
      </div>
    </>
  );
}


/*
1.  Name 
2, Email
3, Contact
4. Destination
5. Date From To
6. Peoples
7. Food Preference
8. Message 
*/