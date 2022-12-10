import React, { useState, useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "realiser le mini-projet tech-web",
      completed: false,
    },
    {
      id: 1,
      title: "realiser la presentation tech-web",
      completed: false,
    },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const togleCompleted = (id) => {
    // const todo = todos.find(el=>el.id==id)
    // const newTodo = {...todo, completed:!todo.completed}
    // const newTodos = [...todos.filter(el=>el.id!==id), newTodo]
    // setTodos(newTodos.sort((a,b)=>a.id>b.id?1:-1))
    
    // const newTodos = todos.map(el=>
    //   el.id===id?{...el, completed:!el.completed}:{...el}
    // )

    // const newTodos = todos.map(el=>{
    //  return el.id===id?{...el, completed:!el.completed}:{...el}
    // })
    const newTodos = todos.map((el) => {
      if (el.id === id) return { ...el, completed: !el.completed };
      else return { ...el };
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    const maxId = todos[todos.length - 1].id + 1;
    const newTodo = { id: maxId, title: newTodoTitle, completed: false };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('')
  };

  const removeTodo = id =>{
    const newTodos = todos.filter(el=>el.id!==id)
    setTodos(newTodos)
  }

  console.log("TODOS", todos);
  console.log("NEW_TODO_TITLE", newTodoTitle);
  return (
    <div className="todos-cont">
      <h2>TODO APP</h2>
      <TodoAdd 
      setNewTodoTitle={setNewTodoTitle} 
      newTodoTitle={newTodoTitle}
      addTodo={addTodo} />
      {todos.map((el) => (
        <TodoItem
          id={el.id}
          title={el.title}
          completed={el.completed}
          togleCompleted={togleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
// const [todos, setTodos] = useState([
//   {
//     id: 0,
//     title: "realiser le mini-projet tech-web",
//     completed: false,
//   },
//   {
//     id: 1,
//     title: "realiser la presentation tech-web",
//     completed: false,
//   },
// ]);
// const [newTodoTitle, setNewTodoTitle] = useState("");

// const addTodo = () => {
//   const newTodo = { id: todos.length+1, title: newTodoTitle, completed: false };
//   setTodos([...todos, newTodo]);
// };

// const toogleCompleted = (id) => {
//   const todo = todos.find(el=>el.id===id)
//   const newTodo = {...todo, completed:!todo.completed}
//   const todosWithoutTodo = todos.filter(el=>el.id!==id)
//   setTodos([...todosWithoutTodo, newTodo].sort((a,b)=>a.id>b.id?1:-1))
// };

// const removeTod = (id) => {
//   const newTodos = todos.filter(el=>el.id!==id)
//   setTodos(newTodos)

// };

// console.log("TODOS", todos);
// console.log("NEW-TODO", newTodoTitle);

// return (
//   <div className="todos-cont">
//     <h2>TodoApp</h2>
//     <TodoAdd setNewTodoTitle={setNewTodoTitle} addTodo={addTodo} />
//     <div className="todos-list">
//       {todos.map((el) => (
//         <TodoItem
//           key={el.id}
//           id={el.id}
//           title={el.title}
//           completed={el.completed}
//           toogleCompleted={toogleCompleted}
//           removeTod={removeTod}
//         />
//       ))}
//     </div>
//   </div>
// );
