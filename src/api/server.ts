import { Profile } from "../entity/Response";
import { BackendAPI } from "./api";

export const login = async (email: string, password: string) => {
    try {
        await BackendAPI.post<{ message: string }>(`/auth/login`, {
            email,
            password,
        });
    } catch (error) {
        console.log(error);
    }
};

export const profile = async () => {
    try {
        const response = await BackendAPI.get<Profile>(`/user/profile`);
        if (response.status == 401) {
            return { data: null };
        } else {
            return { data: response.data };
        }
    } catch (error) {
        console.log(error);
    }
};
