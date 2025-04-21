import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage  from "./pages/homePage";
import TaskPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TasksFormPage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />}  />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
          
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/add-tasks" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;