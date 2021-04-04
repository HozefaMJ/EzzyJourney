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

export default function PackageQueryForm({buttonColor}) {
  const [modal5, setModal5] = useState(false);

  const toggle5 = () => setModal5(!modal5);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button size="md" className="rounded shadow-second-sm" color={buttonColor} className="" onClick={toggle5}>
            <span className="btn-wrapper--label">Let's Book!</span>
            <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'bookmark']} />
            </span>
        </Button>
        <Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
          <div>
            <Card className="bg-secondary shadow-none border-0">
              <div className="card-header d-block bg-ezzy pt-4 pb-1">
                <div className="text-white text-center mb-1">
                  <h4>Package Query</h4>
                  <p>Please enter the required detail</p>
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
                      <Input placeholder="Message" type="text" />
                    </div>
                  </div>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'male']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Adults" type="number" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'child']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Children Between Age 6 - 12" type="number" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'baby']} />
                        </InputGroupText>
                      </div>
                      <Input placeholder="Children Below Age 6" type="number" />
                    </div>
                  </FormGroup>
                  <div className="text-center">
                    <Button color="ezzyColor" className="btn-pill mt-4">
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
    "message":"Admin wants to know?",
    "adult": 5,
    "childAbove6": 3,
    "childBelow6":2
*/