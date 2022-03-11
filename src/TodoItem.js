import React from 'react'

export default function TodoItem({todo}) {
    console.log("todo List item ......")
  return (
    <li>{todo.text}</li>
  )
}
