import { connect } from 'react-redux';
import React from 'react';

import Layout from '../../components/layout'

class Dashboard extends React.Component{


    componentDidMount() {
        console.log(this.props.user)
    }

    render() {
        return (
            <Layout title="Welcome" >

                <div className="flex mb-8 p-4 bg-white shadow rounded">
                    <div className="w-1/2">
                        <h1 className="text-5xl">Admin Dashboard</h1>
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
        user : state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
