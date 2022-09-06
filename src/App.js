// App.js is the root component.
// Every component will be in the App.js
// Note: Think of your app as a collection of components.
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import Footer from "./components/Footer.jsx";
import NoTask from "./components/NoTask.jsx";
import AddTask from "./components/AddTask.jsx";
import { useState } from "react";

function App() {
  /**
   * this tasks state is a global state which means it can be passed down
   * to other components as props.
   * tasks is a global state because it is in the root component which is
   * the App.js
   *
   */
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "learn",
      day: "Sep 10, 2022",
      reminder: true,
    },
    {
      id: 2,
      text: "task 2",
      day: "Sep 5, 2022",
      reminder: true,
    },
    {
      id: 3,
      text: "task 3",
      day: "Sep 3, 2022",
      reminder: false,
    },
    {
      id: 4,
      text: "task 4",
      day: "September 20, 2022",
      reminder: true,
    },
  ]);

  // for showing/hiding of the add task forms.
  const [showAddTask, setShowAddTask] = useState(false);

  // Delete Task
  const deleteTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task //... is a spread operator. in this case it just copies the attributes of the specified task except for the reminder.
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;

    const newTask = {
      id,
      ...task,
    }; /**... is a spread operator. this line means copy all the attributes passed except for the id which is generated randomly. */

    setTasks([...tasks, newTask]); // this line copies the existing tasks then it adds the newTask.
  };

  const clickFooter = () => {
    console.log("clicked footer");
  };

  return (
    //this is JSX.
    <div className="container">
      <Header
        onToggleAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/**this is a short cut for ternary operator without an else. It is also known as shorcircuit.
       * since showAddTask is boolean and is operated by an AND, if it is false the AddTask component will no be returned.
       */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <NoTask
          alignment="center"
          color="white
        "
        />
      )}

      <Footer
        color="white"
        text="All Rights Reserved."
        onFooterClick={clickFooter}
      />
    </div>
  );
}

export default App;
