import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {queryNormalAction} from "../../actions/queryActions";

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


export default function PackageQueryForm({buttonColor,match}) {
  const [modal5, setModal5] = useState(false);
  const toggle5 = () => setModal5(!modal5);

  const packageId = match.params.id

  const [adults, setAdults] = useState('')
  const [childAbove6, setChildAbove6] = useState('')
  const [childBelow6, setChildBelow6] = useState('')

  const [message, setMessage] = useState('')
  const [diplayMessage, setDisplayMessage] = useState('')

  const dispatch = useDispatch()

  const queryNormal = useSelector(state => state.queryNormal);
  const {loading, error, success} = queryNormal;

  useEffect(() => {
    if(success){
      setDisplayMessage("We'll Contact You Shortly")
    }
  }, [success])

  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(queryNormalAction(packageId,message,adults,childAbove6,childBelow6))
    
}

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button size="md" className="rounded shadow-second-sm" color={buttonColor} className="" onClick={toggle5}>
            <span className="btn-wrapper--label">Let's Book!</span>
            <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'bookmark']} />
            </span>
        </Button>
        <Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
          <div>
            <Card className="bg-secondary shadow-none border-0">
              <div className="card-header d-block bg-ezzy pt-4 pb-1">
                <div className="text-white text-center mb-1">
                  <h4>Package Query</h4>
                  <p>Please enter the required detail</p>
                </div>
              </div>
              {diplayMessage && <p className="bg-neutral-success text-success m-3 text-center">{diplayMessage}</p>}
              {error && <ErrorAlert error={error}/>}
              {loading && <BasicLoader loading={loading}/>}
              <Form onSubmit={submitHandler} className="card-body px-lg-5 py-lg-5">
                
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
                  <div className="text-center">
                    <Button color="ezzyColor" type="submit" className="btn-pill mt-4">
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
    "message":"Admin wants to know?",
    "adult": 5,
    "childAbove6": 3,
    "childBelow6":2
*/