import React from 'react';
import { Button } from 'reactstrap';

import {useDispatch} from "react-redux";
import { logout } from 'actions/userActions';

export default function LogoutButton() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        //console.log('logout')
        dispatch(logout())
    }

  return (
    <>
        <Button onClick={logoutHandler} outline className="btn-pill m-2" color="danger">
          <b>
              Logout
          </b>
        </Button>
    </>
  );
}
