import React from 'react';

import { Row, Col, CustomInput, Label, Form, FormGroup, Button, Container } from 'reactstrap';

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
            <div className="mb-3">
                <Label for="form-file-4">Update Logo</Label>
                <CustomInput
                
                type="file"
                id="form-file-4"
                name="logo"
                />{/*invalid*/}
            </div>
            <div className="mb-3">
                <Label for="form-file-4">Update Cover Image</Label>
                <CustomInput
                
                type="file"
                id="form-file-4"
                name="coverimage"
                />{/*invalid*/}
            </div>
            <FormGroup>
                    <TextareaAutosize
                        className="form-control"
                        placeholder="Itinerary"
                        value=" 21 years ago, in 1993, Sanskruti was started by Ms Falguni Parekh a Math Graduate
                        and Mamta Shah a Law Graduate. Sharing a common interest for Travel and a strong
                        desire to do something different gave birth to Sanskruti Children's Club, an
                        amalgamation of our love for teaching young adults and our deeply rooted passion for
                        nature and adventure. Today it has metamorphosed into Sanskruti Vacations, with
                        strong founded pillars and mile stones of Sanskruti Travels and Sanskruti Holidays. We
                        have marched ahead to achieve our farfetched dreams. It gave us a platform to see the
                        world with a purpose. Looking back 25 Years , we get a sense of pride and intrigue, as
                        we have come long way accomplishing new milestones, and achieving new goals
                        pushing our threshold to explore something beyond."
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
