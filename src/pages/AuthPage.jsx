import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Logo from '/AppIcon-29_2x.png';

const AuthPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: '',
  };

  

  const validationSchema = Yup.object({
    username: Yup.string() // Changed from email
      .min(3, 'Username must be at least 3 characters')
      .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      console.log('Form data', values);
      navigate('/home'); // Navigate to dashboard
      setIsLoading(false); // Stop loading
      setSubmitting(false);
    }, 1000); // Mock delay
  };

  return (
    <div className="min-h-screen bg-accent flex flex-col items-center justify-center p-4">
      {/* Logo and Name */}
      {/* <div className="absolute top-4 left-4 flex items-center">
        <img src={Logo} alt="MedgoPlus Logo" className="h-12 w-auto mr-1" />
        <h1 className="text-2xl font-bold text-primary">Medgo Plus</h1>
      </div> */}

      {/* Centered Login Form */}
      <div className="bg-secondary p-9 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary text-center mb-4">Admin</h2>
        <h2 className="text-2xl font-medium text-dark  mb-4">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-dark text-sm font-medium mb-1">
                  Username
                </label>
                <Field
                  type="text" 
                  name="username" 
                  placeholder="Enter Username"
                  className="w-full px-3 py-2 text-sm font-thin border border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:ring-active md:w-96"
                />
                <ErrorMessage
                  name="username" 
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="relative w-full md:w-96">
                <label htmlFor="password" className="block text-dark text-sm font-medium mb-1">
                  Password
                </label>

                <div className="relative">
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder = "Enter Password"
                    className="w-full px-3 py-2 pr-10 text-sm placeholder:text-sm font-thin border border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-primary focus:outline-none focus:ring-0"
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
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full bg-primary cursor-pointer text-secondary py-2 rounded-full hover:opacity-80 transition-opacity duration-200"
              >
                {isLoading ? <Loading size="h-5 w-5" /> : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}; 

export default AuthPage;