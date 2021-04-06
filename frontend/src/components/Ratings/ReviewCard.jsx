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
import SmallRating from './SmallRating';

export default function ReviewCard({Username,rating,review}) {
  return (
    <>
        <div>
            <div>
                <h5>{Username}</h5>
            </div>
            <div>
                <SmallRating rating={4} unClickable={true}/>
            </div>
            <div className="mt-3">
                <p>
                    {review}
                </p>
            </div>
        </div>
        <div className="divider mb-3"/>
    </>
  );
}
