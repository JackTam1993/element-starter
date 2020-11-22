import http from './http';

const HOST = 'http://59.110.63.211:3000';

const LOGIN = `${HOST}/customer/login`;

const api = {
    login(params) {
        return http.post(LOGIN, params);
    }
}

export default api;