import React, {useEffect, useState} from 'react';
import { Row, Col, Container } from 'reactstrap';
import axios from "axios";
import {useDispatch,useSelector} from "react-redux"

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';
import SliderEzzy from 'components/Sliders/SliderEzzy';

//import packages from "../packages";
import {listPackages} from "../actions/packageActions"

export default function HomeScreen1() {

  const dispatch = useDispatch()

  const packageList = useSelector((state) => state.packageList)

  const {loading,error,packages} = packageList;

  useEffect(() => {
    dispatch(listPackages())
  }, [dispatch])

  return (
    <>
      <Header1/>
      {/*<HeroCarousels/>
      {packages.length===0 ? <h1>Loading</h1> : <h1>Loaded</h1>}*/}
      <SliderEzzy/>
        <Container>
          
          
            <h2 className="mt-5">Latest Packages:</h2>
            {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> : (
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



// Component Level Integration
/*
  const [packages,setPackages] = useState([])

  useEffect(() => {
    const fetchPackages = async () => {
      const {data} = await axios.get('/api/packages')

      setPackages(data)
    }

    fetchPackages()
  }, [])
*/


/*
// Redux Integration
 const dispatch = useDispatch()

  const packages = []

  useEffect(() => {
    dispatch(listPackages())
  }, [dispatch])


*/