import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [toDoList, setToDoList] = useState([])

  let saveToDoList = (event) =>
  {
    let toName = event.target.toName.value;

    if(!toDoList.includes(toName))
    {
      let finalToDoList = [...toDoList, toName];
      setToDoList(finalToDoList);
    }
    else
    {
      alert('Already Exists')
    }

    event.preventDefault();
  }
let list = toDoList.map((value,index) =>
{
  return(
    <ToDoListItems key={index} value = {value} 
    indexNumber = {index} 
    toDoList = {toDoList} 
    setToDoList = {setToDoList}
    /> 
  )
})

  return (
    <div className="App">
     <marquee behavior="alternate" scrollamount="20" scrolldelay="10">
    <h1>To Do List</h1>
</marquee>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toName'></input>
        <button>
          SAVE
        </button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems ({value, indexNumber, toDoList, setToDoList})
{
  let [status, setStatus] = useState(false);

  let deleteRow = () =>
  {
    let finalData = toDoList.filter((v, i) => i != indexNumber);
    setToDoList(finalData);
  }

  let checkStatus = () =>
  {
    setStatus(!status)
  }

  return(
    <li className={status ? 'completeToDo' : ''} onClick={checkStatus}>
      
      {value} <span onClick={deleteRow}>
        &times;
      </span>
    </li>
    
  )
}
