import React,{useContext} from 'react'
import {MyContext} from "./Container"

export default function GrandChildTwo() {
  console.log("grandchild two .......")
  const store = useContext(MyContext)

  return (
    <div>  <div><h2>this is GrandChildTwo </h2>
      <h2>here we have counter value : {store.counter}</h2>
    </div></div>
  )
}
