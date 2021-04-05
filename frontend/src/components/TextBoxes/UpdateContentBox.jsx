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


export default function UpdateContentBox({contentName,content}) {
  return (
    <>
        <Container>
            <Form className="mt-4">
                <FormGroup>
                    <TextareaAutosize
                        className="form-control"
                        placeholder="Itinerary"
                        value={content}
                        />
                </FormGroup>
                <Button color="ezzyColor" className="mt-1">
                    Update {contentName}
                </Button>
            </Form>
        </Container>
    </>
  );
}