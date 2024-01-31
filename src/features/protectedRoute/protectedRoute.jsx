import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { selectCurrentToken } from '../auth/authSlice';

const ProtectedRoute = ({children}) => {
    const token = useSelector(selectCurrentToken)
    let location = useLocation()

    if(!token) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;
