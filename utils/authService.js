import cookie from 'js-cookie';

export default class AuthService {
    constructor(domain) {
        /*this.domain = domain || 'http://localhost:5000';
        this.fetch = this.fetch.bind(this);
        this.getProfile = this.getProfile.bind(this)*/
    }



    loggedIn(){
        const data = this.getAuthData();
        return data
    }



    setAuthData(auth){
        cookie.set('auth_data', auth)
    }

    getAuthData(){
        return cookie.get('auth_data')
    }

    clearAuthData(){
        cookie.remove('auth_data');
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    fetch(url, options){
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()){
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }
}