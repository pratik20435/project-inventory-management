import { useParams } from "react-router";
import { Link } from "react-router";
{/* <td className="px-4 py-2 font-medium text-gray-800">
  <Link
    to={`/product-details/${product._id}`}
    className="text-blue-600 hover:underline"
  >
    {Product.name}
  </Link>
</td> */}

export default function ProductDetails() {
    const {id} = useParams();
    return (
        <div>
        <h1>Product Details Page</h1>
        <p>This page will display detailed information about a specific product.</p>
        </div>
        
    );
}
//backend bata data fetch garne ho
//id use garera product ko details fetch garne ho