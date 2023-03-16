import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const initialTasks = [
  {
    id: 1,
    text: "Doctor's appointment tomorrow",
    important: true,
  },
  {
    id: 2,
    text: 'Football saturday',
    important: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const updateTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header text='TODO LIST' />
      <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      <AddTask onAdd={(task) => setTasks([...tasks, task])} />
    </div>
  );
}

export default App;
