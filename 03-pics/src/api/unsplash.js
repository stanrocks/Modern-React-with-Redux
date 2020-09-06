import axios from 'axios';

// set default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID XuNzyZOVv6xRMZ2bCmpqEi5J7PsUJhXpvn8sSH305lE',
  },
});
