import React, { useState } from 'react';
import '../style.css';

export default function Todo(props) {
  const [isDone, setIsDone] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.todo);
  };

  const doneHandler = () => {
    props.onDone(props.todo);
    setIsDone(true);
  };

  return (
    <>
      <ul className={isDone ? 'done' : 'notdone'}>
        <li>Priority : {props.todo.prio}</li>
        <li>Title : {props.todo.title}</li>
        <li>Desc : {props.todo.desc}</li>
      </ul>
      <button onClick={deleteHandler} className="btn btn-sm btn-danger">
        Delete
      </button>
      <button onClick={doneHandler} className="btn btn-sm btn-success">
        Done
      </button>
    </>
  );
}
