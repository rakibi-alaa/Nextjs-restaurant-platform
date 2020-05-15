import { connect } from 'react-redux';
import React from 'react';
import { Formik  } from 'formik';
import Layout from '../components/layout'

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }
    onSubmit(values){
        alert(JSON.stringify(values))
    }
    render() {
        return (
            <Layout title="Login">


                <div className="bg-white shadow my-auto  flex items-center justify-around p-8">

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

                                this.onSubmit(values)
                                setSubmitting(false);

                        }}
                    >
                        {({ values,handleChange,handleSubmit,isSubmitting }) => (
                            <form className="bg-white w-1/4 border rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username" type="email" name="email" placeholder="Username" onChange={handleChange} value={values.email} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                         className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password}/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-indigo hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit" disabled={isSubmitting}>
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-indigo hover:text-blue-800"
                                       href="#">
                                        Create account
                                    </a>
                                </div>
                            </form>
                        )}
                    </Formik>

                    <div >
                        <img src="auth_undraw.svg" className="max-w-lg"  />
                    </div>
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
