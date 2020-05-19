import { connect } from 'react-redux';
import React from 'react';
import withAuth from '../../../utils/withAuth';
import DashboardLayout from '../../../components/dashboardLayout'
import $ from 'jquery';
import datatable from 'datatables.net';


class DashboardOrders extends React.Component{


    componentDidMount() {
        $('#data_table').dataTable({
            data: [

            ],
            columns: [
                { data: 'name' },
                { data: 'position' },
                { data: 'salary' },
                { data: 'office' },
                { data: 'extn' },
            ]
        });



    }

    render() {
        return (
            <DashboardLayout  title="Orders" secondTitle="Orders">
                <table id="data_table" className="display cell-border compact hover order-column row-border stripe" >
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
        user : state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withAuth(DashboardOrders));
