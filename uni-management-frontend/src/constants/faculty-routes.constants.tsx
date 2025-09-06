import type {USER_ROUTE} from "@/types";

export const facultyRoutesConstant: USER_ROUTE[] = [
    {
        name: 'Dashboard',
        path: 'dashboard',
    }, {
        name: 'My Courses',
        path: 'courses',
    }, {
        path: 'courses/:registerSemesterId/:courseId',
    },
]