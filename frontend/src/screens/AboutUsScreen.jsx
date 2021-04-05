import React from 'react';

import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';

import ImgCompPackage from "../components/Sliders/SliderPackage/ImgCompPackage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button,Card, CardTitle, CardBody } from 'reactstrap';

import I2 from "../assets/images/hero-bg/hero-leh-2.jpg";
import RightIconLink from 'components/Buttons/RightIconLink';


export default function AboutUsScreen() {
  return (
    <>
      <Header1/>
      <ImgCompPackage src={I2}/>
      <Container>
        <div className="mt-3">
          <RightIconLink Name="Update About Us" link="/UpdateAboutus" icon="plus"/>
        </div>
        <div>
          <div>
              <Card className="card-box mb-5 mt-3">
                <CardBody>
                <CardTitle className="font-weight-bold font-size-xl mb-4 text-center">
                    ABOUT US:
                </CardTitle>
                <div className="divider"/>
                  <div  className="p-4 m-4 text-center">
                    <p style={{fontSize:'22px'}}>
                        21 years ago, in 1993, Sanskruti was started by Ms Falguni Parekh a Math Graduate
                        and Mamta Shah a Law Graduate. Sharing a common interest for Travel and a strong
                        desire to do something different gave birth to Sanskruti Children's Club, an
                        amalgamation of our love for teaching young adults and our deeply rooted passion for
                        nature and adventure. Today it has metamorphosed into Sanskruti Vacations, with
                        strong founded pillars and mile stones of Sanskruti Travels and Sanskruti Holidays. We
                        have marched ahead to achieve our farfetched dreams. It gave us a platform to see the
                        world with a purpose. Looking back 25 Years , we get a sense of pride and intrigue, as
                        we have come long way accomplishing new milestones, and achieving new goals
                        pushing our threshold to explore something beyond.
                    </p>
                  </div>
                </CardBody>
              </Card>
          </div>
        </div>
      </Container>
      <Footer1/>
    </>
  );
}

