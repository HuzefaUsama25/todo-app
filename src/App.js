import Task from "./components/Task";
import { useState } from 'react'

function App(props) {
  /*
  let tasks =
      [
        "Do the Dishes",
        "Complete HomeWork",
        "Take a Bath",
        "Go to Swim",
        "Walk the pet",
        "Study for Exam",
        "Do Programming",
        "Complete Task App",
        "Update Instagram Biography"
      ];
  */

  const [allTasks, setallTasks] = useState([])
  const [newTask, setnewTask] = useState('')


  const displayTasks = (allTasks) => {
    let myTasks = [];

    for (let i = 0; i < allTasks.length; i++) {
      myTasks.push(<Task key={i} id={i} text={allTasks[i]} />)

    }

    return myTasks
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    allTasks.push(newTask);
    setallTasks(allTasks);
  }


  return (
    <div className="App">

      <div className="addTask">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setnewTask(e.target.value)} value={newTask} />
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
