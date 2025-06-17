import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="main-content flex-1 border-gray-500 w-2xs p-3">
        <Outlet />
      </div>
    </div>

  );
}
