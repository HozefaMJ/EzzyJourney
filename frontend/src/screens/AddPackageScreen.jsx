import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    Button,
    Container
  } from 'reactstrap';

import TextareaAutosize from 'react-autosize-textarea';

import particles2 from '../assets/images/hero-bg/particles-2.svg';
import hero1 from '../assets/images/hero-bg/hero-space-3.jpg';

import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import HeroCarousels from 'components/carousels/HeroCarousels';
import StickyWhatsappButton from 'components/Buttons/StickyWhatsapp';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function AddPackages() {
  return (
    <>
      <Header1/>
        <Container>
            <Row>
                <Col md="12">
                    <Card className="card-box mb-5">
                        <CardBody>
                        <CardTitle className="font-weight-bold font-size-xl mb-4">
                            Add Package
                        </CardTitle>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="exampleName">Package Code</Label>
                                <Input
                                    type="text"
                                    name="packageCode"
                                    id="exampleName"
                                    placeholder="Package Code"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Package Name</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="exampleName"
                                    placeholder="Package Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Destination</Label>
                                <Input
                                    type="text"
                                    name="destination"
                                    id="exampleName"
                                    placeholder="Destination"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Duration</Label>
                                <Input
                                    type="number"
                                    name="duration"
                                    id="exampleName"
                                    placeholder="Duration"
                                />
                            </FormGroup>
                            <h4 className="mt-5 mb-3">Package Price</h4>
                            <FormGroup>
                                <Label htmlFor="exampleName">Adults</Label>
                                <Input
                                    type="number"
                                    name="adultPrice"
                                    id="exampleName"
                                    placeholder="Enter Price"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Children Between Age(6-12)</Label>
                                <Input
                                    type="number"
                                    name="childAbove6"
                                    id="exampleName"
                                    placeholder="Enter Price"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Children Below Age 6</Label>
                                <Input
                                    type="number"
                                    name="childBelow6"
                                    id="exampleName"
                                    placeholder="Enter Price"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleSelect">Select Currency</Label>
                                <Input type="select" name="currency" id="exampleSelect">
                                    <option>₹ Rupees</option>
                                    <option>$ Dollars</option>
                                    <option>€ Euros</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Places Covered</Label>
                                <Input type="textarea" name="placesCovered" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Description</Label>
                                <Input type="textarea" name="description" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Hotel Names</Label>
                                <Input type="textarea" name="hotelNames" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Itinerary</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="Itinerary"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Inclusions</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="inclusions"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Exclusions</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="exclusions"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Terms & Conditioins</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="termsConditions"
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="exampleEmail">Category</Label>
                                <Input
                                    type="text"
                                    name="category"
                                    id="exampleEmail"
                                    placeholder="Category"
                                />
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input name="isMeal" type="checkbox" /> Meals
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input name="isHotel" type="checkbox" /> Hotels
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input name="isFlights" type="checkbox" /> Flights
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input name="isVisa" type="checkbox" /> Visa
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input name="isTransportation" type="checkbox" /> Transporation
                                </Label>
                            </FormGroup>
                            <h4 className="mt-5 mb-3">Package Photos</h4>
                            <FormGroup>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    You can only add .jpg/.jpeg/.png (Images Only)
                                </FormText>
                            </FormGroup>
                            <Button color="primary" className="mt-1">
                            Add Package
                            </Button>
                        </Form>
                        </CardBody>
                    </Card>
                </Col>
          </Row>
        </Container>
      <Footer1/>
    </>
  );
}