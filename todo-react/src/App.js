import React, {useState} from 'react';
import './App.css';
import data from './Data.json'
//Components
import Header from './Header';
import ToDoList from './ToDoList';



function App() {
  const [toDoList, setToDoList] = useState(data)


  return (
    <div className='app'>
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  )
}

export default App