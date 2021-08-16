import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import TodosContext from '../context';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: 'UPDATE_TODO', payload: todo });
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo });
    }
    setTodo('');
  };

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    } else {
      setTodo('');
    }
  }, [currentTodo]);

  return (
    <form className='form' onSubmit={submitHandler}>
      <input
        type='text'
        className='task'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      {/* <button type='submit'></button> */}
    </form>
  );
};

export default TodoForm;
