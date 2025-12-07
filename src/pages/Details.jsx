// Details.jsx
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ProductDetails from "../components/ProductList";
import Layout from "../layout/Layout";

const Details = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <Layout>
      <div className="flex flex-col gap-5 max-w-5xl mx-auto mt-10 p-8">
        <BackButton />
        {product ? (
          <ProductDetails product={product} />
        ) : (
          <p className="text-center text-gray-500">Product not found</p>
        )}
      </div>
    </Layout>
  );
};

export default Details;
