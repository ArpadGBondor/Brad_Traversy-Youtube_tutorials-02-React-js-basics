import PropTypes from 'prop-types';

import { FaTimes } from 'react-icons/fa';

function Task({ task: { id, task, day, reminder }, deleteTask, toggleReminder }) {
  return (
    <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(id, !reminder)}>
      <h3>
        {task}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(id)} />
      </h3>
      <p>{day}</p>
      {/* <p>Reminder: {reminder ? <FaCheckCircle /> : <FaTimesCircle />}</p> */}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func,
};

export default Task;
