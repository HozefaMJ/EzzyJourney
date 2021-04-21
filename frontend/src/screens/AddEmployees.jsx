import React,{useState,useEffect} from 'react';

import {useDispatch,useSelector} from "react-redux";
import BasicLoader from "../components/LoadingIndicators/BasicLoader";
import ErrorAlert from "../components/Alerts/ErrorAlert";

import {addEmployees} from "../actions/userActions";

import {
    Row,
    Col,
    CardBody,
    Card,
    CardTitle,
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    Container
  } from 'reactstrap';

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";


export default function AddEmployees({location,history}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userAddEmployees = useSelector(state => state.userAddEmployees)
  const {loading, error, success} = userAddEmployees;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if(!userInfo || !userInfo.isAdmin){
      history.push('/Login')
    }
  }, [userInfo,history])

  const submitHandler = (e) => {
    e.preventDefault()
    setMessage(`${name} has been added as an Employee.`)
    // Dispatch Register
    dispatch(addEmployees(name,email))
    
}

  return (
    <>
      <Header1/>
        <Container>
            <Row>
                <Col md="12">
                    <Card className="card-box mt-5 mb-5">
                        <CardBody>
                        <CardTitle className="font-weight-bold font-size-lg mb-4">
                            Add Employee
                        </CardTitle>
                        {success && <p className="bg-neutral-success text-success">{message}</p>}
                        {error && <ErrorAlert error={error}/>}
                        {loading && <BasicLoader loading={loading}/>}
                        <Form onSubmit={submitHandler}>
                            <FormGroup>
                                <Label htmlFor="exampleName">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="exampleName"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            
                            <Button color="ezzyColor" type="submit" className="mt-1">
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
