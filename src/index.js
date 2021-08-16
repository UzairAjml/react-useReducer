import React from 'react';
import ReactDOM from 'react-dom';
import { useContext, useReducer } from 'react';
import TodosContext from './context';
import TodoForm from './components/TodoForm';
import todosReducer from './reducer';
import TodoList from './components/TodoList';

const App = () => {
  const initState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
