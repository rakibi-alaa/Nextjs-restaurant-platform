
import cookie from 'cookie';

export default async function login(req, res) {

    if (req.method === 'POST') {
        console.log(req.body)

        const resp = await fetch(process.env.API_URL + '/auth/login',{
            method : 'POST',
            body : JSON.stringify(req.body),
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });

        console.log(resp.status)
        if(resp.status === 200){
            const data = await resp.json();
            if(data.token){
                res.setHeader('Set-Cookie', cookie.serialize('auth', data.token, {
                    httpOnly: true,
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }))
            }
            res.status(200).json(data);
        }
        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/'
        }))


    } else {
        res.status(405).json({ message: 'We only support POST' });
    }
}