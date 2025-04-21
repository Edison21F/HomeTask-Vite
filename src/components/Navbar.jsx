import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-zinc-900 shadow-md py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-zinc-800 dark:text-white">
                    Task Manager
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-700 dark:text-white focus:outline-none">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <ul className={`md:flex md:items-center md:space-x-6 absolute md:static bg-white dark:bg-zinc-900 w-full left-0 px-6 md:px-0 transition-all duration-300 ease-in-out 
                ${isOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0'} md:opacity-100 md:top-auto`}>

                    {!isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/login" className="block py-2 text-zinc-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="block py-2 text-zinc-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Register</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/tasks" className="block py-2 text-zinc-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Tasks</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="block py-2 text-zinc-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                                    {user.name}
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
