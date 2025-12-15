import { Link } from "react-router-dom";

function MobileNavItem({ to, label, icon, onClick }) {
  const Icon = icon;

  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 text-lg font-bold hover:text-yellow-600"
    >
      <Icon size={22} />
      {label}
    </Link>
  );
}

export default MobileNavItem;
