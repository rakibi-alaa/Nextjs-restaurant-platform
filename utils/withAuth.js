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



        async componentDidMount () {
            console.log(AuthService.loggedIn())
            if (!AuthService.token) {
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
                return <AuthComponent {...this.props}  auth={AuthService} />
            }

        }
    }
}