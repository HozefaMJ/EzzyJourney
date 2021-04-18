import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../components/LoadingIndicators/BasicLoader";
import ErrorAlert from "../components/Alerts/ErrorAlert";

import {getUserDetails, updateUser} from "actions/userActions";
import {USER_UPDATE_RESET} from "../constants/userConstants";

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

export default function EditUser({match,history}) {

    let userId = "";

    if(match.params.id){
        userId = match.params.id;
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [isEmployee, setIsEmployee] = useState(false)
    const [isBlocked, setIsBlocked] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;
    
    const userUpdate = useSelector(state => state.userUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate;

    useEffect(()=>{

        if(successUpdate){
            dispatch({type: USER_UPDATE_RESET})
            history.push('/AdminPanel')
        } else {
            if(!user.name || user._id !== userId){
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
                setIsEmployee(user.isEmployee)
                setIsBlocked(user.isBlocked)
            }
        }

        
    },[user,userId,dispatch,history,successUpdate])

    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({_id:userId,name,email,isAdmin,isEmployee,isBlocked}))
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
                            Edit User
                        </CardTitle>
                        {loadingUpdate && <BasicLoader loading={loading}/>}
                        {errorUpdate && <ErrorAlert error={error}/>}
                        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
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
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isAdmin" 
                                        type="checkbox" 
                                        checked={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.checked)} /> Update to Admin
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isEmployee" 
                                        type="checkbox"
                                        checked={isEmployee}
                                        onChange={(e) => setIsEmployee(e.target.checked)}  /> Update to Employee
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isBlocked" 
                                        type="checkbox"
                                        checked={isBlocked}
                                        onChange={(e) => setIsBlocked(e.target.checked)}  /> Block to User
                                </Label>
                            </FormGroup>

                            <Button color="ezzyColor" className="mt-1">
                            Submit
                            </Button>
                        </Form>
                        )}                        
                        </CardBody>
                    </Card>
                </Col>
          </Row>
        </Container>
      <Footer1/>
    </>
  );
}
