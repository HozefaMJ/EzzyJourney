import React,{useState,useEffect} from 'react';

import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button,Card,CardBody,CardTitle,Form,FormGroup,Label,Input} from 'reactstrap';

import PackagePrice from 'components/CountUps/PackagePrice';
import PackageTitleCard from 'components/Cards/PackageTitleCard';
import ServiceIconCard from 'components/Cards/ServiceIconCard';
import PackageDescriptionCard from 'components/Cards/PackageDescriptionCard.';
import ReviewCard from "../components/Ratings/ReviewCard";
import SliderPackage from 'components/Sliders/SliderPackage/SliderPackage';
import {useDispatch,useSelector} from "react-redux";

import {listPackageDetails,createReview} from "../actions/packageActions";
import {PACKAGE_CREATE_REVIEW_RESET} from "../constants/packageConstants"

import BasicLoader from 'components/LoadingIndicators/BasicLoader';
import ErrorAlert from 'components/Alerts/ErrorAlert';
import { Link } from 'react-router-dom';

export default function Package({match}) {

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const packageDetails = useSelector(state => state.packageDetails)
  const {loading, error, packages} = packageDetails

  const packageReviewCreate = useSelector(state => state.packageReviewCreate)
  const {error: errorReview, success: successReview} = packageReviewCreate

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if(successReview){
      alert("Review Added")
      setComment('')
      setRating(0)
      dispatch({
        type: PACKAGE_CREATE_REVIEW_RESET
      })
    }
    dispatch(listPackageDetails(match.params.id))
  }, [dispatch, match,successReview])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createReview(match.params.id, {
      comment,
      rating
    }))
  }

  return (
    <>
      <Header1/>
      {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
        <>
        <PackageTitleCard title={packages.title} count={packages.numWishlisted} rating={packages.rating} reviewCount={packages.numReviews}/>
        {packages.packageImages ? (
          <SliderPackage images={packages.packageImages}/> 
        ): (<h2>Images not available yet</h2>)}
        <Container>
          <div>
            {packages.price ? (
              <div>
              <PackagePrice currency={packages.currency} adults={packages.price.adults} childAbove6={packages.price.childAbove6} childBelow6={packages.price.childBelow6}/>
            </div>
            ) : <h3>Contact to know Price</h3>}
            <div>
              <ServiceIconCard 
                isMeal={packages.isMeal}
                isFlights={packages.isFlights}
                isHotel={packages.isHotel}
                isTransportation={packages.isTransportation}
                isVisa={packages.isVisa}
              />
            </div>
            <div>
              <PackageDescriptionCard 
              days={packages.duration}
              hotels={packages.hotelNames}
              places={packages.placesCovered}
              description={packages.description}
              inclusions={packages.inclusions}
              exclusions={packages.exclusions}
              itinerary={packages.itinerary}
              />
            </div>
          </div>
          <div id="reviews">
            <Row>
              <Col md="12">
                <Card className="card-box mb-5">
                  <CardBody>
                    <CardTitle className="font-weight-bold font-size-lg mb-4">
                      All Reviews
                    </CardTitle>
                    
                    {packages.reviews.length === 0 && <h6>No Reviews</h6>}
                    {packages.reviews.map(review => (
                      <ReviewCard Username={review.name} rating={review.rating} review={review.comment}/>
                    ))}
                    
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                {userInfo ? (
                  <Card className="card-box mb-5">
                  <CardBody>
                    <CardTitle className="font-weight-bold font-size-lg mb-4">
                      Add A Review
                    </CardTitle>
                    {errorReview && <ErrorAlert error={errorReview}/>}
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                          <Label htmlFor="exampleText">Rating</Label>
                          <Input className="mb-2" type="select" as="select" value={rating} onChange={e => setRating(e.target.value)}>
                            <option value="..">Select...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="exampleText">Review</Label>
                          <Input type="textarea" name="text" id="exampleText" value={comment} onChange={e => setComment(e.target.value)}/>
                        </FormGroup>
                        <Button color="ezzyColor" type="submit" className="mt-1">
                            Add
                        </Button>
                      </Form>
                    </CardBody>
                  </Card>
                ) : (
                  <Card className="card-box mb-5">
                  <CardBody>
                    <CardTitle className="font-size-lg mb-4">
                    Please <Link to="/Login">Login</Link> To Review
                    </CardTitle>
                  </CardBody>
                  </Card>
                )}
                </Col>
              </Row>
          </div>
        </Container>
        </>
      )}
      
      <Footer1/>
    </>
  );
}


{/*
<Container>
        <div>
          <div>
            <PackagePrice adult={packages.price.adults} child612={packages.price.childAbove6} child6={packages.price.childBelow6}/>
          </div>
          <div>
            <ServiceIconCard 
              isMeal={packages.isMeal}
              isFlights={packages.isFlights}
              isHotel={packages.isHotel}
              isTransportation={packages.isTransportation}
              isVisa={packages.isVisa}
            />
          </div>
          <div>
            <PackageDescriptionCard 
            days={packages.duration}
            hotels={packages.hotelNames[0]}
            places={packages.placesCovered[0]}
            description={packages.description}
            inclusions={packages.inclusions}
            exclusions={packages.exclusions}
            itinerary={packages.itinerary}
            />
          </div>
        </div>
        <div id="reviews">
          <Reviews/>
        </div>
      </Container>
      */}
