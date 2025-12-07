import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { useCart } from "../hooks/CartContext";
import { Star } from "lucide-react";

const ProductList = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            {product.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: product.rating }).map((_, i) => (
              <Star
                key={i}
                className="text-yellow-500 fill-yellow-500 w-4 h-4"
              />
            ))}
            <span className="ml-1 text-gray-600 font-medium text-sm">
              ({product.rating} / 5)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mt-3 text-sm md:text-base">
            {product.description}
          </p>

          {/* Price */}
          <p className="text-pink-600 text-3xl font-bold mt-5">
            {formatCurrency(product.price)}
          </p>

          {/* Product Specs */}
          <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm">
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Specification" value={product.specs ?? "N/A"} />
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center gap-3 text-sm">
            <span className="font-medium text-gray-800 w-24">Quantity</span>
            <input
              type="number"
              value={selectedQuantity}
              min={1}
              max={product.quantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-pink-500"
            />
            <span
              className={`font-semibold ${
                product.quantity > 5 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.quantity > 5
                ? `${product.quantity} pcs available`
                : "Low Stock"}
            </span>
          </div>

          {/* Subtotal */}
          <div className="mt-3 flex items-center text-sm">
            <span className="font-medium text-gray-800 w-24">Subtotal:</span>
            <span className="text-pink-600 font-bold ml-2">
              {formatCurrency(selectedQuantity * product.price)}
            </span>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product, selectedQuantity)}
            className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold 
                       py-3 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

/* Reusable row component */
const DetailRow = ({ label, value }) => (
  <div className="flex text-sm">
    <span className="font-medium text-gray-700 w-24">{label}:</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default ProductList;
