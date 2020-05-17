import { connect } from 'react-redux';
import React from 'react';
import { Formik  } from 'formik';
import Layout from '../components/layout'
import * as actions from '../store/actions';
import Link from "next/link";
import Router from "next/router";


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error : false
        }
    }
    onSubmit(values){
        this.setState({error:false});
        fetch(process.env.API_URL+ '/auth/login',{
            method : 'POST',
            body : JSON.stringify(values),
            headers :{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json()).then(res =>{
            if(res.token){
                this.props.placeCredentials(res);
                Router.push('/')
            }else if(res.authScheme){
                this.setState({error:true});
            }
        }).catch(error =>{
            console.log(error)
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {

        console.log(nextProps)
    }

    render() {
        return (
            <Layout title="Login">


                <div className="bg-white shadow my-auto  flex items-center rounded justify-around p-8">

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
                                this.onSubmit(values);
                                setSubmitting(false);
                        }}
                    >
                        {({ values,errors,handleChange,handleSubmit,isSubmitting }) => (
                            <form className="bg-white w-1/4 border rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username" type="email" name="email" placeholder="Username" onChange={handleChange} value={values.email} />
                                </div>
                                <div className="">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                         className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password}/>
                                </div>
                                {
                                    this.state.error &&
                                    <div className="bg-red-400 text-center py-1 ">
                                        <span className=" mr-2 text-left text-sm flex-auto">email or password incorrect</span>
                                    </div>
                                }

                                <div className="flex items-center justify-between mt-2">
                                    <button
                                        className="bg-indigo hover:bg-indigo_hovered text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit" disabled={isSubmitting}>
                                        Sign In
                                    </button>
                                    <Link href="/register">
                                        <a className="inline-block align-baseline font-bold text-sm text-indigo hover:text-blue-800"
                                           >
                                            Create account
                                        </a>
                                    </Link>
                                </div>
                            </form>
                        )}
                    </Formik>

                    <div >
                        <img src="auth_undraw.svg" className="max-w-2xl"  />
                    </div>
                </div>


            </Layout>
        )
    }
}
const mapStateToProps = state => {
    return {
        test : state.auth.test,
        user : state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeCredentials : (data) => dispatch(actions.placeCredentials(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
