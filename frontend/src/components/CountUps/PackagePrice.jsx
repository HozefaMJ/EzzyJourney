import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card } from 'reactstrap';

import CountUp from 'react-countup';
export default function PackagePrice({adult,child612,child6}) {
  return (
    <>
      <Row>
        <Col xl="12">
          <Card className="card-box mt-5 mb-5">
            <Row className="no-gutters">
              <Col lg="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['fas', 'male']}
                        className="display-4 text-info"
                      />
                      <div className="ml-3 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={adult}
                            duration={2}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix="₹ "
                            suffix="/-"
                          />
                        </b>
                        <span className="text-black-50 d-block">Adults PP</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['fas', 'child']}
                        className="display-4 text-success"
                      />
                      <div className="ml-3 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={child612}
                            duration={2}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix="₹ "
                            suffix="/-"
                          />
                        </b>
                        <span className="text-black-50 d-block">Children (6-12) PP</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" className="p-3">
                <Row>
                  <Col>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['fas', 'baby']}
                        className="display-4 text-danger"
                      />
                      <div className="ml-3 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={child6}
                            duration={2}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix="₹ "
                            suffix="/-"
                          />
                        </b>
                        <span className="text-black-50 d-block">Children Below 6 PP</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
