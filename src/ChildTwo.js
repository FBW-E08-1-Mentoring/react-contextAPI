import React from 'react'
import GrandChildTwo from "./GrandChildTwo"
export default function ChildTwo() {
    console.log("child two ......")
  return (
    <div><h1>This is Child Two </h1>
    <GrandChildTwo/>
    </div>
  )
}
