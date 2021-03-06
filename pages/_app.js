import React from 'react';
import { Provider } from 'react-redux';

import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/initStore';
import AuthService from '../utils/authService';
/*
* CSS styles init
* */
import '../styles/index.css';


class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps: pageProps};
    }
    async componentDidMount(){
        await AuthService.refillReduxAfterRefresh(this.props.store);
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}




export default withRedux(initStore)(MyApp);