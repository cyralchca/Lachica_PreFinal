import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const Layout = ({ children, onAddProduct }) => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onAddProduct={onAddProduct} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
