import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'




function App() {

  const [list, setList] = useState('')

  function handleSubmit() {
    console.log('submit');
  }


  return (
    <div>
      App
    <ToDoForm />
    <ToDoList />
    </div>
  )
}

export default App