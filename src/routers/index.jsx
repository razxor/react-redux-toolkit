import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import ROUTES from '../routes/index'
import MasterLayout from '../layouts/MasterLayout';


const router = createBrowserRouter([
    {
        path: `${ROUTES.HOME}`,
        element: <MasterLayout />,
        children: [
            {
                path: `${ROUTES.HOME}`,
                element: <Home />,
            },
            {
                path: `${ROUTES.ABOUT}`,
                element: <About />,
            },     
        ]
    },
]);

export default router