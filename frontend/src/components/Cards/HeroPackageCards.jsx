import React from 'react';

import { Row, Col, Card, Badge, Button } from 'reactstrap';

import stock1 from '../../assets/images/hero-bg/hero-leh.jpg';


export default function HeroPackageCards() {

  return (
    <>
            <div>
              <Card className="shadow-none rounded-0 overflow-hidden">
                <div className="card-img-wrapper rounded">
                    <img
                        src={stock1}
                        className="img-fit-container rounded"
                        alt="..."
                        style={{maxHeight:'65vh'}}
                    />
                </div>
              </Card>
            </div>
    </>
  );
}
