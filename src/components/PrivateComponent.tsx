import { Navigate } from "react-router";

export default function PrivateComponent ({Components}: any) {
    
    const token = localStorage.getItem("token");
    if (! token ){
        return <Navigate to = "/login" />

    }
    return (
        <div>
            <Components/>
        </div>
    );
}