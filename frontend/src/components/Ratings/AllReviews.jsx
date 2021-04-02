import React from 'react';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardColumns,
  CardGroup,
  FormText,
  Form,
  CustomInput,
  Label,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

import LargeRating from "./LargeRating";
import ReviewCard from './ReviewCard';
import SmallRating from './SmallRating';

export default function AllReviews({Username,rating,review}) {
  return (
    <>
      <Row>
        <Col md="12">
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                All Reviews
              </CardTitle>
              <ReviewCard Username="Husain Vadgamwala" rating={3} review="Great time to go ladakh and with Ezzy its always great"/>
              <ReviewCard Username="Husain Vadgamwala" rating={3} review="Great time to go ladakh and with Ezzy its always great"/>
              <ReviewCard Username="Husain Vadgamwala" rating={3} review="Great time to go ladakh and with Ezzy its always great"/>
              <ReviewCard Username="Husain Vadgamwala" rating={3} review="Great time to go ladakh and with Ezzy its always great"/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
