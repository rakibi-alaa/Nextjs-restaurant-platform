import cookie from 'js-cookie';
import {placeCredentials} from '../store/actions'


export default class AuthService {


    static loggedIn(){
        return localStorage.getItem('token');
    }
    static setToken(token){
        localStorage.setItem('token',token)
        return token;
    }

    static async refillReduxAfterRefresh(store){
        if(!store.getState().auth.user){
            await fetch(process.env.API_URL+'/auth/refresh',{
                method : 'POST',
                headers:{
                    'Accept' : 'application/json'
                },
                credentials : 'include'
            }).then(res => res.json()).then(res =>{

                console.log(res);
                if(res.user){
                    this.setToken(res.token);
                    store.dispatch(placeCredentials(res));
                }

            })
        }
    }



}