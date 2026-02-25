import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageError from "../pages/PageError";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import CreateTask from "../pages/CreateTask";
import ListTasks from "../pages/ListTasks";
import Task from "../pages/Task";
import PrivateRoute from "./PrivateRouter";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageError />,
        children: [


            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cadastro",
                element: <Cadastro />
            },


            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                )
            },
            {
                path: "/create/task",
                element: (
                    <PrivateRoute>
                        <CreateTask />
                    </PrivateRoute>
                )
            },
            {
                path: "/tasks",
                element: (
                    <PrivateRoute>
                        <ListTasks />
                    </PrivateRoute>
                )
            },
            {
                path: "/tasks/:id",
                element: (
                    <PrivateRoute>
                        <Task />
                    </PrivateRoute>
                )
            },
        ]
    }
]);