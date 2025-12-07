import { Search } from "lucide-react";

const ProductSearch = () => {
  return (
    <div className="relative flex items-center w-full max-w-md">
      <Search
        className="absolute left-4 text-gray-400 cursor-pointer"
        size={20}
      />
      <input
        type="text"
        placeholder="Search products"
        className="w-full py-3 pl-11 pr-4 rounded-full 
                     bg-gray-100 text-amber-950 
                     placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-violet-300
                     transition-all duration-300 text-sm sm:text-base"
      />
    </div>
  );
};

export default ProductSearch;
