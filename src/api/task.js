//axios para task
import axios from './axios';

export const createTaskRequest = (task) => axios.post(`/tasks`, task)
export const getTasksRequest = () => axios.get(`/tasks`)
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)
export const updateTaskRequest = (id ,task) => axios.put(`/tasks/${id}`, task)
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`)
