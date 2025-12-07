import samsung_tv from "./assets/samsung_tv.png";
import playstation_5 from "./assets/playstation_5.png";
import sony_zv1f_camera from "./assets/sony_zv1f_camera.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import CartPage from "./pages/CartOverview";

function App() {
  // Default 3 products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung 55-inch Smart TV",
      price: 999.99,
      rating: 5,
      image: samsung_tv,
      category: "Television",
      quantity: 300,
      description:
        "A 55-inch 4K UHD Smart TV with vibrant colors and built-in streaming apps.",
    },
    {
      id: 2,
      name: "PlayStation 5",
      price: 499.99,
      rating: 5,
      image: playstation_5,
      category: "Gaming Console",
      quantity: 5,
      description:
        "Sony’s latest next-gen console featuring ultra-fast SSD and ray tracing support.",
    },
    {
      id: 3,
      name: "Sony ZV-1F Vlogging Camera",
      price: 749.99,
      rating: 5,
      image: sony_zv1f_camera,
      category: "Camera",
      quantity: 80,
      description:
        "A compact 4K vlogging camera designed for content creators and everyday shooting.",
    },
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} onAddProduct={handleAddProduct} />}
        />
        <Route path="/details/:id" element={<Details products={products} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
