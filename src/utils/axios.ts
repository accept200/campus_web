import axios from "axios";
import { useTokensStore } from "@/stores/token";

const API = axios.create(
    {
        baseURL: "http://localhost:8080/api",
        timeout: 5000
    }
)

API.interceptors.request.use(
    config => {
        const tokens = useTokensStore()
        if (tokens.token !== null) {
            config.headers['token'] = tokens.token
        }
        if (tokens.uid !== null) {
            config.headers['uid'] = tokens.uid
        }
        return config;
    }
)

export default API;