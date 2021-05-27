import { useState } from "react";

const Task = ({ toDo }) => {
  const [isClicked, setIsClicked] = useState(false);

  return <div onClick={() => setIsClicked(!isClicked)} className={isClicked ? "strikethrough" : ""}>{toDo}</div>;
};

export default Task;
