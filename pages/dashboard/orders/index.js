import React from 'react';
import withAuth from '../../../utils/withAuth';
import DashboardLayout from '../../../components/dashboardLayout'
import $ from 'jquery';
import datatable from 'datatables.net';
import AuthService from "../../../utils/authService";
import Link from "next/link";


class DashboardOrders extends React.Component{


    static async getInitialProps(ctx) {
        const resp = await AuthService.fetchWithAuth(ctx,process.env.API_URL_PREFIX_ADMIN + '/orders','GET');
        return {orders : resp};
    }

    componentDidMount() {
        $('#data_table').dataTable({
            data: this.props.orders ? this.props.orders : [],
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
                <div className="w-full h-12 bg-red-300 text-right">
                    <Link href="login">
                        <a>Add</a>
                    </Link>
                </div>
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



export default withAuth(DashboardOrders);
