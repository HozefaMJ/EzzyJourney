import React from 'react';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  Button
} from 'reactstrap';

import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import RightIconLink from 'components/Buttons/RightIconLink';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function EmployeesAdminPanelTable() {
  return (
    <>
      <Card className="card-box mb-5 mt-4">
        <div className="card-header pr-2">
          <div className="card-header--title">All Employees</div>
          <div className="card-header--actions">
            <RightIconLink Name="Add Employee" link="/AddEmployees" icon="plus"/>
          </div>
        </div>
        <CardBody>
          <div className="table-responsive-md">
            <Table hover borderless className="text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-left">Name</th>
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
                          <img alt="..." src={avatar7} />
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
                  <td className="text-center">
                    <Link
                      to="/EditEmployee"
                      size="sm"
                      color="neutral-primary"
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'user-edit']} />
                    </Link>
                  </td>
                  <td className="text-center">
                    <Button
                      size="sm"
                      color="neutral-danger"
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </Button>
                  </td>
                </tr>
                
                
              </tbody>
            </Table>
          </div>
        </CardBody>
        <div className="card-footer d-flex justify-content-center">
            <AllPackagesPagination/>
        </div>
      </Card>
    </>
  );
}
