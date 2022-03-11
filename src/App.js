
import React, { createContext, useState } from 'react';
import Check from './Check';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import TodoContainer from './TodoContainer';

//1. createContext
/* export const MyContext = createContext()
console.log(MyContext) */

//2.wrap you whole application into MyContext.Provider

//3. provide your context with value

//4. use your context from any component ( useContext hook)



function App() {
 
  console.log("App ..... ")
  return (
    <div className="App">
      <h1>This is App Component  ---Parent </h1>
      <ChildOne />
      <ChildTwo />
      <TodoContainer/>
    </div>

  );
}

export default App;