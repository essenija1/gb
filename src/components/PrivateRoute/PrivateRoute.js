import { Navigate, Outlet } from "react-redux";

export const PrivateRoute = ({ authed }) => {
    return authed ? <Outlet /> : <Navigate to="/" replace />;

};