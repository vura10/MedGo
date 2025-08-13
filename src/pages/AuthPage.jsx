import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log('Form data', values);
      navigate('/home');
      setIsLoading(false);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-accent flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-4xl">
        {/* Left Side: Logo and Quote */}
        <div className="md:w-1/2 bg-primary p-8 flex flex-col items-center justify-center text-white rounded-l-lg">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-8">
              <img src="/AppIcon.png" alt="MedgoPlus Logo" className="h-16 w-auto mr-2" />
              <h1 className="text-3xl font-bold">Medgo Plus</h1>
            </div>
            <div>
              <p className="text-lg">"Empowering healthcare with seamless access."</p>
              <p className="text-sm mt-2">— Medgo Plus Team</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-2">Admin</h2>
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-gray-800 text-sm font-medium mb-1">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    className="w-full px-3 py-2 text-sm font-light border border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:ring-blue-600"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="password" className="block text-gray-800 text-sm font-medium mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Enter Password"
                      className="w-full px-3 py-2 pr-10 text-sm font-light border border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:ring-blue-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-0"
                      tabIndex={-1}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => document.querySelector('form').requestSubmit()}
                  disabled={isSubmitting || isLoading}
                  className="w-full bg-primary cursor-pointer text-white py-2 rounded-full hover:opacity-80 transition-opacity duration-200"
                >
                  {isLoading ? <Loading size="h-5 w-5" /> : 'Login'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;