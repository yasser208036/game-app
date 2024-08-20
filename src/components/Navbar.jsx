import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo 1.png";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="h-20 container flex items-center justify-between">
        <Link to="/" className="logo w-16 lg:w-20 ">
          <img src={Logo} alt="logo image" />
        </Link>
        <ul className="flex text-white items-center gap-3  text-xl lg:text-2xl ">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </ul>
      </div>
    </div>
  );
}
