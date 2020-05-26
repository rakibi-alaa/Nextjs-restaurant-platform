import React from 'react';
import withAuth from '../../../utils/withAuth';
import DashboardLayout from '../../../components/dashboardLayout'

import AuthService from "../../../utils/authService";
import Link from "next/link";


class DashboardOrder extends React.Component{


    static async getInitialProps(ctx) {
        const resp = await AuthService.fetchWithAuth(ctx,process.env.API_URL_PREFIX_ADMIN + '/orders/'+ctx.query.id,'GET');
        return {order : resp};
    }

    
    

    

    render() {
        console.log(this.props.order)
        return (
            <DashboardLayout  title="Order" secondTitle={"Order "+this.props.order.id}>
                <div className="w-full mb-5 text-right">
                    <Link href="login">
                        <a className="px-4 py-2 bg-green-300 :hovershadow rounded hover:text-white hover:bg-green-600">Add</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <span>Customer full Name : </span>
                        <span>{this.props.order.customer_full_name}</span>
                    </div>
                    <div>
                        <span>Customer Email : </span>
                        <span>{this.props.order.customer_email}</span>
                    </div>
                    <div>
                        <span>Customer Phone : </span>
                        <span>{this.props.order.customer_phone}</span>
                    </div>
                    <div>
                        <span>Order Status : </span>
                        <span>{this.props.order.status.status}</span>
                    </div>
                    <div>
                        <span>Order Total price : </span>
                        <span>{this.props.order.total}</span>
                    </div>

                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>product Id</th>
                                    <th>product Title</th>
                                    <th>product price</th>
                                    <th>product Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.order.products.map((product,index)=>{
                                    return (
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.price} DH</td>
                                            <td>{1}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardLayout>
        )
    }
}



export default withAuth(DashboardOrder);
