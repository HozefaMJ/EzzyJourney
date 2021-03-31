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

export default function StickyWhatsappButton() {

  return (
    <>
        <Button size="xl" color="success" className="btn-pill shadow-success-sm rounded" className="m-2" 
        style={{bottom:"20%",right:"20%",position:"fixed",zIndex:2000}}>
            <a href="https://api.whatsapp.com/send?phone=918452088328">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} width="45px"/>
            </a>
        </Button>
    </>
  );
}