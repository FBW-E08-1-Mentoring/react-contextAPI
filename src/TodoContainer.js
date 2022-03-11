import React, { useContext } from 'react'
import { MyContext } from './Container'
import TodoItem from './TodoItem'

 function TodoContainer() {
    const {todos} = useContext(MyContext)

    console.log("todo container ......")
  return (
    <div>TodoContainer
    <ul>
        {todos.map(todo=>{
            return ( <TodoItem key={todo.id} todo={todo}/>)
        })}
    </ul>
    </div>
  )
}
export default TodoContainer