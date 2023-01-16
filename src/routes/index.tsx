
import { useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login'
import { useDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {

    const { setDrawerOptions} = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/home',
                label: 'Página Inicial',
            },
            {
                icon: 'perm_contact_calendar',
                path: '/',
                label: 'Login',
            }
        ])

    }, [])
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    )
}