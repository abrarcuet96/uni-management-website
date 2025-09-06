import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import userRoutes from "@/routes/user-routes.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={userRoutes}/>
    </StrictMode>,
)
