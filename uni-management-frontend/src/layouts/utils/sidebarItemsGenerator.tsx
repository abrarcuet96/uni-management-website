import type {SIDEBAR_ITEMS, USER_ROLE, USER_ROUTE} from "@/types";
import {NavLink} from "react-router-dom";

export const sidebarItemsGenerator = (routes: USER_ROUTE[], userRole: USER_ROLE) => {
    let sidebarItems: SIDEBAR_ITEMS = [];

    routes.forEach(route => {

        if (route?.path && route?.name) {
            sidebarItems.push({
                key: route?.name,
                label: <NavLink to={`/${userRole}/${route?.path}`}>{route?.name}</NavLink>
            })
        }

        if (route?.children) {
            sidebarItems.push({
                key: route?.name,
                label: route?.name,
                children: route?.children?.map(child => {
                    return {
                        key: child?.name,
                        label: <NavLink to={`/${userRole}/${child?.path}`}>{child?.name}</NavLink>
                    }
                })
            })
        }
    })

    console.log(sidebarItems);

    return sidebarItems;
}