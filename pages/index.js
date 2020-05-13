import Head from 'next/head'
import { connect } from 'react-redux';
import React from 'react';

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>test test {process.env.CUSTOM_KEY}</h1>
                <h1>test test id {this.props.test}</h1>
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
