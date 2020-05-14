import { connect } from 'react-redux';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from '../components/layout'

class Login extends React.Component{
    render() {
        return (
            <Layout title="Login">

                <div className=" w-full max-w-xs">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username" type="email" name="name" placeholder="Username"/>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type="password" name="password" placeholder="******************" />

                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                       href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>

            </Layout>
        )
    }
}
const mapStateToProps = state => {
    return {
        test : state.auth.test
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
