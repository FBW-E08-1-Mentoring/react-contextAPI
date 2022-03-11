import React from 'react'
import GrandChildOne from "./GrandChildOne"
export default function ChildOne() {
    console.log("child One .......")
  return (
    <div><h1>This is Child One </h1>
        <GrandChildOne/>
    </div>
  )
}
