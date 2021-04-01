import React from 'react';

import { Row, Col, CustomInput, Label, FormGroup, Button } from 'reactstrap';

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio
} from 'availity-reactstrap-validation';
export default function UpdateProfileForm() {

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
      <AvForm className="m-4">
        <Row>
          <Col md="12">
            {/* With AvField */}
            <AvField name="name" label="Full Name" type="text" value="Hozefa Jaorawala" />
            <AvField name="email" label="Email Address" type="email" value="hozefa24imp@gmail.com" />
            <AvField name="contact" label="Contact Number" type="tel" value="8452088328" />
            <div className="mb-3">
                <Label for="form-file-4">Update Profile Picture</Label>
                <CustomInput
                
                type="file"
                id="form-file-4"
                name="profilepicture"
                />{/*invalid*/}
            </div>
            <AvField name="dob" label="Date of Birth" type="date" value="8452088328" />
            <AvField name="address" label="Address" type="text" value="206 Chunbhatti" />
            <div className="divider m-3"/>
            <AvField name="password" label="Password" type="password" />
            <AvField name="confirmpassword" label="Confirm Password" type="password" />

            <FormGroup>
              <Button size="lg" className="mt-3" color="second">
                Update
              </Button>
            </FormGroup>
          </Col>
          
        </Row>
      </AvForm>
    </>
  );
}


{/*
<Col md="6">
            <AvField
              type="select"
              name="select"
              label="Option"
              helpMessage="Idk, this is an example. Deal with it!">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </AvField>

            <AvField
              type="select"
              name="select-multiple"
              label="Option"
              helpMessage="MULTIPLE!"
              multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </AvField>

            <FormGroup>
              <AvGroup check>
                <AvInput type="checkbox" name="checkbox" />
                <Label check for="checkbox">
                  {' '}
                  Check it out
                </Label>
              </AvGroup>

              <AvField
                type="checkbox"
                name="avFieldCheckbox"
                label="Check out this AvField checkbox"
                required
              />

              <AvInput
                tag={CustomInput}
                type="checkbox"
                name="customCheckbox"
                label="Check out this custom input checkbox"
                required
              />

              <AvField
                tag={CustomInput}
                type="checkbox"
                name="customCheckbox1"
                label="Check out this custom input checkbox from AvField"
                required
              />
            </FormGroup>

            <FormGroup>
              <Button size="lg" className="mt-3" color="primary">
                Click for Validate
              </Button>
            </FormGroup>
          </Col>
*/}