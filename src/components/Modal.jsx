import { X } from "lucide-react";
import { useState } from "react";

const Modal = ({ setIsModalOpen, onAddProduct }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    specification: "",
    rating: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddProduct(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-6 flex justify-between items-center gap-2">
        <h2 className="text-2xl font-semibold text-gray-800 ">
          Add New Product
        </h2>
        <div className="cursor-pointer">
          <X onClick={() => setIsModalOpen(false)} size={25} />
        </div>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Feature Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            placeholder="e.g. Electronics"
            className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Enter a short description..."
            rows="3"
            className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition resize-none"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Specification
          </label>
          <textarea
            name="specification"
            placeholder="Enter specifications..."
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition resize-none"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Rating</label>
            <input
              type="number"
              name="rating"
              min={0}
              placeholder="0–5"
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              placeholder="₱0.00"
              onChange={handleChange}
              min={0}
              className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="0"
              onChange={handleChange}
              min={0}
              className="w-full border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none p-2.5 rounded-lg transition"
              required
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2.5 rounded-lg hover:bg-pink-700 active:scale-[0.98] transition font-medium shadow-md cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Modal;
