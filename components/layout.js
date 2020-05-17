
import Head from 'next/head';
import { connect } from 'react-redux';
import Header from "./header";
import * as actions from '../store/actions';



const Layout = ({ children, title,user,logOut,roles}) => (
    <div className="min-h-screen">
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header logOut={logOut} user={user} roles={roles} />
        <div className="p-4 m-10 ">
            { children }
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


export default connect(mapStateToProps, mapDispatchToProps)(Layout)