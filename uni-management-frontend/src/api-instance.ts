import axios, {type AxiosError, type AxiosResponse} from "axios";
import {useAuth} from "@/auth.store.ts";
import {catchError} from "@/lib/catch-error.ts";

const baseUrl = import.meta.env.BASE_URL;

export const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
})

instance.interceptors.request.use((config) => {
    const token = useAuth.getState()?.token;

    if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`
    } else if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }

    return config;
})

instance.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {

    if (error?.response && error?.response?.status === 401) {
        catchError({error})
    }

    return Promise.reject(error)
})