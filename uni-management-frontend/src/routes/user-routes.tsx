import {createBrowserRouter} from "react-router-dom";
import App from "@/App.tsx";
import {routeGenerator} from "@/routes/utils/routeGenerator.ts";
import {adminRoutesConstant, facultyRoutesConstant} from "@/constants";
import {studentRoutesConstant} from "@/constants/student-routes.constants.tsx";
import SignInPage from "@/pages/SignInPage.tsx";

const userRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/admin",
        element: <App/>,
        children: routeGenerator(adminRoutesConstant)
    }, {
        path: "/faculty",
        element: <App/>,
        children: routeGenerator(facultyRoutesConstant)
    }, {
        path: "/student",
        element: <App/>,
        children: routeGenerator(studentRoutesConstant)
    },
    {
        path: '/signin',
        element: <SignInPage/>
    },


])

export default userRoutes;