import React, { useState } from 'react';
import './style.css';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

import Search from './components/Search';

export default function App() {
  const [todolist, settodoList] = useState([]);
  const [filterred, setFilterred] = useState([]);
  const [searchh, setSearfch] = useState([]);

  const [done, setDone] = useState(false);
  const [doneArray, setDoneArray] = useState([]);

  const filterHandler = drp => {
    if (drp === 'completed') {
      let todoF = todolist;
      let doneF = doneArray;
      let comp = [];
      for (let i = 0; i < todoF.length; i++) {
        if (doneF[i] === true) {
          comp.push(todoF[i]);
        }
      }
      setFilterred(comp);
    } else if (drp === 'notcompleted') {
      let todoF = todolist;
      let doneF = doneArray;
      let comp = [];
      for (let i = 0; i < todoF.length; i++) {
        if (doneF[i] === false) {
          comp.push(todoF[i]);
        }
      }
      setFilterred(comp);
    } else if (drp === 'all') {
      let comp = todolist;
      setFilterred(comp);
    }
  };

  const addTodoHandler = (uprio, utitle, udesc) => {
    let a = doneArray;
    a.push(false);
    setDoneArray(a);
    return settodoList(prevList => {
      return [
        ...prevList,
        {
          prio: uprio,
          title: utitle,
          desc: udesc,
          key: Math.random().toString()
        }
      ];
    });
  };

  const onDelete = todo => {
    console.log('delete of todo', todolist);
    settodoList(
      todolist.filter(element => {
        return element !== todo;
      })
    );
  };

  const onDone = todo => {
    let index = todolist.indexOf(todo);
    let d = doneArray;
    d[index] = true;
    setDoneArray(d);
  };

  const searchfncHandler = text => {
    let arr = todolist;
    let earr = [];
    for (let i = 0; i < todolist.length; i++) {
      if (arr[i].title.trim().contains(text)) {
        earr.push(arr[i]);
      }
    }
    setSearfch(earr);
  };

  return (
    <>
      <header> To Do List </header>
      <main>
        <AddForm addTodo={addTodoHandler} />
        <Filter filterHandler={filterHandler} />
        <Search searchfnc={searchfncHandler} />
        <TodoList todolist={todolist} onDelete={onDelete} onDone={onDone} />
        <h2> Search </h2>
        <TodoList todolist={searchh} onDelete={onDelete} onDone={onDone} />

        <h1> Filter </h1>
        <TodoList todolist={filterred} onDelete={onDelete} onDone={onDone} />
      </main>
    </>
  );
}
