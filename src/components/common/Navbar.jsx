import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, ShoppingBag, Phone, UserPlus, LogIn } from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Products", path: "/products", icon: ShoppingBag },
  { name: "Contact", path: "/contact", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#fff7e6] shadow-md shadow-slate-400/20">
      {/* Top Bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-slate-700"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-green-600 text-sm font-bold text-white">
            R
          </span>
          Rah<span className="text-green-600">Kirana</span>
        </NavLink>

        {/* Center Menu */}
        <nav className="mx-auto hidden md:flex items-center gap-10">
          {links.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `
                group relative flex items-center gap-1.5
                text-sm font-medium tracking-wide
                transition-all duration-300
                ${
                  isActive
                    ? "text-slate-800"
                    : "text-slate-500 hover:text-slate-700"
                }
              `
              }
            >
              <Icon size={16} />
              <span className="relative">
                {name}
                {/* underline animation */}
                <span
                  className="
                    absolute -bottom-2 left-0 h-[2px] w-0
                    bg-green-600 transition-all duration-300
                    group-hover:w-full
                  "
                />
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/login"
            className="
              flex items-center gap-1.5
              text-sm font-medium text-slate-600
              transition hover:text-slate-800
            "
          >
            <LogIn size={16} />
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="
              flex h-10 items-center gap-1.5
              rounded-md bg-green-600 px-4
              text-sm font-semibold text-white
              transition hover:bg-green-700
            "
          >
            <UserPlus size={16} />
            Register
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-200/40 md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-slate-600"></span>
            <span className="block h-0.5 w-6 bg-slate-600"></span>
            <span className="block h-0.5 w-6 bg-slate-600"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#fff7e6] px-6 py-5 space-y-4">
          {links.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-2
                text-sm font-medium text-slate-600
                transition hover:text-slate-800
              "
            >
              <Icon size={16} />
              {name}
            </NavLink>
          ))}

          {/* Mobile Auth (ONE ROW) */}
          <div className="mt-4 flex gap-4">
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="
                flex h-10 flex-1 items-center justify-center gap-1.5
                rounded-md border border-slate-300
                text-sm font-medium text-slate-700
              "
            >
              <LogIn size={16} />
              Login
            </NavLink>

            <NavLink
              to="/register"
              onClick={() => setOpen(false)}
              className="
                flex h-10 flex-1 items-center justify-center gap-1.5
                rounded-md bg-green-600
                text-sm font-semibold text-white
              "
            >
              <UserPlus size={16} />
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
