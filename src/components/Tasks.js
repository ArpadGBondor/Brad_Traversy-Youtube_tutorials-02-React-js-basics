import PropTypes from 'prop-types';

import Task from './Task';

function Tasks({ tasks, deleteTask, toggleReminder }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />
      ))}
    </div>
  );
}

Tasks.defaultProps = {
  tasks: [],
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func,
};

export default Tasks;
