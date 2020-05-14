import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import Header from "./header";
//import * as actions from '../store/actions';

const Layout = ({ children, title, logout }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header logout={logout}/>

        <div className="p-4 m-10 shadow  bg-white ">
            { children }
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        user : state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Layout)