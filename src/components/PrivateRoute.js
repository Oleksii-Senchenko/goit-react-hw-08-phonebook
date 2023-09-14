import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const refreshing = useSelector(state => state.auth.isRefreshing)
    const shouldredirect = !isLoggedIn && !refreshing
    return shouldredirect ? <Navigate to={redirectTo} /> : <Component />
}

export default PrivateRoute