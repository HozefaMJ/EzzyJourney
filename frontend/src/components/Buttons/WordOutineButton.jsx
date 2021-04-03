import React from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";

export default function WordOutlineButton({route,buttonName}) {
  return (
    <>
    <Link to={route}>
        <Button outline className="btn-pill m-2" color="secondary">
          <b>
              {buttonName}
          </b>
        </Button>
    </Link>
    </>
  );
}
