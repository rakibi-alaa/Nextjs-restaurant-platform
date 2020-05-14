import { connect } from 'react-redux';
import React from 'react';

import Layout from '../components/layout'

class Home extends React.Component{
    render() {
        return (
            <Layout title="Welcome">

                <div className="flex mb-8 p-4 bg-white shadow rounded">
                    <div className="w-1/2">
                        <h1 className="text-5xl">Our burgers are the best in town</h1>
                        <p> Our restaurant vhkc vksjvd vdjvbdv vkjd dvv dvkjvbjdv bvjsvbv jsdvbjkvbd vbsjdk vdbjkv jbvjksdv vkvbjdv sdjbv kjdbvjkbdsvdvkjbvj vjb</p>
                    </div>
                    <img src="burger_undraw.svg" width={700} />
                </div>

            </Layout>
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
