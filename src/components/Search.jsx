import React, { useEffect } from 'react';

export default function Search(props) {
  const [Enttext, setEntText] = useEffect('');

  const searchHandler = event => {
    setEntText(event.target.value);
  };

  const searchFunction = event => {
    event.preventDefault();
    props.searchfnc(event.target.value);
    setEntText('');
  };
  return (
    <>
      <form onSubmit={searchFunction}>
        <label htmlFor="search"> Search</label>
        <input
          type="text"
          id="search"
          value={Enttext}
          onChange={searchHandler}
        />
        <button type="submit" className="btn btn-sm btn-success">
          Search
        </button>
      </form>
    </>
  );
}
