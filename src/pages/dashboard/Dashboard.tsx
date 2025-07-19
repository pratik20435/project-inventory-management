
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import useStore from "../../store/Store.ts";
import { Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  const [opened, { open, close }] = useDisclosure(false);

  const cart = useStore((state) => state.cart);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="main-content flex-1 border-gray-500 w-2xs p-3">
        <h1 className="text-3xl font-bold text-center text-purple-700  drop-shadow-lg ">
            Dashboard
          </h1>
        <div className="flex justify-end  ">
            <Button onClick={open}>Show cart</Button>
          </div>

        <Drawer
  offset={8}
  radius="md"
  opened={opened}
  onClose={close}
  title="Cart"
  position="right"
>
  <h1 className="text-xl font-bold mb-4">Cart Items</h1>
  <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-left">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 border-b font-semibold">S.No.</th>
        <th className="px-4 py-2 border-b font-semibold">Name</th>
        <th className="px-4 py-2 border-b font-semibold">Price</th>
        <th className="px-4 py-2 border-b font-semibold">Qty</th>
      </tr>
    </thead>
    <tbody>
      {cart?.length === 0 ? (
        <tr>
          <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
            Cart is empty
          </td>
        </tr>
      ) : (
        cart.map((item, idx) => (
          <tr key={item.product._id || idx} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{idx + 1}</td>
            <td className="px-4 py-2 border-b">{item.product.name}</td>
            <td className="px-4 py-2 border-b">${item.product.price}</td>
            {/* <td className="px-4 py-2 border-b">{item.qty}</td> */}
             <td className="px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
              onClick={() => useStore.getState().decrementCartQty(item.product._id)}
              disabled={item.qty <= 1}
            >
              –
            </button>
            <span className="px-2">{item.qty}</span>
            <button
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
              onClick={() => useStore.getState().incrementCartQty(item.product._id)}
            >
              +
            </button>
            <button
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
              onClick={() => useStore.getState().removeFromCart(item.product._id)}
            >
              Remove
            </button>
          </div>
        </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</Drawer>

        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
}
