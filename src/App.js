import Task from "./components/Task";
import { useState } from 'react'
import logo from './logo.png'

function App(props) {

  const [allTasks, setallTasks] = useState([])


  const displayTasks = (allTasks) => {
    let myTasks = [];

    for (let i = 0; i < allTasks.length; i++) {
      myTasks.push(<Task key={i} id={i} text={allTasks[i]} />)

    }

    return myTasks
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setallTasks(allTasks.concat([event.target.task.value]));
    document.getElementsByTagName('input')[0].value = null;

  }


  return (
    <div className="App">
      <div className="header">
        <img src={logo} />
        <h1>#1 Todo App</h1>
      </div>

      <div className="addTask">
        <form onSubmit={handleSubmit}>
          <input type="text" name='task' />
          <input type="submit" value="Add Task" />
        </form>
      </div>

      <div className="tasksContainer">
        {displayTasks(allTasks)}
      </div>

    </div>
  );
}

export default App;
