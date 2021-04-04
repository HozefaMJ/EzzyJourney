import React from 'react';

import { Row, Col, Card } from 'reactstrap';

import CountUp from 'react-countup';
import WishlistedCount from 'components/Badges/WishlistedCount';
import PackageQueryForm from 'components/forms/PackageQueryForm';
import SmallRating from 'components/Ratings/SmallRating';
export default function PackageTitleCard({title,count,rating,reviewCount}) {
  return (
    <>
        <Card className=" mb-0 mt-0">
            <Row className="p-4 m-4 text-center">
                <Col lg="8">
                    <div className="display-3 m-2 font-weight-bold">
                        <h2>
                            {title}
                        </h2>
                    </div>
                    <div className="m-2 d-flex align-items-center justify-content-center font-weight-bold">
                        <SmallRating rating={rating}/>
                        <a href="#reviews" onClick={(e) => e.preventDefault()}>
                            <b className="ml-3">{reviewCount} Reviews</b>
                        </a>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="display-3 m-2 font-weight-bold">
                        <WishlistedCount count={count}/>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="display-3 m-2 font-weight-bold">
                        <PackageQueryForm buttonColor="ezzyColor"/>
                    </div>
                </Col>
            </Row>
        </Card>
    </>
  );
}
