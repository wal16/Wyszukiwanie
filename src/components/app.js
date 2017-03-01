import React from 'react'
import  Nav from './nav/nav'


const App = (props) => (
  <div>
   <Nav/>
    {props.children}
  </div>
)

export default App