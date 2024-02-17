import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components-main/app/App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, Register } from './components-main/welcome/Welcome';


export const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />,
    },
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


