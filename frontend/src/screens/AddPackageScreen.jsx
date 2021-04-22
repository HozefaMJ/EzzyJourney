import axios from "axios";
import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../components/LoadingIndicators/BasicLoader";
import ErrorAlert from "../components/Alerts/ErrorAlert";

import {listPackageDetails, createPackage} from "actions/packageActions";


import {
    Row,
    Col,
    CardBody,
    Card,
    CardTitle,
    FormText,
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    Container
  } from 'reactstrap';

import TextareaAutosize from 'react-autosize-textarea';


import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";


export default function AddPackages({history}) {

  const [packageCode, setPackageCode] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [placesCovered, setPlacesCovered] = useState('')
  const [hotelNames, setHotelNames] = useState('')
  const [itinerary, setItinerary] = useState('')
  const [termsConditions, setTermsConditions] = useState('')
  const [duration,setDuration] = useState('')
  const [destination, setDestination] = useState('')
  const [inclusions, setInclusions] = useState('')
  const [exclusions, setExclusions] = useState('')
  const [category, setCategory] = useState('')
  const [currency, setCurrency] = useState('')
  const [adultPrice, setAdultPrice] = useState('')
  const [childAbove6, setChildAbove6] = useState('')
  const [childBelow6, setChildBelow6] = useState('')
  const [isMeal, setIsMeal] = useState(false)
  const [isFlights, setIsFlights] = useState(false)
  const [isHotel, setIsHotel] = useState(false)
  const [isTransportation, setIsTransportation] = useState(false)
  const [isVisa, setIsVisa] = useState(false)
  const [packageImages, setPackageImages] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch();

  

  const packageCreate = useSelector(state => state.packageCreate)
  const {loading: loading, error: error, success: success} = packageCreate

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  useEffect(() => {
    if(!userInfo || !userInfo.isAdmin){
        history.push('/Login');
    }
    if(success){
        history.push('/AdminPanel')
    }
  }, [dispatch, history, userInfo])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image',file)
    setUploading(true)

    try {
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }

        const {data} = await axios.post('/api/upload',formData,config)

        setPackageImages(data)

        setUploading(false)
    } catch (error) {
        console.error(error);
        setUploading(false)

    }

}

  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(createPackage(packageCode,title,description,placesCovered,hotelNames,itinerary,termsConditions,duration,destination,inclusions,exclusions,category,currency,adultPrice,childAbove6,childBelow6,isMeal,isFlights,isHotel,isTransportation,isVisa,packageImages))
    
}

  return (
    <>
      <Header1/>
        <Container>
            <Row>
                <Col md="12">
                    <Card className="card-box mt-5 mb-5">
                        <CardBody>
                        <CardTitle className="font-weight-bold font-size-xl mb-4">
                            Add Package
                        </CardTitle>
                          {success && <p className="bg-neutral-success text-success">Package has been added.</p>}
                          {error && <ErrorAlert error={error}/>}
                          {loading && <BasicLoader loading={loading}/>}
                        <Form  onSubmit={submitHandler}>
                            <FormGroup>
                                <Label htmlFor="exampleName">Package Code</Label>
                                <Input
                                    type="text"
                                    name="packageCode"
                                    id="exampleName"
                                    placeholder="Package Code"
                                    value={packageCode}
                                    onChange={(e)=> setPackageCode(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Package Name</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="exampleName"
                                    placeholder="Package Name"
                                    value={title}
                                    onChange={(e)=> setTitle(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Destination</Label>
                                <Input
                                    type="text"
                                    name="destination"
                                    id="exampleName"
                                    placeholder="Destination"
                                    value={destination}
                                    onChange={(e)=> setDestination(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Duration</Label>
                                <Input
                                    type="number"
                                    name="duration"
                                    id="exampleName"
                                    placeholder="Duration"
                                    value={duration}
                                    onChange={(e)=> setDuration(e.target.value)}
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
                                    value={adultPrice}
                                    onChange={(e)=> setAdultPrice(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Children Between Age(6-12)</Label>
                                <Input
                                    type="number"
                                    name="childAbove6"
                                    id="exampleName"
                                    placeholder="Enter Price"
                                    value={childAbove6}
                                    onChange={(e)=> setChildAbove6(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Children Below Age 6</Label>
                                <Input
                                    type="number"
                                    name="childBelow6"
                                    id="exampleName"
                                    placeholder="Enter Price"
                                    value={childBelow6}
                                    onChange={(e)=> setChildBelow6(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleName">Currency</Label>
                                <Input
                                    type="text"
                                    name="currency"
                                    id="exampleName"
                                    placeholder="Enter Currency"
                                    value={currency}
                                    onChange={(e)=> setCurrency(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Places Covered</Label>
                                <Input 
                                    type="textarea" 
                                    name="placesCovered" 
                                    id="exampleText"
                                    value={placesCovered}
                                    onChange={(e)=> setPlacesCovered(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Description</Label>
                                <Input 
                                    type="textarea" 
                                    name="description" 
                                    id="exampleText" 
                                    value={description}
                                    onChange={(e)=> setDescription(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Hotel Names</Label>
                                <Input 
                                    type="textarea" 
                                    name="hotelNames" 
                                    id="exampleText"
                                    value={hotelNames}
                                    onChange={(e)=> setHotelNames(e.target.value)}    
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Itinerary</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="Itinerary"
                                    value={itinerary}
                                    onChange={(e)=> setItinerary(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Inclusions</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="inclusions"
                                    value={inclusions}
                                    onChange={(e)=> setInclusions(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Exclusions</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="exclusions"
                                    value={exclusions}
                                    onChange={(e)=> setExclusions(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleText">Terms & Conditioins</Label>
                                <TextareaAutosize
                                    className="form-control"
                                    placehlder="termsConditions"
                                    value={termsConditions}
                                    onChange={(e)=> setTermsConditions(e.target.value)}
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="exampleEmail">Category</Label>
                                <Input
                                    type="text"
                                    name="category"
                                    id="exampleEmail"
                                    placeholder="Category"
                                    value={category}
                                    onChange={(e)=> setCategory(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isMeal" 
                                        type="checkbox"
                                        checked={isMeal}
                                        onChange={(e)=> setIsMeal(e.target.checked)}
                                    /> Meals
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isHotel" 
                                        type="checkbox"
                                        checked={isHotel}
                                        onChange={(e)=> setIsHotel(e.target.checked)}
                                    /> Hotels
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isFlights" 
                                        type="checkbox"
                                        checked={isFlights}
                                        onChange={(e)=> setIsFlights(e.target.checked)} /> Flights
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isVisa" 
                                        type="checkbox"
                                        checked={isVisa}
                                        onChange={(e)=> setIsVisa(e.target.checked)}
                                     /> Visa
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input 
                                        name="isTransportation" 
                                        type="checkbox"
                                        checked={isTransportation}
                                        onChange={(e)=> setIsTransportation(e.target.checked)} 
                                    /> Transporation
                                </Label>
                            </FormGroup>
                            <h4 className="mt-5 mb-3">Package Photos</h4>
                            <FormGroup>
                                <Input
                                    type="text"
                                    value={packageImages}
                                />
                                <Input 
                                    type="file" 
                                    name="file"
                                    custom
                                    onChange={uploadFileHandler}
                                />
                                <FormText color="muted">
                                    You can only add .jpg/.jpeg/.png (Images Only)
                                </FormText>
                            </FormGroup>
                            <Button color="ezzyColor" className="mt-1">
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