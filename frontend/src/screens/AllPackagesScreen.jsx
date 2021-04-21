import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { Row, Col, Container } from 'reactstrap';

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';

import BasicLoader from "../components/LoadingIndicators/BasicLoader";
import ErrorAlert from "../components/Alerts/ErrorAlert";

import {listPackages} from "../actions/packageActions"

export default function AllPackageScreen() {

  const dispatch = useDispatch()

  const packageList = useSelector((state) => state.packageList)

  const {loading,error,packages} = packageList;

  useEffect(() => {
    dispatch(listPackages())
  }, [dispatch])

  return (
    <>
      <Header1/>
        <Container>
          
          
            <h2 className="mt-5">Latest Packages:</h2>
            {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
               <Row>
               {packages.map(packagei => (
                 <Col key={packagei._id} sm={12} md={10} lg={6} xl={3}>
                   <PackageCard packagei={packagei}/>
                 </Col>
             ))}
             </Row>
            )}
           
            <Row>
              <Col lg={12}>
                <AllPackagesPagination/>
              </Col>
            </Row>
         
        </Container>
      <Footer1/>
    </>
  );
}