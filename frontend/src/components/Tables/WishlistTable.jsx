import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux"

import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import {wishlistPackages, removeWishlist} from "../../actions/userActions";

import {
  Table,
  CardBody,
  Card,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

export default function WishlistTable({history}) {

  const dispatch = useDispatch();

  const userWishlist = useSelector(state => state.userWishlist)
  const {loading,error,packages} = userWishlist;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if(userInfo.name){
      dispatch(wishlistPackages())
    } else {
      history.push('/Login')
    }
  },[dispatch,history])

  const removeHandler = (id) => {
    if(window.confirm("Are You Sure")){
      dispatch(removeWishlist(id))
      
    }
  }

  return (
    <>
      {packages ? packages.length === 0 ? <h1 className="m-5">"No Package Wishlisted Yet"</h1> : (
        <Card className="mb-5 mt-5">
        <div className="m-4">
          <h6>Showing All ({packages ? (packages.length):""}) of your Wishlisted Packages</h6>
        </div>
      {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
        <CardBody className="p-0">
        <div className="table-responsive-md">
          <Table hover striped className="text-nowrap mb-0">
            <thead className="thead-light">
              <tr>
                <th className="text-center" style={{ width: '40%' }}>Package</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
            {packages.map(packagei => (
              <tr key={`${packagei._id}`}>
                <td className="text-center">
                  
                    <div className="text-center">
                      <Link
                        to={`/Package/${packagei.package}`}
                        className="font-weight-bold text-black text-center"
                        title="...">
                        {packagei.name}
                      </Link>
                    </div>
                 
                </td>
                <td className="text-center">
                    
                    <Button
                       color="danger"
                       size="sm"
                       onClick={() => removeHandler(packagei._id)}
                       className="btn-icon d-40 p-0 btn-animated-icon-sm">
                       
                       <FontAwesomeIcon
                          icon={['fas', 'heart-broken']}
                         className="font-size-lg"
                       />
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
      ):"No Queries"}
    </>
  );
}
