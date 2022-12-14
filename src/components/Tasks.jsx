import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  /**
   * States are immutable. It cant be change directly.s
   */
  return (
    <>
      {/**tasks.map loops through the tasks state.
       * and it outpus a component named Task.
       */}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
