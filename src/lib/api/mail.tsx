import axios from 'axios';

const BASE_URL = '/api/mail';
const instance = axios.create({
    baseURL:BASE_URL,
});

export async function sendEmailAuthNumber(mail:string){
    return await instance.post('/send',{
        mail
    });
}

export async function confirmAuthNumber(authCode:string){
    return await instance.post('/cert',{
        authCode: authCode
    });
}

