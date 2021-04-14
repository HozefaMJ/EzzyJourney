import React from 'react';


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
