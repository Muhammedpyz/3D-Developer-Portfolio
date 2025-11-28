import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed bottom-5 sm:bottom-10 z-20 justify-center pointer-events-none`}
    >
      <div className="w-full max-w-7xl flex justify-center items-center pointer-events-auto">
        {/* Floating Dock Container */}
        <div className="flex items-center gap-4 bg-black-200/80 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-2xl border border-white/10 shadow-lg shadow-cyan-500/20">

          {/* Logo (Mini) */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </Link>

          <div className="w-[1px] h-6 bg-white/20 mx-2"></div>

          {/* Desktop Links */}
          <ul className="list-none hidden sm:flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-secondary" : "text-white"
                  } hover:text-cyan-400 text-[16px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title.toLowerCase()}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute bottom-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-white/10`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title.toLowerCase()}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
