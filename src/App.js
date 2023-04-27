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


  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks} />
    </div>
  )
}

export default App
