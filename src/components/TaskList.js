import Task from "./Task";

const TaskList = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((toDo, ind) => <Task toDo={toDo} key={ind}/>)}
    </div>
  );
};

export default TaskList;
