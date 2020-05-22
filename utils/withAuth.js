import React, {Component} from 'react'
import AuthService from './authService'
import Router from 'next/router'
export default function withAuth(AuthComponent) {

    return class Authenticated extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            };
        }

        static async getInitialProps(ctx) {

            await AuthService.checkToken(ctx);
            return {}
        }



        render() {
            return <AuthComponent {...this.props}  auth={AuthService} />
        }
    }
}