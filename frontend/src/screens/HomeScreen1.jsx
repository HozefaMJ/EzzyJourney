import React, {useState, useEffect} from 'react';
import { Row, Col, Container } from 'reactstrap';

import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';
import SliderEzzy from 'components/Sliders/SliderEzzy';

//import packages from "../packages";

import stock3 from '../assets/images/hero-bg/hero-5.jpg';
import stock5 from '../assets/images/hero-bg/hero-4.jpg';
import axios from 'axios';

export default function HomeScreen1() {

  /**/
  const [packages,setPackages] = useState([])

  useEffect(() => {
    const fetchPackages = async () => {
      const {data} = await axios.get('/api/packages')

      setPackages(data)
    }

    fetchPackages()
  }, [])

  console.log(packages)
  

  return (
    <>
      <Header1/>
      {/*<HeroCarousels/>*/}
      <SliderEzzy/>
        <Container>
          
          
            <h2 className="mt-5">Latest Packages:</h2>
            <Row>
              {packages.map(packagei => (
                <Col key={packagei._id} sm={12} md={10} lg={6} xl={3}>
                  <PackageCard packagei={packagei}/>
                </Col>
              ))}
            </Row>
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