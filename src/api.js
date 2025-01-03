import axios from "axios";

const customAPI = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://e-commerce-mern-be.vercel.app/api/v1',
    withCredentials: true
});

export default customAPI;
