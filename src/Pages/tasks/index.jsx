import React from 'react'
import  ChangeTheme from '../../components/inputTheme'
import Count from '../../components/count'
import InputChange from '../../components/inputChange'
import "./style.css"
function Tasks() {
  return (
    <div className="task">
      <h1>Tasks</h1>
        <Count/>
        < ChangeTheme/>
        <InputChange/>
    </div>
  )
}

export default Tasks