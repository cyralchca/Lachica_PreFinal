import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Link to="/">
      <div className="flex">
        <div className="flex gap-3 py-3 pl-5 pr-12 rounded-full hover:bg-gray-200 transition-colors duration-200">
          <ArrowLeft />
          <span className="font-semibold">Back to home</span>
        </div>
      </div>
    </Link>
  );
};

export default BackButton;
