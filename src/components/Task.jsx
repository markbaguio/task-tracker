import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
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
