import React from 'react';

import Footer1 from 'components/Footer1';
import Header1 from 'components/Header1';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button,Card } from 'reactstrap';

import HeroPackageCarousels from "../components/carousels/HeroPackageCarousels";
import PackagePrice from 'components/CountUps/PackagePrice';
import PackageTitleCard from 'components/Cards/PackageTitleCard';
import ServiceIconCard from 'components/Cards/ServiceIconCard';
import PlacesCoveredCard from 'components/Cards/PlacesCoveredCard';
import PackageDescriptionCard from 'components/Cards/PackageDescriptionCard.';
import Reviews from 'components/Ratings/Reviews';
import AllReviews from 'components/Ratings/AllReviews';
import SliderEzzy from 'components/Sliders/SliderEzzy';

export default function Package() {
  return (
    <>
      <Header1/>
      <PackageTitleCard title="Ladakh Dreams" count={135} rating={4} reviewCount={6}/>
      {/*<HeroPackageCarousels/>*/}
      <SliderEzzy/>
      <Container>
        <div>
          <div>
            <PackagePrice adult={15000} child612={12000} child6={10000}/>
          </div>
          <div>
            <ServiceIconCard/>
          </div>
          <div>
            <PackageDescriptionCard 
            days={12}
            places="Manali| Shimla| Ladakh| Leh"
            description="Description: uidhuids sahuidhd dhuidehwed d dhuidehwed uidhuids sahuidhd dhuidehwed d dhuidehwed uidhuids sahuidhd dhuidehwed d dhuidehwed uidhuids sahuidhd dhuidehwed d dhuidehwed"
            inclusions="- 2 Night Accommodation in Katra at 3-Star Hotel

            - 1 Night Accommodation in Patnitop at 3-Star Hotel
            
            - 3 Night Accommodation in Srinagar at 3-Star Hotel 
            
            - 1 Night Accommodation in Pahalgam at 3-Star Hotel
            
            - 1 Night Accommodation in Jammu at 3-Star Hotel
            
            - Meals on Breakfast & Dinner basis at Hotel
            
            - Sightseeing as per the below itinerary
            
            - Shikara Ride
            
            - All transfers by Air-conditioned private vehicles
            
            - All applicable taxes "
            exclusions="- 2 Night Accommodation in Katra at 3-Star Hotel

            - 1 Night Accommodation in Patnitop at 3-Star Hotel
            
            - 3 Night Accommodation in Srinagar at 3-Star Hotel 
            
            - 1 Night Accommodation in Pahalgam at 3-Star Hotel
            
            - 1 Night Accommodation in Jammu at 3-Star Hotel
            
            - Meals on Breakfast & Dinner basis at Hotel
            
            - Sightseeing as per the below itinerary
            
            - Shikara Ride
            
            - All transfers by Air-conditioned private vehicles
            
            - All applicable taxes "
            itinerary="Day 01:- Jammu to Katra 

            Arrive in Jammu/Airport/Railway Station. You will be received and transferred to the Hotel for the overnight stay in Katra.
            
             
            
            Day 02:- Katra to Vaishnodevi | Chopper Ride
            
            Early Morning Leave for Mata Vashnovdevi Darshan –By Chopper and also return back by Chopper to Katra for overnight stay.
            
             
            
            Day 03:- Katra to Patnitop
            
            After Breakfast leave for a beautiful Hill Station known as Patnitop at a distance of 80 km from Katra –Patnitop is right at the National Highway commanding a superb view of Mountains all around –Peaceful and serene-Arrive in Patnitop and check in the Hotel and explore the environments.
            
             
            
            Day 04:- Patnitop to Srinagar
            
            After Breakfast drive towards Srinagar on National Highway Crossing Batot-Kud –Banihal Tunnel –Soon crossing the Banehal Tunnel –On the right-hand side is the Hexagonal Pool the Cheshma Verinag –A Huge crystal clear Pool of water surrounded by Moughal Style Walls –The pond is filled with millions of Trout Fish and the Pool is Source of River Jehlum – After the visit continue your drive to Valley of Kashmir –Arrive and check-in at the Hotel –Later Leave to Visit Moughal Gardens and Shikara Ride Return back to the Hotel for overnight stay and Dinner. 
            
             
            
            Day 05:- Srinagar - Gulmarg - Srinagar 
            
            After Breakfast drive to Gulmarg- Gulmarg is at a distance of 59 Kilometres from Srinagar towards the Northwest of Srinagar –The serpentine road to reach Gulmarg starts before 14 Kilometers –Gulmarg as is known the valley of Flowers is a huge valley surrounded by Mountains Explore this Green Valley which has a wonderful Golf Course. The Gulmarg has also Gandola which takes one too high into the mountains similar to world-famous Titles of Switzerland. Enjoy this Gandola ride and return to Hotel to explore the valley of Gulmarg – You can also visit Rani Temple which is again famous due to shoot in Hindi Movie. Drive back to Srinagar –Soon after you leave the Gulmarg a few Kilometers away –stop at a place known as ZIG –and enjoy the view of Nanga Parbat and if weather is clear you can also see some peaks of K2 –and upon arrival in Srinagar check into the Hotel for overnight stay and Dinner.
            
             
            
            Day 06:- Srinagar - Sonmarg - Srinagar
            
            After Breakfast Leave for a visit to Sonamarg-Enroute Mansbal Lake –Mata Kheerbhawani Temple –The Distance from Srinagar is 80 Kms and the Journey takes 2.15 hours to reach the Sonmarg- Arrive in Sonmarg –explore the Valley –The Valley is the base point for Amarnath Holy Cave and Kargil on to Leh –You can visit the Famous Thajwas Glacier by hiring ponies –Return back on the same route to Srinagar and check in the Houseboat for overnight stay and Dinner.
            
             
            
            Day 07:- Srinagar –Pahalgam
            
            After Breakfast Drive to Pahalgam. The distance is 88 km from Srinagar and on way – You will visit Saffron fields at Pampore – Ruins of Avantipura believed to be the built by Pandavas during exile followed by Martand Temple –and finally on to Pahalgam – Check in the Hotel and then explore the Bazaars and Valley of Pahalgam Once no Indian Movie was complete without shooting songs at Valley of Pahalgam- The River Lider flows in midst of the Valley. Return back to the Hotel for overnight stay and Dinner. 
            
             
            
            Day 08:- Pahalgam-Patnitop - Jammu
            
            After Breakfast –Drive back to Jammu enroute Ashi Mukam-The Place is where qawali of Bajrangi Biajan Was Shot –It is a revered place and also believed that Jesus lived and meditated here-Continue the drive till arrival in Jammu –The Temple City of India. Check-in the Hotel and Relax overnight and dinner at Hotel. 
            
             
            
            Day 09:- Departure
            
            After Breakfast –You will be transferred to the Railway Station or Airport for your onward Journey."
            />
          </div>
        </div>
        <div id="reviews">
          <Reviews/>
        </div>
      </Container>
      <Footer1/>
    </>
  );
}

