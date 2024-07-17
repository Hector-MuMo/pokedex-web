import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ErrorPage from './ErrorPage.tsx'
import PokeResume from './pages/PokeResume.tsx'
import PokeMain from './pages/PokeMain.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <PokeMain />
            },
            {
                path: "/pokemons/:id",
                element: <PokeResume />
            }
        ]
    }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
