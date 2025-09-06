import {devtools} from "zustand/middleware/devtools";
import {create} from "zustand/react";
import {persist} from "zustand/middleware/persist";
import type {AUTH_STORE} from "@/types";

export const useAuth = create<AUTH_STORE>()(
    devtools(
        persist(
            (set) => ({
                token: undefined,
                setToken: (token: AUTH_STORE["token"] | null) => {
                    if (token) {
                        set({token})
                    }
                    set({token: null})
                },
                user: undefined,
                setUser: (user: AUTH_STORE["user"] | null) => {
                    if (user) {
                        set({user})
                    }
                    set({user: null})
                },
            }), {name: "uni-management-web-auth-token"}
        )
    )
)