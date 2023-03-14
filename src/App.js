import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const initial_tasks = [
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
  const [tasks, setTasks] = useState(initial_tasks);

  return (
    <div className='container'>
      <Header text='TODO LIST' />
      <Tasks tasks={tasks} />
      <AddTask onAdd={(task) => setTasks([...tasks, task])} />
    </div>
  );
}

export default App;
