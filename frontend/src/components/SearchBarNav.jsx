import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'reactstrap';

export default function SearchBarNav() {

  const [searchStatus6, setSearchStatus6] = useState(false);
  const toggleSearch6 = () => setSearchStatus6(!searchStatus6);

  return (
    <>
      <div
        className={clsx('search-wrapper search-wrapper--alternate', {
          'is-active': searchStatus6
        })}>
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch6}
          onBlur={toggleSearch6}
          placeholder="Search Packages"
          className="rounded-pill"
        />
      </div>
    </>
  );
}
