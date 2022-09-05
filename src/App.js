// App.js is the root component.
// Every component will be in the App.js
// Note: Think of your app as a collection of components.
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import Footer from "./components/Footer.jsx";
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
  ]);

  // Delete Task
  const deleteTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clickFooter = () => {
    console.log("clicked footer");
  };

  return (
    //this is JSX.
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
      <Footer
        color="white"
        text="All Rights Reserved."
        onFooterClick={clickFooter}
      />
    </div>
  );
}

export default App;
