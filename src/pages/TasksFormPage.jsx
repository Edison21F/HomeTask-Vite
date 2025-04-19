function TaskFormPage() {
    return (
        <div>
            <h1>Task Form Page</h1>
            <form>
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" id="taskName" name="taskName" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TaskFormPage;