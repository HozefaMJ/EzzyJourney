import React from 'react';

import { Row, Col, Card } from 'reactstrap';

export default function PlacesCoveredCard({places}) {
  return (
    <>
<Card className="card-box mb-5 mt-3">
            <Row className="p-4 m-4 text-center">
                <Col lg="12">
                    <div className="display-3 font-weight-bold">
                        <h3>
                            {places}
                        </h3>
                    </div>
                </Col>
            </Row>
</Card>
    </>
  );
}
