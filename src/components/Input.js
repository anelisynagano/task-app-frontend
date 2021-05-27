import { useState } from "react";

const Input = ({ handleAddTask }) => {
  const [toDo, setToDo] = useState("");

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

const handleSubmit = (e) => {
    handleAddTask(e, toDo);
    setToDo("");
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={toDo} onChange={handleInput} />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Input;
