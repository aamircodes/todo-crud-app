import React from 'react';

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, i) => (
        <div key={i}>
          {task.text} {task.important && <b>important</b>}
        </div>
      ))}
    </div>
  );
};

export default Tasks;
