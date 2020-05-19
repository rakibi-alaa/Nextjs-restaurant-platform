
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
        <div className="w-full  h-screen flex">


            <div className="w-1/5 h-screen bg-indigo ">
                <div className="flex w-full items-center flex-shrink-0 text-white p-4">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>

                    <span className="font-semibold text-2xl tracking-tight">Restaurant Platform</span>
                </div>

                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3   text-center md:text-left">
                    <li className=" flex-1 px-4 py-1">
                        <Link href="/">
                            <a
                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-indigo_hovered hover:border-gray-400">
                                <i className="fas fa-tasks pr-0 md:pr-3"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Home</span>
                            </a>
                        </Link>
                    </li>
                    <li className=" flex-1 px-4 py-1">
                        <Link href="/dashboard/orders">
                            <a className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-indigo_hovered hover:border-gray-400">
                                <i className="fa fa-envelope pr-0 md:pr-3"></i><span
                                className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Orders</span>
                            </a>
                        </Link>
                    </li>
                    <li className="px-4 py-1 flex-1">
                        <a href="#"
                           className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-indigo_hovered hover:border-gray-400">
                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span
                            className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Analytics</span>
                        </a>
                    </li>
                    <li className="px-4 py-1 flex-1">
                        <a href="#"
                           className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-indigo_hovered hover:border-gray-400">
                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span
                            className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Payments</span>
                        </a>
                    </li>
                    <li className="px-4 py-1 flex-1">
                        <a href="#"
                           className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-indigo_hovered hover:border-gray-400">
                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span
                            className="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-full h-screen bg-white p-4">
                <h1 className="text-3xl">Welcome to your Dashboard {user ? user.username : ''}</h1>
                <div className="w-full  bg-red-400 mt-8">
                    vjnjvbdvb
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