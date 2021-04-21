import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {myListQueries} from "../../actions/queryActions";

import {
  Table,
  CardBody,
  Card,
  Badge
} from 'reactstrap';

import avatar1 from '../../assets/images/hero-bg/hero-leh.jpg';
import { Link } from 'react-router-dom';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function UserQueryTable({history}) {

  const dispatch = useDispatch();

  const myQueryList = useSelector(state => state.myQueryList)
  const {loading,error,queries} = myQueryList;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if(userInfo.name){
      dispatch(myListQueries())
    } else {
      history.push('/Login')
    }
  },[dispatch,history])

  return (
    <>
      {queries ? queries.length === 0 ? <h1 className="m-5">"No Queries Done Yet"</h1> : (
        <Card className="mb-5 mt-5">
        <div className="m-4">
          <h6>Showing All ({queries ? (queries.length):""}) of your Queries</h6>
        </div>
      {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
        <CardBody className="p-0">
        <div className="table-responsive-md">
          <Table hover striped className="text-nowrap mb-0">
            <thead className="thead-light">
              <tr>
                <th style={{ width: '40%' }}>Package</th>
                <th className="text-center">Adults</th>
                <th className="text-center">Child 6-12</th>
                <th className="text-center">Child Below 6</th>
                <th className="text-center">Message</th>
                <th className="text-center">Queried Date</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
            {queries.map(query => (
              <tr key={`${query._id}`}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-3">
                      <div className="avatar-icon">
                        <img alt="..." src={query.package ? query.package.packageImages[0] : ""} />
                      </div>
                    </div>
                    <div>
                      <Link
                        to={`/Package/${query.package ? query.package._id : ""}`}
                        className="font-weight-bold text-black"
                        title="...">
                        {query.package ? query.package.title : ""}
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <div>
                      <b>{query.people ? query.people.adults : ""}</b>
                  </div>
                </td>
                <td className="text-center">
                  <div>
                      <b>{query.people ? query.people.childAbove6 : ""}</b>
                  </div>
                </td>
                <td className="text-center">
                  <div>
                      <b>{query.people ? query.people.childBelow6 : ""}</b>
                  </div>
                </td>
                <td className="text-center">
                  <div>
                      <p>{query.message}</p>
                  </div>
                </td>
                <td className="text-center">
                  <div>
                      <b>{query.createdAt.substring(0,10)}</b>
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
              </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className=" d-flex justify-content-center">
            <AllPackagesPagination/>
        </div>
      </CardBody>
      )}
        
      </Card>
      ):"No Queries"}
    </>
  );
}
