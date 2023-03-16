import Task from './Task';

const Tasks = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className='container'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
