import React from 'react'
import CardContainer from './components/CardContainer'
import Todo from './components/todoprc/Todo'
import UseReducer from './components/UsereducerHook/UseReducer'

const App = () => {
 
  return (
    <div className='bg-orange-100 min-h-screen'>
      <CardContainer/>
      <UseReducer/>
      <Todo/>
    </div>
  )
}

export default App