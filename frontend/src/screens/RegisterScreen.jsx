import React,{useState,useEffect} from 'react';

import { Row, Col, Container, Form, FormGroup, Input, Button } from 'reactstrap';

import {useDispatch,useSelector} from "react-redux";
import BasicLoader from "../components/LoadingIndicators/BasicLoader";
import ErrorAlert from "../components/Alerts/ErrorAlert";

import {register} from "../actions/userActions";

import illustration1 from '../assets/images/illustrations/pack1/handshake.svg';
import { Link } from 'react-router-dom';

/*
    "name":"Hozefa J",
    "email": "hozefa@gmail.com",
    "contact": 8452088328,
    "dob": "24/6/96",
    "password":"123456",
    "address": "06 chunabhatti mumbai-22"
*/

export default function RegisterScreen({location,history}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [dob, setDob] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister);
  const {loading, error, userInfo} = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo){
      history.push(redirect)
    }
  }, [userInfo,history,redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      setMessage('Passwords Do Not Match')
    } else {
    // Dispatch Register
    dispatch(register(name,email,contact,dob,password,address))
    }
}

  return (
    <>
      <div className="app-wrapper bg-white min-vh-100">
        <div className="app-main min-vh-90">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-3">
                  <Container>
                    <Row>
                      <Col lg="6" className="d-flex align-items-center">
                        <div className="divider-v d-none d-lg-block divider-v-md" />
                        <div className="w-100 pr-0 pr-lg-5">
                          <div className="text-center mb-4">
                            <h1 className="display-4 mb-1 font-weight-bold">
                              Create your account
                            </h1>
                            <p className="font-size-lg mb-0 text-black-50">
                              Start benefiting from our tools right away
                            </p>
                          </div>
                          {message && <ErrorAlert error={message}/>}
                          {error && <ErrorAlert error={error}/>}
                          {loading && <BasicLoader loading={loading}/>}
                          <Form onSubmit={submitHandler}>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Full Name
                            </label>
                            <Input
                              placeholder="Enter your full name"
                              type="text"
                              value={name}
                              onChange={(e)=> setName(e.target.value)}
                            />
                          </FormGroup>
                          
                          <FormGroup>
                                <label className="font-weight-bold">
                                  Email address
                                </label>
                                <Input
                                  placeholder="yourname@yourmail.com"
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Contact
                            </label>
                            <Input
                              placeholder="Enter your contact number"
                              type="tel"
                              value={contact}
                              onChange={(e)=> setContact(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Date of Birth
                            </label>
                            <Input
                              placeholder="Enter your date of birth"
                              type="date"
                              value={dob}
                              onChange={(e)=> setDob(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <div className="d-flex justify-content-between mg-b-5">
                              <label className="font-weight-bold">
                                Password
                              </label>
                            </div>
                            <Input
                              placeholder="Enter your password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <div className="d-flex justify-content-between mg-b-5">
                              <label className="font-weight-bold">
                                Confirm Password
                              </label>
                            </div>
                            <Input
                              placeholder="Enter your confirm password"
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Full Address
                            </label>
                            <Input
                              placeholder="Enter your Postal Address"
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </FormGroup>
                          <div className="form-group mb-3">
                            By clicking the <strong>Create account</strong>{' '}
                            button below you agree to our terms of service and
                            privacy statement.
                          </div>
                          <div className="text-center mb-5">
                            <Button
                              color="primary"
                              type="submit"
                              className="text-uppercase font-weight-bold font-size-sm my-3">
                              Create account
                            </Button>
                          </div>
                          
                          </Form>
                          
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="d-none d-lg-flex align-items-center"
                        style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                       
                          <div>
                              Already have an account? <Link to="/Login"><b>Login</b></Link>
                          </div>
                          <img
                            alt="ezzy logo illustration"
                            className="w-100 mx-auto d-block img-fluid"
                            src={illustration1}
                          />
                        
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
