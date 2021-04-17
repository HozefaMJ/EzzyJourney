import React from 'react';
import { Container} from 'reactstrap';
import {useSelector} from "react-redux";
import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";

import PackageCard from 'components/Cards/PackageCard';
import HeroCarousels from 'components/carousels/HeroCarousels';
import StickyWhatsappButton from 'components/Buttons/StickyWhatsapp';
import AllPackagesPagination from 'components/Pagination/AllPackagesPagination';
import UserProfileTab from 'components/Tabs/UserProfileTab';
import RightIconLink from 'components/Buttons/RightIconLink';

export default function HomeScreen1({history}) {
  
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  return (
    <>
      <Header1/>
        <Container>
            {userInfo && userInfo.isAdmin && (
              <RightIconLink Name="Admin Panel" link="/AdminPanel" icon="user-cog"/>
            )}
            
            <UserProfileTab history={history}/>
        </Container>
      <Footer1/>
    </>
  );
}