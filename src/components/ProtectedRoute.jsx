import { Navigate, replace } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

function ProtectedRoute({ children}) {
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default ProtectedRoute;