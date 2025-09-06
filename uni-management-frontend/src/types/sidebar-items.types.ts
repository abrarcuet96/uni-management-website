import type {ReactNode} from "react";

export type SIDEBAR_ITEMS = {
    key?: string;
    label?: ReactNode;
    children?: SIDEBAR_ITEMS;
}[];