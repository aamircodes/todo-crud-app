import { Button } from 'react-bootstrap';

const Task = ({ task, updateTask, deleteTask }) => {
  return (
    <div className='d-flex align-items-center mb-2'>
      <span className={task.important ? 'fw-bold' : ''}>{task.text}</span>
      <div>
        <Button
          size='sm'
          variant='outline-secondary'
          onClick={() => updateTask(task.id)}
          className='mr-2'
        >
          {task.important ? 'make not important' : 'make important'}
        </Button>
        <Button
          size='sm'
          variant='outline-danger'
          onClick={() => deleteTask(task.id)}
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default Task;
