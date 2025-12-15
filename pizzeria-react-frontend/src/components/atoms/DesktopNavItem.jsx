import { Link } from "react-router-dom";

function DesktopNavItem({ to, label, onClick }) {
  return (
    <li className="hover:text-yellow-600 transition-all duration-200">
      <Link to={to} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
}

export default DesktopNavItem;
