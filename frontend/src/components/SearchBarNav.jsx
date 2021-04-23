import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Form, Button } from 'reactstrap';

export default function SearchBarNav({history}) {

  const [searchStatus6, setSearchStatus6] = useState(false);
  const toggleSearch6 = () => setSearchStatus6(!searchStatus6);

  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()){
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <>
      <Form  onSubmit={submitHandler} inline>
        <div
          className={clsx('search-wrapper search-wrapper--alternate mt-1', {
            'is-active': searchStatus6
          })}>
          <Input
            type="search"
            name="q"
            color="light"
            onFocus={toggleSearch6}
            onBlur={toggleSearch6}
            placeholder="Search Packages"
            className={`rounded-pill`}
            onChange={e => setKeyword(e.target.value)}
          />
          <Button outline type="submit" size="sm" className="rounded-pill">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </Button>
        </div>
        
      </Form>
    </>
  );
}
