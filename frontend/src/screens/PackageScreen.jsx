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

//import packagesAll from "../packages";

import axios from 'axios';

export default function Package({match}) {

  //const packages = packagesAll.find(p => p._id === match.params.id)

  /**/
  const [packages,setPackage] = useState([])

  const [images,setImages] = useState([])

  useEffect(() => { 
    const fetchPackage = async () => {
      const {data} = await axios.get(`/api/packages/dummy/${match.params.id}`)

      setImages(data.packageImages)

      setPackage(data)
    }

    fetchPackage()
  }, [])

  console.log("Packages",packages.packageImages)
  
  

  return (
    <>
      <Header1/>
      
      <PackageTitleCard title={packages.title} count={packages.numWishlisted} rating={packages.rating} reviewCount={packages.numReviews}/>
      {/*<HeroPackageCarousels/>*/}
      <SliderPackage images={images}/>
      {/*{images.map(image => (<img src={image} alt=""/>))}*/}
      <Container>
        <div>
          <div>
            
            <PackagePrice currency={packages.currency} adults={packages.adults} childAbove6={packages.childAbove6} childBelow6={packages.childBelow6}/>
            {/**/}
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
