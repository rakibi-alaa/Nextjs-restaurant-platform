import { connect } from 'react-redux';
import React from 'react';
import withAuth from '../../../utils/withAuth';
import DashboardLayout from '../../../components/dashboardLayout'
import $ from 'jquery';
import datatable from 'datatables.net';
import AuthService from "../../../utils/authService";


class DashboardOrders extends React.Component{




    async componentDidMount() {
        let orders = [];

        await fetch(process.env.API_URL_PREFIX_ADMIN + '/orders',{
            headers :{
                'Accept' : 'application/json',
                'Authorization': 'Bearer ' + local
            }
        }).then(res => res.json()).then(res =>{
            orders = res.length > 0 ? res : [];
        }).catch(error => console.log(error));

        $('#data_table').dataTable({
            data: orders,
            columns: [
                { data: 'customer_full_name'},
                { data: 'customer_email'},
                { data: 'customer_phone'},
                { data: 'total'},
                { data: 'status.status'},
            ]
        });
    }

    render() {
        return (
            <DashboardLayout  title="Orders" secondTitle="Orders">
                <table id="data_table" className="display cell-border hover order-column row-border stripe" >
                    <thead>
                    <tr>
                        <th>Customer name</th>
                        <th>Customer email</th>
                        <th>Customer phone</th>
                        <th>Total price</th>
                        <th>Views</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </DashboardLayout>
        )
    }
}
const mapStateToProps = state => {
    return {
        user : state.auth.user,
        jwtToken : state.auth.jwtToken
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withAuth(DashboardOrders));
