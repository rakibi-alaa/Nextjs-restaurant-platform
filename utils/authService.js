import cookie from 'cookie';
import {placeCredentials} from '../store/actions'
import Router from 'next/router';

export default class AuthService {

    static loggedIn(){
        return localStorage.getItem('token');
    }
    static setToken(token){
        localStorage.setItem('token',token);
        return token;
    }

    static async refillReduxAfterRefresh(store){
        if(!store.getState().auth.user){
            const resp = await fetch(process.env.API_URL+'/auth/checktoken',{
                headers:{
                    'Accept' : 'application/json',
                    'authorization' : 'Bearer ' + localStorage.getItem('token')

                }});
            if(resp.status === 401){
                Router.replace('/login');
            }else if(resp.status === 200){
                const data = await resp.json();
                store.dispatch(placeCredentials(data));
            }

        }
    }



    static async checkToken(ctx){

        let token = '';
        if(ctx.req){
            token = ctx.req.headers.cookie ? cookie.parse(ctx.req.headers.cookie).auth : '';
        }else{
            token = localStorage.getItem('token');
        }

        const resp = await fetch(process.env.API_URL+'/auth/checktoken',{
            headers:{
                'Accept' : 'application/json',
                'Content-type' : ''
                'authorization' : 'Bearer '+ token
            }
        });
        console.log(resp.statusText,resp.status)
        if(resp.status === 401 && !ctx.req) {
            console.log('client');
            Router.replace('/login');
            return {};
        }

        if(resp.status === 401 && ctx.req) {
            console.log('server')
            ctx.res.writeHead(302, {
                Location: 'http://localhost:3000/login'
            });
            ctx.res?.end();
            return;
        }

    }




}