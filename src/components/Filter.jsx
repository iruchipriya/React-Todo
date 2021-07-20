import React from 'react';
import Todo from './Todo';

export default function Filter(props) {
  const onFilter = tt => {
    console.log('tt', tt.target.value);
    props.filterHandler(tt.target.value);
  };

  return (
    <>
      <div>
        <label> Action</label>
        <select onChange={e => onFilter(e)}>
          <option value="all">All</option>
          <option value="notcompleted">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <br /> <br />
      <div>
        <label> Priority</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </>
  );
}
