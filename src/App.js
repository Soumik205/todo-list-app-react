import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState ([
    {
      id : 1, 
      text : 'first task',
      day : 'Feb 5 at 2:30 pm',
      reminder : true, 
    },
    {
      id : 2, 
      text : 'second task',
      day : 'Feb 5 at 2:30 pm',
      reminder : true, 
    },
    {
      id : 3, 
      text : 'third task',
      day : 'Feb 5 at 2:30 pm',
      reminder : false, 
    },
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


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
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task Left! ')}
    </div>
  )
}

export default App
