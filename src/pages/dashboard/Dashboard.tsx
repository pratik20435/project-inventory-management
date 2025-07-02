import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import useStore from "../../store/Store";

export default function Dashboard() {
  const count = useStore(function (state:any) {
    return state.count;
  })
   const incrementCount = useStore((state:any) =>{
    return state.incrementCount;
   } );
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="main-content flex-1 border-gray-500 w-2xs p-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={incrementCount}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Increment Count: {count} // yesle garda product.tsx ma count aako ho
          </button>
        </div>
        <Outlet />
      </div>
    </div>

  );
}
