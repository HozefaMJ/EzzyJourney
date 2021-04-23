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

export default function AllReviews({reviews}) {
  return (
    <>
      <Row>
        <Col md="12">
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                All Reviews
              </CardTitle>
              {/*
              {reviews ? reviews.length === 0 ? <h6>No Reviews</h6> : "" : ""}
              {reviews.map(review => (
                <ReviewCard Username={review.name} rating={review.rating} review={review.comment}/>
              ))}
              */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
