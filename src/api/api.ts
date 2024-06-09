import axios from "axios";

export const BackendAPI = axios.create({
    baseURL: import.meta.env.VITE_APP_BE_URL,
});

export const DomainChcekAPI = axios.create({
    baseURL: import.meta.env.VITE_APP_DOMAIN_CHECK_URL,
});
