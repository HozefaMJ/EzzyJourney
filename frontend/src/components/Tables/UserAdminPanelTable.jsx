import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {listUsers} from "../../actions/userActions";

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

import {Link} from "react-router-dom";

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function UserAdminPanelTable({history}) {

  const dispatch = useDispatch();

  const userList = useSelector(state => state.userList)
  const {loading, error, users} = userList;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listUsers())
    } else {
      history.push('/Login')
    }
  },[dispatch,history])

  const deleteHandler = (id) => {
    console.log(`Delete User ${id}`)
  }

  return (
    <>
      <Card className="card-box mb-5 mt-3">
        <div className="card-header">
          <div className="card-header--title">
              All Users {`( 21 )`}
          </div>
        </div>
        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
          <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Employee</th>
                  <th className="text-center">isAdmin</th>
                  <th className="text-center">isEmployee</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={user.profilePicture} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          {user.name}
                        </a>
                      </div>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color={user.isAdmin ? "success" : "danger"}
                        size="sm" 
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        color={user.isEmployee ? "success" : "danger"}
                        size="sm" 
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>

                  <td className="text-center">
                    <div>
                      <Link
                        to={`/EditUser/${user._id}`}
                        color="primary"
                        size="sm"
                        className="btn-icon text-primary d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'user-edit']}
                          className="font-size-lg"
                        />
                      </Link>
                    </div>
                  </td>
                  
                  <td className="text-center">
                    <div>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={deleteHandler(user._id)}
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        <FontAwesomeIcon
                          icon={['fas', 'trash-alt']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                ))}
                
                
                
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <AllPackagesPagination/>
        </CardBody>
        )}
        
      </Card>
    </>
  );
}
