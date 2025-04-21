import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
function TaskPage() {
    const { fetchTasks, tasks } = useTasks();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-zinc-800 dark:text-white mb-10">Your Tasks</h1>

            {tasks.length === 0 ? (
                <div className="text-center text-zinc-500">No tasks available</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasks.map((task) => (
                        <TaskCard key={task._id} task={task} />
                    ))}
                </div>
            )}
            <br />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200" 
                onClick={() => navigate("/add-tasks")}
            >
                Create Task
            </button>
        </div>
    );
}

export default TaskPage;
