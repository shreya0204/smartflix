import React from "react";
import Login from "../pages/Login/Login";
import Browse from "../pages/Browse/Browse";


export const appRoutes = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
];
