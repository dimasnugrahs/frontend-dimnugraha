import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import iconCompany from "../assets/images/logo-dimas-green-01.png";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const menus = [
    { name: "Home", to: "/", subMenu: null },
    { name: "Personal", to: "/about", subMenu: null },
    {
      name: "Projects",
      to: "#",
      subMenu: [
        { name: "Web Development", to: "/product/tabungan-harian" },
        { name: "Network Engineer", to: "/product/tabungan-berjangka" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-20 lg:px-20 lg:py-3 transition-colors duration-50 ease-in-out md:${
        navbarBg ? "bg-company-50" : "bg-transparent"
      } ${navbarBg || isOpen ? "bg-company-50 shadow-sm" : "bg-transparent"}`}
    >
      <div className="mx-auto">
        <div className="flex items-center justify-between py-2 px-6 lg:px-0 lg:py-0 lg:mt-0 mt-4">
          <motion.ul
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => handleScrollToTop("/")}
            >
              <img src={iconCompany} alt="Icon" className="lg:w-10 w-10" />
            </Link>
          </motion.ul>
          <div className="hidden lg:flex flex-grow justify-end space-x-4">
            {menus.map((menu, index) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                key={index}
                className="relative group py-4"
              >
                <ul>
                  {menu.subMenu ? (
                    <Link
                      to="#"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 text-company-950 hover:text-company-600"
                    >
                      {menu.name}
                    </Link>
                  ) : (
                    <Link
                      to={menu.to}
                      onClick={() => handleScrollToTop(menu.to)}
                      className="px-4 text-company-950 hover:text-company-600"
                    >
                      {menu.name}
                    </Link>
                  )}

                  {/* Sub Menu */}
                  {menu.subMenu && (
                    <div className="absolute left-0 mt-4 w-64 bg-company-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div className="absolute top-0 left-4 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-company-900"></div>
                      {menu.subMenu.map((sub, subIndex) => (
                        <Link
                          to={sub.to}
                          key={subIndex}
                          className="block px-6 py-4 text-white hover:text-company-200 border-solid border-b border-company-50"
                          onClick={() => handleScrollToTop(sub.to)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex"
          >
            <ul>
              <Link
                to="/contact"
                className="px-8 py-2 rounded-lg bg-company-600 text-white hover:text-company-950  hover:bg-transparent hover:ring hover:ring-company-900 hover:shadow-lg"
              >
                Say Hello
              </Link>
            </ul>
          </motion.div>

          {/* Trigger button navbar mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-company-950 text-sm focus:outline-none z"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu versi mobile */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <ul>
              {menus.map((menu, index) => (
                <div key={index} className="relative ">
                  {menu.subMenu === null ? (
                    <Link
                      to={menu.to}
                      className="text-company-950 hover:text-company-50 hover:bg-company-600 hover:rounded block px-5 py-2"
                      onClick={() => {
                        handleScrollToTop(menu.to);
                        setIsOpen(false); // Menutup navbar setelah klik sub-menu
                      }}
                    >
                      {menu.name}
                    </Link>
                  ) : (
                    <div className="group">
                      <button className="text-company-950 hover:text-company-600 block px-5 py-2">
                        {menu.name}
                      </button>
                      <div className="ml-4">
                        {menu.subMenu.map((sub, subIndex) => (
                          <Link
                            to={sub.to}
                            key={subIndex}
                            className="block px-4 py-2 text-company-950 hover:text-company-50 hover:bg-company-600 hover:rounded"
                            onClick={() => {
                              handleScrollToTop(sub.to);
                              setIsOpen(false); // Menutup navbar setelah klik menu
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="text-company-950 hover:text-company-50 hover:bg-company-600 hover:rounded block px-5 py-2 rounded-md"
              >
                Say Hello
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
