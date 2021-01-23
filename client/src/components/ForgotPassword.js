import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={"px-3 mb-6 md:mb-0 w-full"}>
      <label
        htmlFor={props.id || props.name}
        className="block uppercase tracking-wide text-gray-darker text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-lighter text-gray-darker border  rounded py-3 px-4 mb-3 ${
          meta.error ? "border-red-400" : "border-gray-darker"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="block uppercase text-xs text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

const ForgotPassword = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
            </div>
            <Formik
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              initialValues={{
                email: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div className="-mx-3 md:flex mb-6">
                  <MyTextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="example@domain.com"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                  >
                    Create an Account
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
