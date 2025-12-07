import { ShoppingCart  } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <Link to="/cart" className="flex gap-2 items-center text-white hover:bg-gray-100 py-3 px-5 active:bg-gray-200 transition-colors rounded-full cursor-pointer">
      <div className="relative">
        <ShoppingCart  size={26} className="cursor-pointer text-gray-700" />
        <span className="absolute -top-2 -right-2 flex justify-center items-center bg-red-600 rounded-full w-5 h-5 text-xs font-semibold">
          {cart.length}
        </span>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">
          Cart
        </p>
      </div>
    </Link>
  );
};

export default CartIcon;
