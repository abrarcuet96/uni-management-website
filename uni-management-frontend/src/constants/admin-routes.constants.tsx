import type {USER_ROUTE} from "@/types";
import AcademicFaculty from "@/pages/admin-pages/academic-management/AcademicFaculty.tsx";
import AcademicDepartment from "@/pages/admin-pages/academic-management/AcademicDepartment.tsx";
import AcademicSemester from "@/pages/admin-pages/academic-management/AcademicSemester.tsx";
import AdminDashboard from "@/pages/admin-pages/AdminDashboard.tsx";

export const adminRoutesConstant: USER_ROUTE[] = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard/>
    },
    {
        name: "Academic Management",
        children: [
            {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty/>
            }, {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment/>
            },
            {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester/>
            },
        ]
    },
    {
        name: "User Management",
        children: [
            {
                name: 'Admins',
                path: 'admins',
            }, {
                name: 'Faculties',
                path: 'faculties',
            }, {
                name: 'Students',
                path: 'students',
            }, {
                path: 'admin/:adminId',
            }, {
                path: 'faculty/:facultyId',
            }, {
                path: 'student/:studentId',
            }
        ]
    }, {
        name: "Course Management",
        children: [
            {
                name: 'Registered Semesters',
                path: 'registered-semesters',
            }, {
                name: 'Courses',
                path: 'courses',
            },
            {
                name: 'Offered Courses',
                path: 'offered-courses'
            }
        ]
    }
]