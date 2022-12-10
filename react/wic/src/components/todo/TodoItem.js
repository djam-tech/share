import React from 'react'

export default function TodoItem(props) {
  const {id, title, completed, togleCompleted, removeTodo} =props
  return(
    <div className='todo-item'>
     <input type="checkbox" name="" 
     checked={completed}
     onChange={()=>togleCompleted(id)}
     />
     <p
      style={completed?{
        textDecoration:'line-through'
      }:{}}
     >{title}</p>
     <button 
     onClick={()=>removeTodo(id)}
     >X</button>
 </div>
  )

}














// const {id, title, completed, toogleCompleted, removeTod} = props
// return (
// <div className='todo-item'>
//     <input type="checkbox" name="" checked={completed}
//     onChange={()=>toogleCompleted(id)}
//     />
//     <p>{title}</p>
//     <button 
//     onClick={()=>removeTod(id)}
//     >X</button>
// </div>
// )
