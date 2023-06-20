import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
const PrivateRoute = ({ children }) => {
    const { users } = useContext(LoginContext);
    if (!users) {
        return children;
    }
    else {
        return <Navigate to="/Product"/>
    }
};
export default PrivateRoute