import { formatDate } from "../utils/formatDate";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="w-7xl justify-center p-8 border-t border-gray-200">
        <p className="text-center text-gray-500 font-extralight">&copy; {formatDate()} cyStore. All Rights Preserved.</p>
      </div>
    </div>
  );
};

export default Footer;
