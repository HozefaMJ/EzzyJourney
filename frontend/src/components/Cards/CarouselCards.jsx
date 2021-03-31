import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import Slider from 'react-slick';
import stock1 from '../../assets/images/hero-bg/hero-leh.jpg';
import stock2 from '../../assets/images/stock-photos/stock-5.jpg';
import stock3 from '../../assets/images/stock-photos/stock-2.jpg';

import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';


import LargeRating from "../Ratings/LargeRating";


export default function CarouselCards({packageName,packageDescription}) {

  return (
    <>

            <div>
              <Card className="shadow-none rounded-0 overflow-hidden">
                <div className="card-img-wrapper rounded">
                  <a
                    href="/Package"
                    className="p-1 p-xl-5 rounded">
                    <div className=" card-body text-black text-center">
                      <h5 className="px-2 font-weight-bold display-4 mb-4">
                        {packageName}
                      </h5>
                      <p className="font-size-lg text-black-50 mb-0">
                        {packageDescription}
                      </p>
                    </div>
                    <img
                        src={stock1}
                        className="img-fit-container rounded"
                        alt="..."
                    />
                  </a>
                </div>
              </Card>
            </div>


    </>
  );
}
