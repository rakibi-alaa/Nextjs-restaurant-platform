import React from "react";
import Layout from "../components/layout";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import { Formik  } from 'formik';
import Link from "next/link";

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    username: Yup.string().min(8, 'Too Short!').required('Username is Required'),
    email: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(' Email isRequired'),
    phone: Yup.string().email('Invalid email').required('Phone is Required'),
    password : Yup.string().required('Password is Required'),
    password_confirmation : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

class Register extends React.Component {
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

    render(){
        return(
            <Layout title="Register">
                <div className="bg-white shadow">
                    <h1 className="text-4xl px-6 py-5">Create an account</h1>
                    <div className="  flex items-center rounded justify-around p-8">
                        <div className="bg-white w-1/4  ">

                            <Formik
                                initialValues={{ username : '',email: '',phone: '', password: '',password_confirmation : '' }}
                                validationSchema={SignupSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    this.onSubmit(values);
                                    setSubmitting(false);
                                }}
                            >
                                {({ values,errors,handleChange,handleSubmit,isSubmitting }) => (

                                    <form className="border rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Username
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" name="username" placeholder="Username" onChange={handleChange} value={values.username} />
                                            {
                                                errors.username &&
                                                <p className="text-red-500 text-xs italic my-2">{errors.username}</p>
                                            }

                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Email
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" name="email" placeholder="Email" onChange={handleChange} value={values.email} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Phone
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" name="phone" placeholder="Phone" onChange={handleChange} value={values.phone} />
                                        </div>
                                        <div className="">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password" type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password}/>
                                        </div>
                                        <div className="">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                Password Confirmation
                                            </label>
                                            <input
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password" type="password" name="password_confirmation"  onChange={handleChange} value={values.password_confirmation}/>
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
        createUser : (data) => dispatch(actions.placeCredentials(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)