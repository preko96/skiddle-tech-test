// a library to wrap and simplify api calls
import axios from 'axios';

// our "constructor"
const create = (baseURL = 'https://api.github.com/') => {
    const api = axios.create({
        baseURL,
        timeout: 10000,
    });

    const search = keyword => api('v1/events/search', { params: { keyword, api_key: process.env.REACT_APP_API_KEY } });
    const event = id => api.get(`v1/events/${id}`, {  params: { api_key: process.env.REACT_APP_API_KEY } });
    const artist = id => api.get(`v1/artist/${id}`, { params: { api_key: process.env.REACT_APP_API_KEY } });

    return {
        search,
        event,
        artist,
    };
};

export default { create };