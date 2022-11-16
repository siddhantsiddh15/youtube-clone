import axios from 'axios';
import useFetch from './useFetch';

//AIzaSyBqyXlfLlL7Hfv7sd8wvbRSm8eGq5mr840
//https://www.googleapis.com/youtube/v3 -base URL

const baseURL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: baseURL
})