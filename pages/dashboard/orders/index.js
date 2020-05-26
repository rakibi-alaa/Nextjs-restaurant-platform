import React from 'react';
import withAuth from '../../../utils/withAuth';
import DashboardLayout from '../../../components/dashboardLayout'
import $ from 'jquery';
import datatable from 'datatables.net';
import AuthService from "../../../utils/authService";
import Link from "next/link";
import Router from "next/router";
import ReactDOM from 'react-dom'

class DashboardOrders extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    static async getInitialProps(ctx) {
        const resp = await AuthService.fetchWithAuth(ctx,process.env.API_URL_PREFIX_ADMIN + '/orders','GET');
        return {orders : resp};
    }

    goToOrder(id){
        console.log(id)
    }

    componentDidMount() {
        var _ = this;
        let table =  $('#data_table').dataTable({
            data: this.props.orders ? this.props.orders : [],
            columns: [
                { data: 'customer_full_name'},
                { data: 'customer_email'},
                { data: 'customer_phone'},
                { data: 'total'},
                { data: 'status.status'},
                { data: 'id' },
            ],
            columnDefs: [{
                targets: 5,
                searchable : false,
                createdCell: (td, cellData, rowData, row, col) => {
                    ReactDOM.render(<Link href='/dashboard/orders/[id]' as={`/dashboard/orders/${rowData.id}`} >
                    <button>show</button>
                </Link>,td)
                }
            }]
        });
        
    }

    

    render() {
        return (
            <DashboardLayout  title="Orders" secondTitle="Orders">
                <div className="w-full mb-5 text-right">
                    <Link href="login">
                        <a className="px-4 py-2 bg-green-300 :hovershadow rounded hover:text-white hover:bg-green-600">Add</a>
                    </Link>
                </div>
                <table id="data_table" className="display cell-border hover order-column row-border stripe" >
                    <thead>
                    <tr>
                        <th>Customer name</th>
                        <th>Customer email</th>
                        <th>Customer phone</th>
                        <th>Total price</th>
                        <th>Status</th>
                        <th>Views</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </DashboardLayout>
        )
    }
}



export default withAuth(DashboardOrders);
