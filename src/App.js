import { useState, useEffect } from 'react';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

// tasksource will handle saving and loading the tasks
import taskSource from './taskSource';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [reload, setReload] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (reload) {
        setTasks(await taskSource.load());
        setReload(false);
      }
    };
    fetchData();
  }, [reload]);

  const addTask = (task, day, reminder) => {
    setProcessing(true);
    taskSource
      .addTask(task, day, reminder)
      .then(() => {
        setReload(true);
        setProcessing(false);
        setShowAddForm(false);
      })
      .catch((error) => {
        alert(error);
        setReload(true);
        setProcessing(false);
        setShowAddForm(false);
      });
  };
  const deleteTask = (id) => {
    setProcessing(true);
    taskSource
      .deleteTask(id)
      .then(() => {
        setReload(true);
        setProcessing(false);
      })
      .catch((error) => {
        alert(error);
        setReload(true);
        setProcessing(false);
      });
  };
  const toggleReminder = (id, newReminder) => {
    setProcessing(true);
    taskSource
      .toggleReminder(id, newReminder)
      .then(() => {
        setReload(true);
        setProcessing(false);
      })
      .catch((error) => {
        alert(error);
        setReload(true);
        setProcessing(false);
      });
  };
  const toggleAddForm = () => setShowAddForm(!showAddForm);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        loading={processing || reload}
        showAddForm={showAddForm}
        toggleAddForm={toggleAddForm}
        setReload={setReload}
      />
      {showAddForm && <AddTask addTask={addTask} loading={processing || reload} />}
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
    </div>
  );
}

export default App;

// Class based would look something like this:
// import React, { Component } from 'react';
// import Header from './components/Header';

// export class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//       </div>
//     );
//   }
// }

// export default App;
