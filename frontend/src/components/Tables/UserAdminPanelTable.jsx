import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {listUsers, deleteUser} from "../../actions/userActions";

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
  
  const userDelete = useSelector(state => state.userDelete)
  const {success: successDelete} = userDelete

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listUsers())
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
      <Card className="card-box mb-5 mt-3">
        <div className="card-header">
          <div className="card-header--title">
              <span>Showing All <b>({users ? (users.length) : ""})</b> Users </span>
          </div>
        </div>
        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
          <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Employee</th>
                  <th className="text-center">is Admin</th>
                  <th className="text-center">is Employee</th>
                  <th className="text-center">is Blocked</th>
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
                        color={user.isAdmin ? "ezzyColor" : "danger"}
                        size="sm" 
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        {user.isAdmin ? (
                          <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-lg"
                        />
                        ) : (<FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-lg"
                        />)}
                      </Button>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        color={user.isEmployee ? "ezzyColor" : "danger"}
                        size="sm" 
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        {user.isEmployee ? (
                          <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-lg"
                        />
                        ) : (<FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-lg"
                        />)}
                      </Button>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        color={user.isBlocked ? "warning" : "ezzyColor"}
                        size="sm" 
                        className="btn-icon d-40 p-0 btn-animated-icon-sm">
                        {user.isBlocked ? (
                          <FontAwesomeIcon
                          icon={['fas', 'lock']}
                          className="font-size-lg"
                        />
                        ) : (<FontAwesomeIcon
                          icon={['fas', 'lock-open']}
                          className="font-size-lg"
                        />)}
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
                        onClick={() => deleteHandler(user._id)}
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
