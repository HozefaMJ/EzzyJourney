import React from 'react';

import { Card } from 'reactstrap';

import { Bell, Home,Send, Grid, Key, LifeBuoy, Coffee, Truck } from 'react-feather';

export default function ServiceIconCard() {
  return (
    <>
      <Card className="card-box mb-5 d-flex flex-row flex-wrap justify-content-center">
        <div className="py-4 px-2 d-flex align-items-center">
          <Home className="d-50 text-dark mr-3" />
          <div>
            <span className="d-block opacity-7">Hotels</span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Send className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Flights</span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Coffee className="d-50 text-dark  mr-3" />
          <div>
            <span className="d-block opacity-7">Food</span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Truck className="d-50 text-dark mr-3" />
          <div>
            <span className="d-block opacity-7">Transport</span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Key className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Visa</span>
          </div>
        </div>
      </Card>
    </>
  );
}






























{/*


<div className="d-flex justify-content-around mt-4">
                    <FontAwesomeIcon
                      icon={['fas', 'utensils']}
                      className="font-size-lg"
                      color="second"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'plane']}
                      className="font-size-lg"
                      color="second"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'car']}
                      className="font-size-lg"
                      color="second"
                    />
                    <FontAwesomeIcon
                      icon={['fab', 'cc-visa']}
                      className="font-size-lg"
                      color="second"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'hotel']}
                      className="font-size-lg"
                      color="second"
                    />
                  </div>

*/}