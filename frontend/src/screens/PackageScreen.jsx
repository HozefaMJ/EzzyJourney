import React,{useState,useEffect} from 'react';

import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button,Card } from 'reactstrap';

import HeroPackageCarousels from "../components/carousels/HeroPackageCarousels";
import PackagePrice from 'components/CountUps/PackagePrice';
import PackageTitleCard from 'components/Cards/PackageTitleCard';
import ServiceIconCard from 'components/Cards/ServiceIconCard';
import PlacesCoveredCard from 'components/Cards/PlacesCoveredCard';
import PackageDescriptionCard from 'components/Cards/PackageDescriptionCard.';
import Reviews from 'components/Ratings/Reviews';
import AllReviews from 'components/Ratings/AllReviews';
import SliderEzzy from 'components/Sliders/SliderEzzy';
import SliderPackage from 'components/Sliders/SliderPackage/SliderPackage';

import {useDispatch,useSelector} from "react-redux";

import {listPackageDetails} from "../actions/packageActions";
import BasicLoader from 'components/LoadingIndicators/BasicLoader';
import ErrorAlert from 'components/Alerts/ErrorAlert';

export default function Package({match}) {

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.packageDetails)

  const {loading, error, packages} = productDetails

  useEffect(() => { 
    dispatch(listPackageDetails(match.params.id))
  }, [dispatch, match])


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
            <Reviews/>
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
