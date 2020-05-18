import { connect } from 'react-redux';
import React from 'react';
import withAuth from '../../utils/withAuth';
import DashboardLayout from '../../components/dashboardLayout'

class Dashboard extends React.Component{


    componentDidMount() {

    }

    render() {
        return (
            <div>

            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Dashboard));
