import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src="/imgs/logo.png"
          alt="logo"
          className="w-12 h-12 object-contain"
        />
      </div>
      <span className="text-xl font-bold tracking-wider text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:text-yellow-600">
        OHANA
      </span>
    </Link>
  );
}

export default Logo;
