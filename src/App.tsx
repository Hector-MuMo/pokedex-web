import Layout from './Layout';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default App
