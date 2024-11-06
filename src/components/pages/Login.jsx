// src/components/Login.js
import React from "react";

const Login = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="p-6 rounded w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">
                    Welcome Back to DoBu!
                </h2>
                <form>
                    <div className="mb-6">
                        <label
                            className="block text-sm font-medium text-white"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-700 text-white shadow-md shadow-yellow-200"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-sm font-medium text-white"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-700 text-white shadow-md shadow-yellow-200"
                            placeholder="********"
                            required
                        />
                        <div className="mt-2">
                            <a
                                href="#"
                                className="text-sm text-green-500 hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-[1.05] my-4"
                    >
                        Login
                    </button>
                    <div className="text-center">
                        <p className="text-sm text-white">
                            New here?{" "}
                            <a
                                href="#"
                                className="text-green-500 hover:underline"
                            >
                                Make an Account!
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
