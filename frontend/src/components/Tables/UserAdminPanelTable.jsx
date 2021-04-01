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

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function UserAdminPanelTable() {
  return (
    <>
      <Card className="card-box mb-5 mt-3">
        <div className="card-header">
          <div className="card-header--title">
              All Users
          </div>
        </div>
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Employee</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Block</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="primary"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'user-edit']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="warning"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'ban']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="danger"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'trash-alt']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
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
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="primary"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'user-edit']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="warning"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'ban']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="danger"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'trash-alt']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="primary"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'user-edit']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="warning"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'ban']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="danger"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'trash-alt']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <AllPackagesPagination/>
        </CardBody>
      </Card>
    </>
  );
}
