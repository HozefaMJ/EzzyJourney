import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Link} from "react-router-dom";

import LargeRating from 'components/Ratings/LargeRating';



export default function PackageCard({packagei}) {

return (
    <>
        <div className="py-5" >
              <Link
                to={`/Package/${packagei._id}`}
                className="card m-1 shadow-sm-dark card-box-hover-rise"
                style={{minWidth:"auto",maxWidth:"fill-content"}}>
                <img src={packagei.packageImages[0]} className="card-img-top" alt="..." style={{height:"160px"}} />
                <div className="p-3 bg-secondary rounded-bottom p-xl-4">
                  <h4 className="text-primary mt-2 mb-2">{packagei.title}</h4>
                  <div className="d-flex justify-content-around mt-3 mb-3">
                    {packagei.isMeal ? (<FontAwesomeIcon
                      icon={['fas', 'utensils']}
                      className="font-size-lg"
                      color="second"
                    />):<></>}
                    {packagei.isFlights ? (<FontAwesomeIcon
                      icon={['fas', 'plane']}
                      className="font-size-lg"
                      color="second"
                    />): <></>}
                    {packagei.isTransportation ? (<FontAwesomeIcon
                      icon={['fas', 'car']}
                      className="font-size-lg"
                      color="second"
                    />) : <></>}
                    {packagei.isVisa ? (<FontAwesomeIcon
                      icon={['fab', 'cc-visa']}
                      className="font-size-lg"
                      color="second"
                    />) : <></>}
                    {packagei.isHotel ? (<FontAwesomeIcon
                      icon={['fas', 'hotel']}
                      className="font-size-lg"
                      color="second"
                    />):<></>}
                  </div>
                  <p className="text-second-50 opacity-6 mt-2 mb-0">
                    {packagei.description}
                  </p>
                  <div className="m-1">
                    <LargeRating rating={packagei.rating} unClickable={true}/>
                  </div>
                </div>
              </Link>
            </div>
    </>
  );
}
