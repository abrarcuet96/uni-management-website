import type {AUTH_USER} from "@/types/auth-user.types.ts";

export type AUTH_STORE = {
    token?: string | null;
    setToken: (token?: string | null) => void;
    user?: AUTH_USER | null;
    setUser: (user?: AUTH_USER | null) => void
}