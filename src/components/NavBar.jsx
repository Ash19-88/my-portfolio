import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { t, i18n } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  React.useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && isOpen && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isOpen]);

  const links = [
    {
      id: 1,
      link: t("home"),
    },
    {
      id: 2,
      link: t("about"),
    },
    {
      id: 3,
      link: t("projects"),
    },
    {
      id: 4,
      link: t("experience"),
    },
    {
      id: 5,
      link: t("contact"),
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
      <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-light font-signature ml-2">
          {t("title")}
        </h1>
      </div>

      <ul className="hidden md:flex font-Raleway">
        <div
          ref={menuRef}
          className="relative inline-block text-left md:text-xs lg:text-base"
        >
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center w-full bg-transparent font-medium border border-slate-300 rounded-md px-2 py-2 text-slate-300 hover:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100"
            >
              {t("changeLanguage")}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-black text-slate-300 ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  className="block px-4 py-2 text-sm hover:bg-fuchsia-800 hover:text-slate-100"
                  role="menuitem"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setIsOpen(false);
                  }}
                >
                  {t("english")}
                </button>
                <button
                  className="block px-4 py-2 text-sm hover:bg-fuchsia-800 hover:text-slate-100"
                  role="menuitem"
                  onClick={() => {
                    i18n.changeLanguage("es");
                    setIsOpen(false);
                  }}
                >
                  {t("spanish")}
                </button>
                <button
                  className="block px-4 py-2 text-sm hover:bg-fuchsia-800 hover:text-slate-100"
                  role="menuitem"
                  onClick={() => {
                    i18n.changeLanguage("pt");
                    setIsOpen(false);
                  }}
                >
                  {t("portuguese")}
                </button>
              </div>
            </div>
          )}
        </div>
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-2 lg:px-4 py-2 cursor-pointer capitalize font-medium text-slate-300 hover:scale-105 duration-200 text-xs lg:text-base"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-800 via-slate-800 to-fuchsia-800 text-white">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl tracking-wide"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <div ref={menuRef} className="relative inline-block text-left">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center w-full font-medium border border-slate-300 rounded-md px-2 py-2 text-white bg-slate-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:text-slate-300"
              >
                {t("changeLanguage")}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-slate-800 text-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    className="block px-4 py-2 text-sm hover:bg-violet-500 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setIsOpen(false);
                    }}
                  >
                    {t("english")}
                  </button>
                  <button
                    className="block px-4 py-2 text-sm hover:bg-violet-500 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      i18n.changeLanguage("es");
                      setIsOpen(false);
                    }}
                  >
                    {t("spanish")}
                  </button>
                  <button
                    className="block px-4 py-2 text-sm hover:bg-violet-500 hover:text-white"
                    role="menuitem"
                    onClick={() => {
                      i18n.changeLanguage("pt");
                      setIsOpen(false);
                    }}
                  >
                    {t("portuguese")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
