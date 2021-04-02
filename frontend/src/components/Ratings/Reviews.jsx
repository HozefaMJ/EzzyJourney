import React from 'react';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

import LargeRating from "./LargeRating";
import AllReviews from "./AllReviews";

export default function Reviews() {
  return (
    <>
    <Row>
        <Col>
            <AllReviews Username="Husain" rating={3} review="Great Tour"/>
        </Col>
    </Row>
      <Row>
        <Col md="12">
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                Add A Review
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label htmlFor="exampleText">Rating</Label>
                  <LargeRating/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="exampleText">Review</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button color="second" className="mt-1">
                    Add
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
