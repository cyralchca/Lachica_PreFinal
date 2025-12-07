import { useState } from "react";
import { PlusCircle } from "lucide-react";

const Category = ({ products, setSelectedCategory, onAdd }) => {
  const uniqueCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const [active, setActive] = useState("All");

  return (
    <div className="flex items-center justify-between px-12 py-6 bg-white">
      {/* Categories */}
      <div className="flex items-center gap-3 flex-wrap">
        {uniqueCategories.map((category, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedCategory(category);
              setActive(category);
            }}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-200
              ${
                active === category
                  ? "bg-pink-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Add Product Button */}
      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-3 rounded-full shadow-md transition-all active:scale-95"
      >
        <PlusCircle size={22} />
        <span>Add Product</span>
      </button>
    </div>
  );
};

export default Category;
