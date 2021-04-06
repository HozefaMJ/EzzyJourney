import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rating from 'react-rating';
export default function LargeRating({rating,unClickable}) {
  return (
    <>
      <div className="d-flex align-items-left justify-content-left flex-wrap" style={{pointerEvents: unClickable ? 'none' : ' '}}>
        <Rating
          initialRating={rating}
          stop={5}
          emptySymbol={
            <span className="text-black-50 opacity-3">
              <FontAwesomeIcon size="2x" icon={['far', 'star']} />
            </span>
          }
          fullSymbol={
            <span>
              <FontAwesomeIcon size="2x" color="gold" icon={['fas', 'star']} />
            </span>
          }
        />
      </div>
    </>
  );
}
