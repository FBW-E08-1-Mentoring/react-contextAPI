import React,{useContext} from 'react'
import { MyContext } from './Container'

export default function GrandChildOne() {
  console.log("grandchild one .......")
  const store = useContext(MyContext)
  return (
    <div><h2>this is GrandChildOne </h2>
    <button onClick={()=>store.setCounter(store.counter+1)}>increment counter</button>
    </div>
  )
}
