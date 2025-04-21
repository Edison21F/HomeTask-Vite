import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
    const { deleteTask } = useTasks();

    return (
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">{task.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">{task.description}</p>
                <p className="text-sm text-zinc-400">
                    {new Date(task.date).toLocaleDateString()}
                </p>
            </div>

            <div className="flex justify-end gap-2 mt-6">
                <Link
                    to={`/tasks/${task._id}`}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
                >
                    Edit
                </Link>
                <button
                    onClick={() => deleteTask(task._id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
