import React from 'react';

import { CardBody, Card, CardHeader } from 'reactstrap';

import CountUp from 'react-countup';
import { Clipboard, Grid, Info, Layers, Plus, Minus, MapPin, Home } from 'react-feather';
export default function PackageDescriptionCard({places,hotels,itinerary,inclusions,exclusions,description,days}) {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader className="d-flex justify-content-between">
          <h2 className="font-size-lg mb-0 py-2 font-weight-bold">
            Package Details
          </h2>
          <h3 className="font-size-lg mb-0 py-2 font-weight-bold mr-5">
              Duration: {days} days
          </h3>
        </CardHeader>
        <CardBody>
        <div className="d-flex">
              <div>
                <div className="d-flex">
                    <MapPin className="h1 d-block mr-3 text-success" />
                    <h4>Places Covered:</h4>
                </div>
                
                <div className="text-black-50">{places}</div>
              </div>
            </div>
            <div className="divider my-3" />
        <div className="d-flex">
              <div>
                <div className="d-flex">
                    <Home className="h1 d-block mr-3 text-primary" />
                    <h4>Hotels:</h4>
                </div>
                
                <div className="text-black-50">{hotels}</div>
              </div>
            </div>
        <div className="divider my-3" />
            <div className="d-flex">
              <div>
                <div className="d-flex">
                    <Clipboard className="h1 d-block mr-3 text-warning" />
                    <h4>Itinerary:</h4>
                </div>
                
                <div className="text-black-50">{itinerary}</div>
              </div>
            </div>
          <div className="divider my-3" />
            <div className="d-flex">
              <div>
                  <div className="d-flex">
                        <Plus className="h1 d-block mr-3 text-success" />
                        <h4>Inclusions:</h4>
                  </div>
                
                <div className="text-black-50">{inclusions}</div>
              </div>
            </div>
          <div className="divider my-3" />
            <div className="d-flex">
              <div>
                <div className="d-flex">
                    <Minus className="h1 d-block mr-3 text-danger" />
                    <h4>Exclusions:</h4>
                </div>
                <div className="text-black-50">{exclusions}</div>
              </div>
            </div>
          <div className="divider my-3" />
            <div className="d-flex">
              <div>
                <div className="d-flex">
                    <Grid className="h1 d-block mr-3 text-first" />
                    <h4>Description:</h4>
                </div>
                <div className="text-black-50">{description}</div>
              </div>
            </div>
            <div className="divider my-3" />
            <div className="d-flex">
              <div>
                <div className="d-flex">
                    <Info className="h1 d-block mr-3 text-danger" />
                    <h4>Terms & Conditions:</h4>
                </div>
                <div className="text-black-50">{description}</div>
              </div>
            </div>
        </CardBody>
      </Card>
    </>
  );
}
