// App.js is the root component.
// Every component will be in the App.js
// Note: Think of your app as a collection of components.
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import Footer from "./components/Footer.jsx";
import NoTask from "./components/NoTask.jsx";
import AddTask from "./components/AddTask.jsx";
import About from "./components/About.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  /**
   * this tasks state is a global state which means it can be passed down
   * to other components as props.
   * tasks is a global state because it is in the root component which is
   * the App.js
   *
   */
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTask();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // for showing/hiding of the add task forms.
  const [showAddTask, setShowAddTask] = useState(false);

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map(
        (task) => (task.id === id ? { ...task, reminder: data.reminder } : task) //... is a spread operator. in this case it just copies the attributes of the specified task except for the reminder.
      )
    );
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    //   const id = Math.floor(Math.random() * 100000) + 1;
    //   const newTask = {
    //     id,
    //     ...task,
    //   }; /**... is a spread operator. this line means copy all the attributes passed except for the id which is generated randomly. */
    //   setTasks([...tasks, newTask]); // this line copies the existing tasks then it adds the newTask.
  };

  return (
    //this is JSX.
    <>
      {/* <Routes> */}
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
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          <NoTask
            alignment="center"
            color="white
        "
          />
        )}

        <Footer color="white" />
      </div>
    </>
  );
}

export default App;
