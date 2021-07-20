import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <>
      {props.todolist.length === 0 && <p> No Todo to display </p>}
      {props.todolist.length > 0 &&
        props.todolist.map(todo => {
          return (
            <Todo
              todo={todo}
              key={todo.key}
              onDelete={props.onDelete}
              onDone={props.onDone}
            />
          );
        })}
    </>
  );
}
