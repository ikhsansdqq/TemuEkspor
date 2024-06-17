"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.user) {
            // Save user to localStorage
            localStorage.setItem('user', JSON.stringify(data.user));
            setLoading(false);
            setSuccess(true);
        } else {
            setLoading(false);
            alert(data.message);
        }
    };

    const handleSocialLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 3000);
    };

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl border">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Lets Register,</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    In terms of user security, we always comply with the standard user security guidelines. Your data will be secured in our hands. You can{' '}
                    <a href="/profile/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        <u>sign-in</u>
                    </a>{' '}
                    to your account here if you already have an account before. But, if you do not have any account yet, we suggest you create an account.
                </p>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? 'Creating account...' : 'Create account'}
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center space-x-3">
                    <hr className="w-1/2 border-t border-gray-300" />
                    <span className="text-gray-500">Or alternatively,</span>
                    <hr className="w-1/2 border-t border-gray-300" />
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        onClick={handleSocialLogin}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        {/* <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" /> */}
                        Register with Facebook
                    </button>
                    <button
                        onClick={handleSocialLogin}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        {/* <F  aGoogle className="h-5 w-5 text-red-600 mr-2" aria-hidden="true" /> */}
                        Register with Google
                    </button>
                </div>
                {success && (
                    <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">Success! Your account has been created.</span>
                    </div>
                )}
            </div>
        </div>
    );
}
