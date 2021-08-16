import React, { useContext } from 'react';
import TodosContext from '../context';
import '../App.css';

const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} ToDos` : 'Nothing ToDO';
  return (
    <div className='container'>
      <h1 className='title'>{title}</h1>
      <ul className='list'>
        {state.todos.map((todo) => (
          <li className='items' key={todo.id}>
            <span
              onDoubleClick={() => dispatch({ type: 'TOOGLE', payload: todo })}
              className={`text ${
                todo.complete && ' text-gray line-through '
              }  `}
            >
              {todo.text}
            </span>

            <i
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
              className='fa fa-trash del'
            ></i>
            <i
              onClick={() => {
                dispatch({ type: 'EDIT_TODO', payload: todo });
              }}
              className='fa fa-edit edit '
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
