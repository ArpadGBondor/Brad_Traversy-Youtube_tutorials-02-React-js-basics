import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function AddTask({ addTask, loading }) {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    if (!task) {
      alert('Please add a task!');
    } else {
      addTask(task, day, reminder);
      setTask('');
      setDay('');
      setReminder(false);
    }
  };

  return (
    <form className="add-form" onSubmit={submitForm}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          disabled={loading}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          onChange={(e) => setDay(e.target.value)}
          value={day}
          disabled={loading}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
          value={reminder}
          disabled={loading}
        />
      </div>

      <Button block={true} spinner={loading} text="Save Task" disabled={loading} />
    </form>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
