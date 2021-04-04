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
import RightIconLink from 'components/Buttons/RightIconLink';


export default function PackagesAdminPanelTable() {
  return (
    <>
      <Card className="card-box mb-5 mt-4">
            <div className="card-header pr-2 d-flex justify-content-between">
                <div className="card-header--title m-4">All Packages</div>
                <div className="card-header--actions">
                    <RightIconLink Name="Add Packages" link="/AddPackages" icon="plus"/>
                </div>
            </div>
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Package</th>
                  <th className="text-center">Created On</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Delete</th>
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
                      Inactive
                    </Badge>
                  </td>
                  <td className="text-center text-primary">
                    <Link to="/EditPackage">
                      <FontAwesomeIcon color="primary" icon={['fas', 'user-edit']} />
                    </Link>
                  </td>
                  <td className="text-center text-danger">
                    <Button color="danger">
                      <FontAwesomeIcon color="danger" icon={['fas', 'trash-alt']} />
                    </Button>
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
                      Active
                    </Badge>
                  </td>
                  <td className="text-center text-primary">
                    <Link to="/EditPackage">
                      <FontAwesomeIcon color="primary" icon={['fas', 'user-edit']} />
                    </Link>
                  </td>
                  <td className="text-center text-danger">
                    <Button color="danger">
                      <FontAwesomeIcon color="danger" icon={['fas', 'trash-alt']} />
                    </Button>
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
                      Active
                    </Badge>
                  </td>
                  <td className="text-center text-primary">
                    <Link to="/EditPackage">
                      <FontAwesomeIcon color="primary" icon={['fas', 'user-edit']} />
                    </Link>
                  </td>
                  <td className="text-center text-danger">
                    <Button color="danger">
                      <FontAwesomeIcon color="danger" icon={['fas', 'trash-alt']} />
                    </Button>
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
