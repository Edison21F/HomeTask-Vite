import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
    const { register, handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: RegisterErros } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks"); // Redirect to home if user is authenticated
        }
    }, [isAuthenticated]); // Only run effect if isAuthenticated changes

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            {
                RegisterErros.map((error, i) => (
                    <div className="bg-red-500 text-white p-2 rounded mb-2" key={i} >
                        {error}
                    </div>
                ))
            }

            <form onSubmit={onSubmit}>
                <label for="username "
                    className="block text-gray-700 text-sm font-bold mb-2"

                >Username:</label>
                <input type="text"{...register("username", { required: true })}
                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Enter your username"
                />
                {
                    errors.username && <p className="text-red-500">{errors.username.message}</p>
                }
                <label for="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Email:</label>
                <input type="email" {...register("email", { required: true })}
                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Enter your email"
                />
                {
                    errors.email && <p className="text-red-500">{errors.email.message}</p>
                }
                <label for="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Password:</label>
                <input type="password" {...register("password", { required: true })}
                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Enter your password"
                />
                {
                    errors.password && (<p className="text-red-500">{errors.password.message}</p>)
                }

                <button type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >Register</button>
            </form>

            <p className="mt-4 text-gray-600">
                Already have an account? <a href="/login" className="text-blue-600 hover:text-blue-800">Login</a>
            </p>

        </div>
    );
}

export default RegisterPage;