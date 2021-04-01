import React from 'react';

import { Row, Col, Card } from 'reactstrap';

import CountUp from 'react-countup';
import WishlistedCount from 'components/Badges/WishlistedCount';
import PackageQueryForm from 'components/forms/PackageQueryForm';
export default function PackageTitleCard({title,count}) {
  return (
    <>
        <Card className="card-box mb-5 mt-3">
            <Row className="p-4 m-4 text-center">
                <Col lg="8">
                    <div className="display-3 m-2 font-weight-bold">
                        <h2>
                            {title}
                        </h2>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="display-3 m-2 font-weight-bold">
                        <WishlistedCount count={count}/>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="display-3 m-2 font-weight-bold">
                        <PackageQueryForm buttonColor="second"/>
                    </div>
                </Col>
            </Row>
        </Card>
    </>
  );
}
