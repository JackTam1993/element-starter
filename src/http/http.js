import axios from 'axios';

const http = {
    get(url, params, headers) {
        return axios.get(url, {
            params,
            headers: headers
        })
    },
    post(url, params, headers) {
        return axios.post(url, params, {
            headers
        });
    }
}

export default http;