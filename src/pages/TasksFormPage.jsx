import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { tasks, createTask, updateTask, fetchTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await fetchTask(params.id);
                if (task) {
                    setValue("title", task.title);
                    setValue("description", task.description);
                }
            }
        };
        loadTask();
    }, [params.id, setValue, fetchTask]);

    const onSubmit = async (data) => {
        if (params.id) {
            await updateTask(params.id, data);
        } else {
            await createTask(data);
        }
        navigate("/tasks");
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md dark:bg-zinc-800">
            <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-800 dark:text-white">
                {params.id ? "Edit Task" : "Create Task"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-zinc-700 dark:text-zinc-200">Title</label>
                    <input
                        type="text"
                        {...register("title", { required: true })}
                        placeholder="Task Title"
                        className="w-full px-4 py-2 mt-1 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-zinc-700 dark:text-zinc-200">Description</label>
                    <textarea
                        rows="4"
                        {...register("description", { required: true })}
                        placeholder="Task Description"
                        className="w-full px-4 py-2 mt-1 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
                >
                    Save Task
                </button>
            </form>
        </div>
    );
}

export default TaskFormPage;
