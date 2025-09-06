import type {ReactNode} from "react";

export type USER_ROUTE = {
    name?: string;
    path?: string;
    element?: ReactNode;
    children?: USER_ROUTE[]
}