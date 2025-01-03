import axios from "axios";

const customAPI = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default customAPI;
