import React,{createContext, useState} from 'react'
export const MyContext = createContext()


export default function Container(props) {
    const [counter, setCounter]=useState(0)
    const [todos,setTodos]=useState([{id:1,text:"coding",done:false}])

  return (
    <MyContext.Provider value={{counter,setCounter,todos,setTodos}}>
            {props.children}
    </MyContext.Provider>
  )
}


