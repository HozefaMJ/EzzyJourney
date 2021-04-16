import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Row, Col, CustomInput, Label, FormGroup, Button } from 'reactstrap';

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {getUserDetails} from "../../actions/userActions";

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio
} from 'availity-reactstrap-validation';
export default function UpdateProfileForm({location,history}) {

    /*
    name
    email
    profilepicture
    contact
    address
    dob
    
    */

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
  
    const dispatch = useDispatch()
  
    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
  
    
    useEffect(() => {
      if(!userInfo){
        history.push('/Login')
      } else {
        if(!user.name){
          dispatch(getUserDetails('profile'))
        } else {
          setName(user.name)
          setEmail(user.email)
          setContact(user.contact)
          setDob(user.dob)
          setAddress(user.address)
        }
      }
    }, [dispatch,userInfo,user,history])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if(password !== confirmPassword) {
        setMessage('Passwords Do Not Match')
      } else {
      // Dispatch Update
      }
  }
  

  return (
    
    <>
    {message && <ErrorAlert error={message}/>}
    {error && <ErrorAlert error={error}/>}
    {loading && <BasicLoader loading={loading}/>}
      <AvForm className="m-4" onSubmit={submitHandler}>
        <Row>
          <Col md="12">
            {/* With AvField */}
            <AvField name="name" label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <AvField name="email" label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <AvField name="contact" label="Contact Number" type="tel" value={contact} onChange={(e) => setContact(e.target.value)} />
            <div className="mb-3">
                <Label for="form-file-4">Update Profile Picture</Label>
                <CustomInput
                
                type="file"
                id="form-file-4"
                name="profilepicture"
                />{/*invalid*/}
            </div>
            <AvField name="dob" label={`Date of Birth: ${dob}`} type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            <AvField name="address" label="Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <div className="divider m-3"/>
            <AvField name="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <AvField name="confirmpassword" label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

            <FormGroup>
              <Button size="lg" className="mt-3" color="ezzyColor" type="submit">
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