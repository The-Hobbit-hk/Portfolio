import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='home' element={<Home/>} />
                <Route path='experience' element={<Experience/>} />
                <Route path='projects' element={<Projects/>} />
            </Route>
        </>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
