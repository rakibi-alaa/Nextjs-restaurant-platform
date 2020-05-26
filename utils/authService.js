import cookie from 'cookie';
import {placeCredentials,logOut} from '../store/actions'
import Router from 'next/router';

export default class AuthService {

    static store = null;
    static loggedIn(){
        return localStorage.getItem('token');
    }
    static setToken(token,maxAge){
        console.log(maxAge)
        localStorage.setItem('token',JSON.stringify({token,maxAge}));
        return token;
    }
    static checkTokenFromLocalStorage(){
        let tokenData = JSON.parse(localStorage.getItem('token'));
        return tokenData.maxAge > Math.floor((new Date()).getTime() / 1000) ? tokenData.token : '';

    }
    static async refillReduxAfterRefresh(store){
        this.store = store;
        if(!store.getState().auth.user){
            const resp = await fetch(process.env.API_URL+'/auth/checktoken',{
                headers:{
                    'Accept' : 'application/json',
                    'authorization' : 'Bearer ' + this.checkTokenFromLocalStorage()

                }});
            if(resp.status === 401){
                store.dispatch(logOut());
            }else if(resp.status === 200){
                const data = await resp.json();
                store.dispatch(placeCredentials(data));
            }

        }
    }



    static async fetchWithAuth(ctx,url,method){

        let token = '';
        if(ctx.req){
            token = ctx.req.headers.cookie ? cookie.parse(ctx.req.headers.cookie).auth : '';
        }else{
            token = this.checkTokenFromLocalStorage()
        }
        const resp = await fetch(url,{
            method : method,
            headers:{
                'Accept' : 'application/json',
                'authorization' : 'Bearer '+ token
            }
        });

        const data = await resp.json();
        if(resp.status === 401 && !ctx.req) {
            this.store ? this.store.dispatch(logOut()) : null;
            console.log('client');
            Router.replace('/login');
            return;
        }
        if(resp.status === 401 && ctx.req) {
            ctx.res.writeHead(302, {
                Location: 'http://localhost:3000/login'
            });
            ctx.res?.end();
            return;
        }

        return data;

    }




}