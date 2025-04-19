import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { signin, isAuthenticated, errors: loginErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks"); // Redirige si está autenticado
        }
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        await signin(values);
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            {loginErrors && loginErrors.map((errors, i) => (
                <div className="bg-red-500 text-white p-2 rounded mb-2" key={i}>
                    {errors}
                </div>
            ))}

            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    {...register("email", { required: "El email es obligatorio" })}
                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password:
                </label>
                <input
                    type="password"
                    {...register("password", { required: "La contraseña es obligatoria" })}
                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Login
                </button>
            </form>

            <p className="mt-4 text-gray-600">
                Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
            </p>


        </div>
    );
}

export default LoginPage;
