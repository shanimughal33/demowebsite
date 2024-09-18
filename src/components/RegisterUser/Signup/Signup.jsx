import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// Yup validation schema
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required'),
  birthDate: Yup.date().required('Birthdate is required'),
  gender: Yup.string().required('Please select your gender'),
});

const SignupForm = () => {
  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-3xl font-bold text-center">Create an account</h2>
      <p className="mb-6 text-center text-gray-600">It’s quick and easy.</p>
      
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          birthDate: '',
          gender: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex space-x-2">
              <div>
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className={`border-2 p-2 rounded-lg w-full ${
                    errors.firstName && touched.firstName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className={`border-2 p-2 rounded-lg w-full ${
                    errors.lastName && touched.lastName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={`border-2 p-2 rounded-lg w-full ${
                  errors.email && touched.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={`border-2 p-2 rounded-lg w-full ${
                  errors.password && touched.password
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <Field
                name="birthDate"
                type="date"
                className={`border-2 p-2 rounded-lg w-full ${
                  errors.birthDate && touched.birthDate
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="birthDate"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Gender */}
            <div className="flex justify-between">
              <label className="block">
                <Field type="radio" name="gender" value="Male" />
                Male
              </label>
              <label className="block">
                <Field type="radio" name="gender" value="Female" />
                Female
              </label>
              <label className="block">
                <Field type="radio" name="gender" value="Other" />
                Other
              </label>
            </div>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-sm text-red-500"
            />

            {/* Submit Button */}
            <Link to={"/Login"}>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
            </Link>
            <div>
              
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
