import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-t border-b border-gray-700">
      <div className="flex justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-b-blue-500 px-4"
              : "hover:text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/starships"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-b-blue-500 px-4"
              : "hover:text-gray-400"
          }
        >
          Starships
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
