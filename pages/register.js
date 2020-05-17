import React from "react";
import Layout from "../components/layout";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import { Formik  } from 'formik';
import Router from "next/router";

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    username: Yup.string().min(8, 'Too Short!').required('Username is Required'),
    email: Yup.string().email('Invalid email').required(' Email is Required'),
    phone: Yup.string().min(10, 'Too Short!').max(10, 'Too Long!').required('Phone is Required'),
    password : Yup.string().required('Password is Required'),
    password_confirmation : Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required('Password confirmation is Required')
});

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error : false,
            errorMessage : ''
        }
    }

    onSubmit(values){
        this.setState({error:false,errorMessage : ''});
        fetch(process.env.API_URL+ '/auth/register',{
            method : 'POST',
            body : JSON.stringify(values),
            headers :{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json()).then(res =>{
            if(res.user){
                this.props.placeCredentials(res);
                Router.push('/');
            }else if(res.validationError){
                this.setState({error:true,errorMessage : res.validationError[0].message ? res.validationError[0].message : 'Something went wrong !!'});
            }
        }).catch(error =>{
            console.log(error)
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps)
    }

    render(){
        return(
            <Layout title="Register">
                <div className="bg-white shadow rounded">
                    <h1 className="text-4xl px-6 py-5">Create an account</h1>
                    <div className="  flex items-center rounded justify-around p-8">
                        <div className="bg-white w-1/4  ">

                            <Formik
                                initialValues={{ username : '',email: '',phone: '', password: '',password_confirmation : '' }}
                                validationSchema={SignupSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    //alert(JSON.stringify(values))
                                    this.onSubmit(values);
                                    setSubmitting(false);
                                }}
                            >
                                {({ values,errors,handleChange,touched,handleSubmit,isSubmitting }) => (

                                    <form className="border rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Username
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" name="username" placeholder="Username" onChange={handleChange} value={values.username} />
                                            {
                                                errors.username && touched.username ? (
                                                <p className="text-red-500 text-xs italic my-2">{errors.username}</p>
                                                ) : null
                                            }

                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Email
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email" type="text" name="email" placeholder="Email" onChange={handleChange} value={values.email} />
                                            {
                                                errors.email && touched.email ? (
                                                    <p className="text-red-500 text-xs italic my-2">{errors.email}</p>
                                                ) : null
                                            }
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Phone
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="phone" type="text" name="phone" placeholder="Phone" onChange={handleChange} value={values.phone} />
                                            {
                                                errors.phone && touched.phone ? (
                                                    <p className="text-red-500 text-xs italic my-2">{errors.phone}</p>
                                                ) : null
                                            }
                                        </div>
                                        <div className="">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password" type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password}/>
                                            {
                                                errors.password && touched.password ? (
                                                    <p className="text-red-500 text-xs italic my-2">{errors.password}</p>
                                                ) : null
                                            }
                                        </div>
                                        <div className="">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                Password Confirmation
                                            </label>
                                            <input
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password_confirmation" type="password" name="password_confirmation"  onChange={handleChange} value={values.password_confirmation}/>
                                            {
                                                errors.password_confirmation && touched.password_confirmation ? (
                                                    <p className="text-red-500 text-xs italic my-2">{errors.password_confirmation}</p>
                                                ) : null
                                            }
                                        </div>
                                        {/*
                                            this.state.error &&
                                            <div className="bg-red-400 text-center py-1 ">
                                                <span className=" mr-2 text-left text-sm flex-auto">email or password incorrect</span>
                                            </div>
                                        */}

                                        <div className="flex items-center justify-between mt-2">
                                            <button
                                                className="bg-indigo hover:bg-indigo_hovered text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="submit" disabled={isSubmitting}>
                                                Sign Up
                                            </button>

                                        </div>
                                        {
                                            this.state.error &&
                                            <div className="bg-red-400 text-center py-1 mt-1 rounded shadow">
                                                <span className=" mr-2 text-left text-sm flex-auto">{this.state.errorMessage}</span>
                                            </div>

                                        }

                                    </form>
                                )}
                            </Formik>
                        </div>

                        <div >
                            <img src="register_undraw.svg" className="max-w-2xl"  />
                        </div>
                    </div>
                </div>



            </Layout>
        )
    }
}




const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeCredentials : (data) => dispatch(actions.placeCredentials(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)