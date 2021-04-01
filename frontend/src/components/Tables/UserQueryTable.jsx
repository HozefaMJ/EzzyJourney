import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from 'reactstrap';

import avatar1 from '../../assets/images/hero-bg/hero-leh.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import { Link } from 'react-router-dom';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function UserQueryTable() {
  return (
    <>
      <Card className="mb-5 mt-5">
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Package</th>
                  <th className="text-center">Queried Date</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          Ladakh Dreams
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>1/4/21</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          Ladakh Dreams
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>1/4/21</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          Ladakh Dreams
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>1/4/21</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Responded
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          Ladakh Dreams
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>1/4/21</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Responded
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          Paris Dreams
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>1/4/21</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Responded
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          London Dreams
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>1/4/21</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Responded
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className=" d-flex justify-content-center">
              <AllPackagesPagination/>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
