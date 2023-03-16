import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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
    const id = Math.floor(Math.random() * 100);
    onAdd({ id, text, important });
    setText('');
    setImportant(false);
  };

  return (
    <Form
      className='d-inline-flex align-items-center'
      onSubmit={onSubmitHandler}
    >
      <Form.Control
        type='text'
        placeholder='Add a task'
        value={text}
        onChange={handleInputChange}
        className='me-2'
        role='textbox'
      />
      <Form.Check
        type='checkbox'
        value={important}
        label='Important'
        checked={important}
        onChange={handleImportantChange}
        className='me-2'
      />

      <Button size='sm' variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};

export default AddTask;
