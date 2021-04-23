import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {queryAnonymousAction} from "../../actions/queryActions";
//name, email,contact,destination,from,to,adults,childAbove6,childBelow6,foodPreferance,message
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  InputGroupText,
  FormGroup,
  Input,
  Button,
  Modal,
  Form
} from 'reactstrap';

import {Link} from "react-router-dom";

export default function QueryModalForm({buttonColor,buttonName}) {
  const [modal5, setModal5] = useState(false);
  const toggle5 = () => setModal5(!modal5);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [destination, setDestination] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [adults, setAdults] = useState('')
  const [childAbove6, setChildAbove6] = useState('')
  const [childBelow6, setChildBelow6] = useState('')
  const [foodPreferance, setFoodPreferance] = useState('')
  const [message, setMessage] = useState('')
  const [diplayMessage, setDisplayMessage] = useState('')


  const dispatch = useDispatch()

  const queryAnonymous = useSelector(state => state.queryAnonymous);
  const {loading, error, success} = queryAnonymous;

  useEffect(() => {
    if(success){
      setDisplayMessage("We'll Contact You Shortly")
    }
  }, [success])

  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(queryAnonymousAction(name,email,contact,destination,from,to,adults,childAbove6,childBelow6,foodPreferance,message))
    
}

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Button size="xl" outline className="btn-pill shadow-second-sm" color={buttonColor} onClick={toggle5}>
            <span className="btn-wrapper--label">{buttonName}</span>
            <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'map-marked-alt']} />
            </span>
        </Button>
        <Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
          <div>
            <Card className="bg-secondary shadow-none border-0">
              <div className="card-header d-block bg-white pt-4 pb-5">
                <div className="text-dark text-center mb-3">
                  <h4>Register Today!</h4>
                  <p>And get upto 10% off on your first Vacation</p>
                </div>
                <div className="text-center">
                  <Link to="/Register">
                    <Button color="ezzyColor" className="ml-2 hover-scale-sm">
                    <span className="btn-wrapper--label">SignUp</span>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              {diplayMessage && <p className="bg-neutral-success text-success m-3 text-center">{diplayMessage}</p>}
              {error && <ErrorAlert error={error}/>}
              {loading && <BasicLoader loading={loading}/>}
              <Form onSubmit={submitHandler} className="card-body px-lg-5 py-lg-3">
                  <div className="form-group mb-3">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'signature']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Name" 
                        type="text" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                  </div>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Email" 
                        type="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'phone']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Contact" 
                        type="tel" 
                        value={contact}
                        onChange={(e)=> setContact(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Destination" 
                        type="text" 
                        value={destination}
                        onChange={(e)=> setDestination(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="d-flex space-between">
                        <div className=" d-flex flex-column input-group input-group-alternative">
                            <span>From</span>
                            <div className="d-flex">
                                <div className="input-group-prepend">
                                    <InputGroupText>
                                    <FontAwesomeIcon icon={['fas', 'calendar']} />
                                    </InputGroupText>
                                </div>
                                <Input 
                                  placeholder="From" 
                                  type="date"
                                  value={from}
                                  onChange={(e)=> setFrom(e.target.value)}
                                  />
                            </div>
                        </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="d-flex space-between">
                        <div className="d-flex flex-column input-group input-group-alternative">
                            <span>To</span>
                            <div className="d-flex">
                                <div className="input-group-prepend">
                                    <InputGroupText>
                                    <FontAwesomeIcon icon={['fas', 'calendar']} />
                                    </InputGroupText>
                                </div>
                                <Input 
                                  placeholder="To" 
                                  type="date" 
                                  value={to}
                                  onChange={(e)=> setTo(e.target.value)}
                                  />
                            </div>
                        </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'users']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Adults" 
                        type="number" 
                        value={adults}
                        onChange={(e)=> setAdults(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'users']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Child (6-12)" 
                        type="number" 
                        value={childAbove6}
                        onChange={(e)=> setChildAbove6(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'users']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Child Below 6" 
                        type="number" 
                        value={childBelow6}
                        onChange={(e)=> setChildBelow6(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'utensils']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Food Preferance" 
                        type="text" 
                        value={foodPreferance}
                        onChange={(e)=> setFoodPreferance(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'comment']} />
                        </InputGroupText>
                      </div>
                      <Input 
                        placeholder="Message" 
                        type="text" 
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}
                        />
                    </div>
                  </FormGroup>
                  <div className="text-center">
                    <Button type="submit" color="ezzyColor" className="mt-4">
                      Let's Go!!!
                    </Button>
                  </div>
              </Form>
            </Card>
          </div>
        </Modal>
      </div>
    </>
  );
}


/*
1.  Name 
2, Email
3, Contact
4. Destination
5. Date From To
6. Peoples
7. Food Preference
8. Message 
*/