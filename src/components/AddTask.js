import { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [important, setImportant] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleImportantChange = (e) => {
    setImportant(e.currentTarget.checked);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAdd({ text, important });
    setText('');
    setImportant(false);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        placeholder='add a task'
        value={text}
        onChange={handleInputChange}
      />
      <input
        className='form-check-input'
        type='checkbox'
        value={important}
        checked={important}
        onChange={handleImportantChange}
      />
      <Button variant='primary' type='submit'>
        add
      </Button>
    </form>
  );
};

export default AddTask;
