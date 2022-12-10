import React from "react";

export default function TodoAdd(props) {
  return (
    <div>
      <input
        type="text"
        value={props.newTodoTitle}
        onChange={(e)=>props.setNewTodoTitle(e.target.value)}
              />
      <button 
      onClick={()=>props.addTodo()}
      > Add </button>
    </div>
  );
}

{
  /* <input type="text" onChange={(e)=>props.setNewTodoTitle(e.target.value)} />
<button 
onClick={()=>props.addTodo()}
> Add </button>     */
}

//meterial
