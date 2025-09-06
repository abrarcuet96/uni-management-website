import type {USER_ROUTE} from "@/types";

export const routeGenerator = (routes: USER_ROUTE[]): USER_ROUTE[] => {
    let userRoutes: USER_ROUTE[] = [];

    routes.forEach(route => {

        if (route?.path && route.element) {
            userRoutes.push({
                path: route?.path,
                element: route?.element
            })
        }

        if (route?.children) {
            route?.children?.forEach(child => {
                if (child?.path && child.element) {
                    userRoutes.push({
                        path: child?.path,
                        element: child?.element
                    })
                }
            })
        }
    })
    console.log(routes)
    return userRoutes;
}