import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import "./fitness-sign-in.css";

export default function FitnessSignIn() {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // To show success or error messages
  const navigate = useNavigate(); // Hook to programmatically redirect

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const requestData = {
      email,
      password
    };

    try {
      // Make a POST request to the /signin endpoint
      const response = await fetch('http://localhost:8080/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), 
      });

      if (response.ok) {
        setTimeout(() => {
          navigate('/home');
        }, 1000); 
      } else {
        setMessage('Sign-in failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setMessage('Error during sign-in. Please check your connection.');
    }
  };

  return (
    <>
      <div className="background-container">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm rounded-lg border border-gray-300 p-6 faint-gray-bg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm rounded-lg border-gray-300 p-6">
              <h2 className="mt-20 text-center text-4xl font-bold leading-9 tracking-tight text-gray-300">
                Sign in to your account
              </h2>
            </div>

            {/* Display the success or error message */}
            {message && <p className="text-center text-sm text-red-500">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-300">
              Not a member?{' '}
              <a href="/signup" className="font-semibold leading-6 text-indigo-300 hover:text-indigo-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
