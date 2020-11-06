const axios = require('axios');

exports.greetings = () => 'Hello from common';

exports.getPosts = async () => (await axios.get(`https://jsonplaceholder.typicode.com/posts`)).data;
