import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState ([
    {
      id : 1, 
      text : 'go fuck',
      day : 'Feb 5 at 2:30 pm',
      reminder : true, 
    },
    {
      id : 2, 
      text : 'go suck',
      day : 'Feb 5 at 2:30 pm',
      reminder : true, 
    },
    {
      id : 3, 
      text : 'go do whatever',
      day : 'Feb 5 at 2:30 pm',
      reminder : false, 
    },
  ])

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle remider
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task Left! ')}
    </div>
  )
}

export default App
