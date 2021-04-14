import React from 'react';

import { Card } from 'reactstrap';

import {
  ClimbingBoxLoader,
} from 'react-spinners';
export default function BasicLoader({loading}) {
  return (
    <>
            <div
                className="block"
                style={{ width: '150px', height: '80px',margin:'auto' }}>
                <ClimbingBoxLoader color={'var(--ezzyColor)'} loading={loading} />
            </div>
    </>
  );
}
