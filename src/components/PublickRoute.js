import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublickRoute = ({ component: Component, redirectTo = '' }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />
}

export default PublickRoute