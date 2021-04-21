import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {listPackages,deletePackage} from "../../actions/packageActions";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';
import RightIconLink from 'components/Buttons/RightIconLink';


export default function PackagesAdminPanelTable({history}) {

  const dispatch = useDispatch();

  const packageList = useSelector((state) => state.packageList)
  const {loading,error,packages} = packageList;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const packageDelete = useSelector(state => state.packageDelete)
  const {success: successDelete} = packageDelete

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listPackages())
    } else {
      history.push('/Login')
    }
  },[dispatch,history,successDelete])

  const deleteHandler = (id) => {
    if(window.confirm('Are You Sure')){
      dispatch(deletePackage(id))
    }
  }

  return (
    <>
      <Card className="card-box mb-5 mt-4">
            <div className="card-header pr-2 d-flex justify-content-between">
                <span className="card-header--title m-4">
                  Showing All ({packages ? (packages.length): ""}) Packages
                </span>
                <div className="card-header--actions">
                    <RightIconLink Name="Add Packages" link="/AddPackages" icon="plus"/>
                </div>
            </div>
        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/>: (
          <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Package</th>
                  <th className="text-center">Created At</th>
                  <th className="text-center">Updated At</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {packages.map(packagei => (
                  <tr key={packagei._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={packagei.packageImages[0]} />
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/Package"
                          className="font-weight-bold text-black"
                          title="...">
                          {packagei.packageCode}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>{packagei.createdAt.substring(0,10)}</b>
                        <p>  -</p>
                        <b>({packagei.createdAt.substring(12,16)} IST)</b>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                        <b>{packagei.updatedAt.substring(0,10)}</b>
                        <p>  -</p>
                        <b>({packagei.updatedAt.substring(12,16)} IST)</b>
                    </div>
                  </td>
                  <td className="text-center text-primary">
                    <Link to={`/EditPackage/${packagei._id}`}>
                      <FontAwesomeIcon color="primary" icon={['fas', 'user-edit']} />
                    </Link>
                  </td>
                  <td className="text-center text-danger">
                    <Button color="danger" size="sm" onClick={() => deleteHandler(packagei._id)}>
                      <FontAwesomeIcon color="danger" icon={['fas', 'trash-alt']} />
                    </Button>
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
    </>
  );
}
