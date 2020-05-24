import React, {Component} from 'react';
import AuthService from './authService';

export default function withAuth(AuthComponent) {

    return class Authenticated extends Component {
        constructor(props) {
            super(props);
            this.state = {
            };
        }

        static async getInitialProps(ctx) {
            await AuthService.fetchWithAuth(ctx,process.env.API_URL + '/auth/checktoken','GET');
            let AuthComponentProps ={};
            if(AuthComponent.getInitialProps){
                AuthComponentProps = await AuthComponent.getInitialProps(ctx);
            }
            return {...AuthComponentProps};
        }



        render() {
            return <AuthComponent {...this.props}  auth={AuthService} />
        }
    }
}