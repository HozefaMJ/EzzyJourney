import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'reactstrap';

import {Link} from "react-router-dom";

import Slider from 'react-slick';
import logo1 from '../../assets/images/stock-logos/netflix.svg';
import logo2 from '../../assets/images/stock-logos/airbnb.svg';
import logo3 from '../../assets/images/stock-logos/instagram.svg';
import logo4 from '../../assets/images/stock-logos/slack.svg';

import stock1 from '../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../assets/images/hero-bg/hero-leh.jpg';
import stock3 from '../../assets/images/stock-photos/stock-3.jpg';
import stock4 from '../../assets/images/stock-photos/stock-4.jpg';
import LargeRating from 'components/Ratings/LargeRating';



export default function PackageCard({packageImage,title,isFood,isHotel,isFlight,isTransportation,isVisa,rating}) {

return (
    <>
        <div className="py-5">
              <Link
                to="/Package"
                className="card m-1 shadow-sm-dark card-box-hover-rise"
                style={{minWidth:"auto",maxWidth:"fill-content"}}>
                <img src={packageImage} className="card-img-top" alt="..." style={{ maxWidth: '100%' }} />
                <div className="p-3 bg-secondary rounded-bottom p-xl-4">
                  <h4 className="text-primary m-2">{title}</h4>
                  <div className="d-flex justify-content-around mt-3 mb-3">
                    {isFood ? (<FontAwesomeIcon
                      icon={['fas', 'utensils']}
                      className="font-size-lg"
                      color="second"
                    />):<></>}
                    {isFlight ? (<FontAwesomeIcon
                      icon={['fas', 'plane']}
                      className="font-size-lg"
                      color="second"
                    />): <></>}
                    {isTransportation ? (<FontAwesomeIcon
                      icon={['fas', 'car']}
                      className="font-size-lg"
                      color="second"
                    />) : <></>}
                    {isVisa ? (<FontAwesomeIcon
                      icon={['fab', 'cc-visa']}
                      className="font-size-lg"
                      color="second"
                    />) : <></>}
                    {isHotel ? (<FontAwesomeIcon
                      icon={['fas', 'hotel']}
                      className="font-size-lg"
                      color="second"
                    />):<></>}
                  </div>
                  <p className="text-second-50 opacity-6 mt-2 mb-0">
                    A vacation just like a movie dreamy and memorable
                  </p>
                  <div className="m-1">
                    <LargeRating rating={rating} unClickable={true}/>
                  </div>
                </div>
              </Link>
            </div>
    </>
  );
}
