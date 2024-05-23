import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit() {
    if (isEditing === false) {
      const obj = {
        id: Date.now(),
        task: inputValue,
      };
      setTasks([...tasks, obj]);
    } else {
      const taskToEdit = tasks.find((obj) => obj.id === isEditing);
      taskToEdit.task = inputValue;
      setTasks(tasks);
      setIsEditing(false);
    }
    setInputValue("");
  }
  function handleEdit(id) {
    // console.log(id);
    setIsEditing(id);
    setInputValue(tasks.find((obj) => obj.id === id).task);
  }
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  console.log(tasks);
  return (
    <>
      <div id="todo">
        <input
          type="text"
          placeholder=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span>{task.task}</span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(task.id)}
              />
              <FontAwesomeIcon
                icon={faPencil}
                onClick={() => handleEdit(task.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;