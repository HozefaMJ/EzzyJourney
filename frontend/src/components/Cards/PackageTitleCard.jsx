import React from 'react';

import { Row, Col, Card } from 'reactstrap';

import WishlistedCount from 'components/Badges/WishlistedCount';
import PackageQueryForm from 'components/forms/PackageQueryForm';
import QueryModalForm from "../forms/QueryModalForm";
import SmallRating from 'components/Ratings/SmallRating';
import { useSelector } from 'react-redux';

export default function PackageTitleCard({title,count,rating,reviewCount}) {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin;

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
                        <SmallRating rating={rating} unClickable={true}/>
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
                        {userInfo ? (
                            <PackageQueryForm buttonColor="ezzyColor"/>
                        ) : (
                            <QueryModalForm buttonColor="ezzyColor" buttonName="Send a Query"/>
                        )}
                    </div>
                </Col>
            </Row>
        </Card>
    </>
  );
}
