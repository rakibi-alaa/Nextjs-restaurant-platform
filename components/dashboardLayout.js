
import Head from 'next/head';
import { connect } from 'react-redux';
import Link from "next/link";
import * as actions from '../store/actions';
import React from "react";



const DashboardLayout = ({ children, title,user,logOut,roles}) => (
    <div className="min-h-screen">
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="flex md:flex-row-reverse flex-wrap">


            <div className="w-64 md:w-4/4 bg-gray-100">
                <div className="container bg-gray-100 pt-16 px-6">
                    {children}
                </div>

            </div>


            <div
                className="w-full md:w-1/6 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-4 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
                <div className="md:relative mx-auto  lg:px-6">
                    <span>
                        <Link href="/">
                            <a></a>
                        </Link>
                    </span>
                    <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                        <li className="mr-3 flex-1">
                            <a href="#"
                               className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <i className="fas fa-link pr-0 md:pr-3"></i><span
                                className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Accueil</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#"
                               className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <i className="fas fa-link pr-0 md:pr-3"></i><span
                                className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#"
                               className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600">
                                <i className="fas fa-link pr-0 md:pr-3 text-pink-500"></i><span
                                className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Active Link</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#"
                               className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <i className="fas fa-link pr-0 md:pr-3"></i><span
                                className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);




const mapStateToProps = state => {
    return {
        user : state.auth.user,
        roles : state.auth.roles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logOut : () => dispatch(actions.logOut())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)