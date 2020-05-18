import React, {Component} from 'react'
import AuthService from './authService'
import Router from 'next/router'
import Login from '../pages/login'
export default function withAuth(AuthComponent) {
    const Auth = new AuthService()
    return class Authenticated extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            };
        }



        componentDidMount () {
            if (!Auth.loggedIn()) {
                Router.push('/login')
            }
            this.setState({ isLoading: false });
        }

        render() {
            if(this.state.isLoading){
                return (
                    <div className="bg-red-500">
                        <h1>Loading....</h1>
                    </div>
                )
            }else{
                return <AuthComponent {...this.props}  auth={Auth} />
            }

        }
    }
}