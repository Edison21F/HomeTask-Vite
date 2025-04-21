import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-blue-600 text-white text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                Bienvenido a Task Manager
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl mb-8 max-w-xl"
            >
                Organiza tus tareas, mantente productivo y gestiona tu tiempo de forma eficiente.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 flex-wrap justify-center"
            >
                <button
                    className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 font-semibold rounded-lg shadow-md"
                    onClick={() => navigate("/login")}
                >
                    Iniciar sesión
                </button>
                <button
                    className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 font-semibold rounded-lg"
                    onClick={() => navigate("/register")}
                >
                    Registrarse
                </button>
            </motion.div>
        </div>
    );
}

export default HomePage;
