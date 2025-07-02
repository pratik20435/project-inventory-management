import { Navigate } from "react-router";

export default function AuthComponent ({Components}: any) {
    
    const token = localStorage.getItem("token");
    if (token){
        return <Navigate to = "/dashboard" />

    }
    return (
        <div>
            <Components/>
        </div>
    );
}