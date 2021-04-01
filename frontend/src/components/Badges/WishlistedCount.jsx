import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, UncontrolledTooltip, Button } from 'reactstrap';

export default function WishlistedCount({count}) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="bg-brand-instagram text-white rounded" id="TooltipExample1">
            <span className="mr-2">
                <FontAwesomeIcon color="danger" icon={['far', 'heart']} />
            </span>
            <span>
                {count}
            </span> 
        </Button>
        <UncontrolledTooltip target="TooltipExample1" placement="top">
          Times Wishlisted
        </UncontrolledTooltip>
      </div>
    </>
  );
}
