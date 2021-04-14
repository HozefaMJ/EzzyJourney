import React from 'react';

import { Card } from 'reactstrap';

import {
  ClimbingBoxLoader,
} from 'react-spinners';
export default function ErrorAlert({error}) {
  return (
    <>
            <div
                className="bg-neutral-danger">
                <h6 className="text-danger">{error}</h6>
            </div>
    </>
  );
}
