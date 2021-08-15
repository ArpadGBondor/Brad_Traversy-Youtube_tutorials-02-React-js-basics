import axios from 'axios';

// communicate with the API
let taskSource = {
  load: async () => {
    let taskList = [];
    try {
      const res = await axios(`/api/tasks`);
      taskList = res.data;
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }

    return taskList;
  },
  addTask: async (task, day, reminder) => {
    try {
      const { data } = await axios.post(`/api/tasks`, { task, day, reminder });
      console.log(data);
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  },
  deleteTask: async (id) => {
    try {
      const { data } = await axios.delete(`/api/tasks?id=${id}`);
      console.log(data);
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  },
  toggleReminder: async (id, newReminder) => {
    try {
      const { data } = await axios.put(`/api/tasks?id=${id}`, { reminder: newReminder });
      console.log(data);
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  },
};

export default taskSource;
