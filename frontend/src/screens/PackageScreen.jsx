import React from 'react';

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

import packages from "../packages";

export default function Package({match}) {

  const packagesAll = packages.find(p => p._id === match.params.id)

  return (
    <>
      <Header1/>
      <PackageTitleCard title={packagesAll.title} count={packagesAll.numWishlisted} rating={packagesAll.rating} reviewCount={packagesAll.numReviews}/>
      {/*<HeroPackageCarousels/>*/}
      <SliderPackage/>
      <Container>
        <div>
          <div>
            <PackagePrice adult={packagesAll.price.adults} child612={packagesAll.price.childAbove6} child6={packagesAll.price.childBelow6}/>
          </div>
          <div>
            <ServiceIconCard 
              isMeal={packagesAll.isMeal}
              isFlights={packagesAll.isFlights}
              isHotel={packagesAll.isHotel}
              isTransportation={packagesAll.isTransportation}
              isVisa={packagesAll.isVisa}
            />
          </div>
          <div>
            <PackageDescriptionCard 
            days={packagesAll.duration}
            places={packagesAll.placesCovered}
            description={packagesAll.description}
            inclusions={packagesAll.inclusions}
            exclusions={packagesAll.exclusions}
            itinerary={packagesAll.itinerary}
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

