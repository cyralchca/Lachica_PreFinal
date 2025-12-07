import { useCart } from "../hooks/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import Layout from "../layout/Layout";
import { Trash2 } from "lucide-react";

const CartOverview = () => {
  const { cart, removeToCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <p className="text-gray-500 py-20 text-center">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg border border-gray-100 transition"
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                />

                {/* Item Info */}
                <div className="flex-1 flex flex-col justify-center sm:pl-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 mt-1 text-sm sm:text-base">
                    {formatCurrency(item.price)} × {item.quantity}
                  </p>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">
                    Subtotal:{" "}
                    <span className="font-bold text-pink-600">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeToCart(item)}
                  className="ml-auto sm:ml-0 mt-2 sm:mt-0 p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600 transition active:scale-90"
                  title="Remove"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* CHECKOUT SUMMARY */}
        {cart.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-10 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-medium">
                Items ({cart.length})
              </span>
              <span className="text-gray-900 font-semibold">
                {formatCurrency(total)}
              </span>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between text-xl font-bold text-pink-600">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <button className="mt-6 w-full py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition active:scale-95">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartOverview;
