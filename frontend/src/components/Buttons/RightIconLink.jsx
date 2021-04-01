import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function RightIconLink({link,Name,icon}) {
  return (
    <>
        <Link to={link}>
            <Button color="second" className="m-2">
                <span className="btn-wrapper--label">{Name}</span>
                <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', `${icon}`]} />
                </span>
            </Button>
        </Link>      
    </>
  );
}
