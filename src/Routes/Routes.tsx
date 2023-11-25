import React from  "react";
import {createBrowserRouter} from 'react-router-dom';
import App from "src/pages/App";
import Test from "src/pages/Test/testdnd";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'Test/testdnd',
                element:<Test/>
            }
        ]


    }

])




export default router