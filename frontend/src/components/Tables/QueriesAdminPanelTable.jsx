import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux";

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {listQueries, respondQuery} from "../../actions/queryActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  Badge,
  Button
} from 'reactstrap';

import {Link} from "react-router-dom";

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/hero-bg/hero-leh.jpg';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';


/*
People: Adults ChildAbove6 ChildBelow6
isResponded
user.name
package.name
message
createdAt
*/

export default function QueriesAdminPanelTable({history}) {

  const dispatch = useDispatch();

  const queryList = useSelector(state => state.queryList)
  const {loading, error, queries} = queryList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const queryResponed = useSelector(state => state.queryResponed)
  const {success: successRespond} = queryResponed

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listQueries())
    } else {
      history.push('/Login')
    }
  },[dispatch,history,successRespond])

  const respondHandler = (id) => {
    if(window.confirm("Are You Sure")){
      dispatch(respondQuery(id))
    }
  }


  return (
    <>
      <Card className="card-box mt-3 mb-5">
        <div className="card-header">
          <div className="card-header--title mt-3">
              <span>Showing All <b>({queries ? (queries.length) : ""})</b> Queries</span>
          </div>
        </div>
        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/>: (
          <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '5%' }}>User</th>
                  <th style={{ width: '5%' }}>Package</th>
                  <th className="text-center">Adults</th>
                  <th className="text-center">Child(6-12)</th>
                  <th className="text-center">Child(-6)</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Responded</th>
                </tr>
              </thead>
              <tbody>
                {queries.map(query => (
                  <tr key={query._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <div
                          className=" text-black"
                          title="...">
                          <p><b>Name:</b> {query.user ? query.user.name : ""}</p>
                          <p><b>Email:</b> {query.user ? query.user.email : ""}</p>
                          <p><b>Contact:</b> {query.user ? query.user.contact : ""}</p>
                          <p><b>Message:</b> {query.message}</p>
                          <p><b>QueriedAt:</b> {query.createdAt}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title={query.package ? query.package.packageCode : ""}>
                          {query.package ? query.package.packageCode : ""}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                      <div>
                        {query.people ? query.people.adults : ""}
                      </div>
                  </td>
                  <td className="text-center">
                      <div>
                        {query.people ? query.people.childAbove6 : ""}
                      </div>
                  </td>
                  <td className="text-center">
                      <div>
                        {query.people ? query.people.childBelow6 : ""}
                      </div>
                  </td>
                  <td className="text-center">
                    {query.isResponded ? (
                      <Badge color="ezzyColor" className="h-auto py-0 px-3">
                        Responded
                      </Badge>
                    ) : (
                      <Badge color="warning" className="h-auto py-0 px-3">
                        Pending
                      </Badge>
                    )}
                  </td>
                  <td className="text-center">
                    <div>
                    {query.isResponded ? (
                       <Button
                       color="first"
                       size="sm"
                       className="btn-icon d-40 p-0 btn-animated-icon-sm">
                       <FontAwesomeIcon
                          icon={['far', 'smile']}
                         className="font-size-lg"
                       />
                     </Button>
                    ) : (
                      <Button
                      color="ezzyColor"
                      size="sm"
                      onClick={() => respondHandler(query._id)}
                      className="btn-icon d-40 p-0 btn-animated-icon-sm">
                      <FontAwesomeIcon
                        icon={['fas', 'reply']}
                        className="font-size-lg"
                      />
                    </Button>
                    )}
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
