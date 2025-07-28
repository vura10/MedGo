import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../../public/AppIcon-29_2x.png';

const AuthPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Handle login logic here (e.g., API call)
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-accent flex flex-col items-center justify-center p-4">
      {/* Logo and Name */}
      {/* <div className="absolute top-4 left-4 flex items-center">
        <img src={logo} alt="MedgoPlus Logo" className="h-12 w-auto mr-1" />
        <h1 className="text-2xl font-bold text-primary">Medgo Plus</h1>
      </div> */}

      {/* Centered Login Form */}
      <div className="bg-light p-9 rounded-lg shadow-lg w-full max-w-md">
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
                <label htmlFor="email" className="block text-dark text-sm font-medium mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder = "Enter Email"
                  className="w-full px-3 py-2 text-sm font-thin border border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:ring-active md:w-96"
                  />
                <ErrorMessage
                  name="email"
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
                disabled={isSubmitting}
                className="w-full bg-primary cursor-pointer text-secondary py-2 rounded-full hover:opacity-80 transition-opacity duration-200"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}; 

export default AuthPage;