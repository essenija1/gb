import { Navigate, Outlet } from "react-redux";

export const PublicRoute = ({ authed }) => {
    return !authed ? <Outlet /> : <Navigate to="/profile" replace />;

};