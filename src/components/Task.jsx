import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`} //this says if the task.reminder is true, append the reminder in the classname which will trigger the .task.reminder in index.css
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
          /**the onDelete function serves a counterpart 
          for the deleteTask on App.js. Basically, states get passed down while 
          actions get passed upwards  */
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
