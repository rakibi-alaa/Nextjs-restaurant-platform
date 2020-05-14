import Head from 'next/head'
import { connect } from 'react-redux';
import React from 'react';

class Home extends React.Component{
    render() {
        return (
            <div className="p-4 shadow rounded bg-white">
                <h1 className="text-purple-500 leading-normal">Next.js</h1>
                <p className="text-gray-500">with Tailwind CSS</p>
            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Home)
