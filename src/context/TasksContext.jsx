import { createContext, useContext, useState } from "react";
import { createTaskRequest, updateTaskRequest, getTaskRequest, getTasksRequest, deleteTaskRequest } from "../api/task";


const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

   

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task);
            setTasks([...tasks, res.data]);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            
            // Si el servidor responde con éxito, actualiza la lista local
            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
    

     // Function to fetch all tasks
     const fetchTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateTask = async (id, updatedTask) => {
        try {
            const res = await updateTaskRequest(id, updatedTask);
            setTasks(tasks.map(task => (task._id === id ? res.data : task)));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    


    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            fetchTasks,
            deleteTask,
            setTasks,
            fetchTask,
            updateTask

        }}>
            {children}
        </TaskContext.Provider>
    );
};
