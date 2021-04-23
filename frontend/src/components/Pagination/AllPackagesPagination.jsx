import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function AllPackagesPagination({page,pages,keyword="",isAdmin=false}) {
  return pages > 1 && (
    <>
        <div className="d-flex align-items-center justify-content-center flex-wrap m-5">
          <Pagination className="pagination-success">
            {[...Array(pages).keys()].map(x => (
              <PaginationItem active={x+1 === page} key={x+1}>
                <PaginationLink href={keyword ? (`/search/${keyword}/page/${x+1}`) : (`/page/${x+1}`)}>
                  {x+1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
          </Pagination>
        </div>
    </>
  )
}


/*
(
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap m-5">
        <Pagination className="pagination-info">
          <PaginationItem disabled>
            <PaginationLink first href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink
              previous
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
      
    </>
  );
*/
