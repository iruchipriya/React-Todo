import React, { useState } from 'react';

export default function AddForm(props) {
  const [prio, setPrio] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const idChange = event => {
    setPrio(event.target.value);
  };

  const titleChange = event => {
    setTitle(event.target.value);
  };

  const descChange = event => {
    setDesc(event.target.value);
  };

  const submitTodo = event => {
    event.preventDefault();
    props.addTodo(prio, title, desc);
    setPrio('');
    setTitle('');
    setDesc('');
  };

  return (
    <>
      <form onSubmit={submitTodo}>
        <label htmlFor="prio"> Priority</label>
        <input type="number" value={prio} id="prio" onChange={idChange} />
        <br /> <br />
        <label htmlFor="todo"> Title</label>
        <input type="text" id="todo" value={title} onChange={titleChange} />
        <br /> <br />
        <label htmlFor="desc"> Desc</label>
        <input type="text" id="desc" value={desc} onChange={descChange} />
        <br /> <br />
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </>
  );
}
