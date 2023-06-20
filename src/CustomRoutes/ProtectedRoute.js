import React from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import { useContext } from "react";
const ProtectedRoute = ({ children }) => {
    const { users } = useContext(LoginContext);
    if (!users) {
        return <Navigate to="/Signup" />
    }
    return children;
};
export default ProtectedRoute   