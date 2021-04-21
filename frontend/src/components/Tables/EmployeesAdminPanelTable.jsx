import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {listEmployeeUsers,deleteUser} from "../../actions/userActions";

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

export default function EmployeesAdminPanelTable(history) {

  const dispatch = useDispatch();

  const userEmployeeList = useSelector(state => state.userEmployeeList)
  const {loading, error, employees} = userEmployeeList;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  
  const userDelete = useSelector(state => state.userDelete)
  const {success: successDelete} = userDelete

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listEmployeeUsers())
    } else {
      history.push('/Login')
    }
  },[dispatch,history,successDelete])

  const deleteHandler = (id) => {
    if(window.confirm('Are You Sure')){
      dispatch(deleteUser(id))
    }
  }

  return (
    <>
      <Card className="card-box mb-5 mt-4">
        <div className="card-header pr-2">
          <div className="card-header--title">
            <span>Showing All ({employees ? (employees.length) : ""}) Employees</span>
          </div>
          <div className="card-header--actions">
            <RightIconLink Name="Add Employee" link="/AddEmployees" icon="plus"/>
          </div>
        </div>
        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
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
                {employees.map(employee => (
                  <tr key={employee._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={employee.profilePicture} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          {employee.name}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/EditUser/${employee._id}`}
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
                      onClick={() => deleteHandler(employee._id)}
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </Button>
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
        )}     
        <div className="card-footer d-flex justify-content-center">
            <AllPackagesPagination/>
        </div>
      </Card>
    </>
  );
}
