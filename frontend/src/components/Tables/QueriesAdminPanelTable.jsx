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
import avatar2 from '../../assets/images/hero-bg/hero-leh.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function QueriesAdminPanelTable() {
  return (
    <>
      <Card className="card-box mt-3 mb-5">
        <div className="card-header">
          <div className="card-header--title mt-3">
              <p>All Queries</p>
          </div>
        </div>
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '30%' }}>User</th>
                  <th style={{ width: '30%' }}>Package</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Responded</th>
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
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                      </div>
                    </div>
                  </td>
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
                          Ladakh Dreams
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        color="primary"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'reply']}
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
                      </div>
                    </div>
                  </td>
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
                          Ladakh Dreams
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        color="primary"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'reply']}
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
                      </div>
                    </div>
                  </td>
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
                          Ladakh Dreams
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        color="primary"
                        size="sm"
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'reply']}
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
