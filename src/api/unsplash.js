import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 1f22b0e7ebbf7f233a30d3670cc96a2e5ba91eb5581bccf47b7b8a724e5c430d'
            }  
});

