import Logo from "./LogoName";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white py-4 px-12 shadow-md">
      <Link to="/" className="flex items-center gap-10 w-full max-w-6xl">
        <Logo />
      </Link>
      <div className="flex gap-5">
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
