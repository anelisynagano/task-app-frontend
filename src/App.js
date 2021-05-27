import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";


function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleAddTask = (e, task) => {
    e.preventDefault();
    setToDoList((prevState) => [...prevState, task]);
  };

  return (
    <div className='App'>
      <Input
        handleAddTask={handleAddTask}
      />
      <TaskList toDoList={toDoList}/>
    </div>
  );
}

export default App;
