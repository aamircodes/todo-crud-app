import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';
import Tasks from '../components/Tasks';

it('renders App component', () => {
  render(<App />);
  const header = screen.getByText('TODO LIST');
  expect(header).toBeInTheDocument();
});

it('renders Task component', () => {
  const tasks = [
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

  render(<Tasks tasks={tasks} />);
  const task1 = screen.getByText("Doctor's appointment tomorrow");
  const task2 = screen.getByText('Football saturday');
  expect(task1).toBeInTheDocument();
  expect(task2).toBeInTheDocument();
});

it('Should add a task when form is submitted', () => {
  render(<App />);

  // Type in task name
  const taskInput = screen.getByPlaceholderText('Add a task');
  fireEvent.change(taskInput, { target: { value: 'New Task' } });

  // Check the important checkbox
  const importantCheckbox = screen.getByRole('checkbox');
  fireEvent.click(importantCheckbox);

  // Submit the form
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);

  // Check that the task was added
  const newTask = screen.getByText('New Task');
  expect(newTask).toBeInTheDocument();
});
