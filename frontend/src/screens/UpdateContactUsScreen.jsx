import React from 'react';

import { Row, Col, CustomInput, Label, Form,Input, FormGroup, Button, Container } from 'reactstrap';

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio
} from 'availity-reactstrap-validation';


import TextareaAutosize from 'react-autosize-textarea';


import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';
export default function UpdateAboutUs() {

    /*
    name
    email
    profilepicture
    contact
    address
    dob
    
    */

  return (
    <>
    <Header1/>
    <Container>
        <h3 className="font-weight-bold m-5">
            Update About Us
        </h3>
    <AvForm className="m-4">
        <Row>
          <Col md="12">
            {/* With AvField */}
            <Form className="mt-4">
            <FormGroup>
                <Label htmlFor="exampleName">Email ID</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleName"
                    placeholder="Email"
                    value="info@ezzyjourneys.com"
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="exampleName">Contact Number</Label>
                <Input
                    type="tel"
                    name="Contact Number"
                    id="exampleName"
                    placeholder="Email"
                    value="9619143309"
                />
            </FormGroup>
            <FormGroup>
                    <TextareaAutosize
                        className="form-control"
                        placeholder="Address"
                        value="206, 2b, New Mhada Colony, Near Relaince Market, Swadeshi Mill Compound, Chunabhatti East"
                        />
                </FormGroup>
            <FormGroup>
              <Button size="lg" className="mt-3" color="ezzyColor">
                Update
              </Button>
            </FormGroup>
            </Form>
          </Col>
          
        </Row>
      </AvForm>
    </Container>
    <Footer1/>
    </>
  );
}
