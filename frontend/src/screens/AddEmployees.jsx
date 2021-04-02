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

export default function AddEmployees() {
  return (
    <>
      <Header1/>
        <Container>
            <Row>
                <Col md="12">
                    <Card className="card-box mb-5">
                        <CardBody>
                        <CardTitle className="font-weight-bold font-size-lg mb-4">
                            Add Employee
                        </CardTitle>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="exampleName">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="exampleName"
                                    placeholder="Name"
                                    value="Hozefa Jaorawala"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Email"
                                    value="hozefa24imp@gmail.com"
                                />
                            </FormGroup>
                            
                            <Button color="primary" className="mt-1">
                            Add
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
