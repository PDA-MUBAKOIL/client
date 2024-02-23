import axios from 'axios';

const BASE_URL = '/api/mail';
const instance = axios.create({
    baseURL:BASE_URL,
});

export async function sendEmailAuthNumber(email:string){
    return await instance.post('/send',{
        mail: email
    });
}

export async function confirmAuthNumber(){
    return await instance.get('/cert');
}

