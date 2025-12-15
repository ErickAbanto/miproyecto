import { CgProfile } from "react-icons/cg";
import { UserRound, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function ProfileDropdown({ profileOpen, setProfileOpen, profileRef }) {
  return (
    <div className="relative">
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-1 text-black hover:text-yellow-600 transition-all duration-200"
      >
        <CgProfile size={22} />
        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            profileOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {profileOpen && (
        <div
          ref={profileRef}
          className="absolute right-0 mt-2 w-48 bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden z-50"
        >
          <ul className="py-2">
            <li>
              <Link
                to="/perfil"
                className="block px-4 py-2 text-black hover:bg-yellow-100 font-medium"
                onClick={() => setProfileOpen(false)}
              >
                <UserRound size={16} className="inline-block mr-2" />
                Mi Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="block px-4 py-2 text-black hover:bg-yellow-100 font-medium"
                onClick={() => setProfileOpen(false)}
              >
                <CgProfile size={16} className="inline-block mr-2" />
                Admin Panel
              </Link>
            </li>
            <li className="border-t-2 border-black/10 mt-1 pt-1">
              <button
                className="w-full text-left px-4 py-2 text-black hover:bg-yellow-100 font-medium"
                onClick={() => setProfileOpen(false)}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
