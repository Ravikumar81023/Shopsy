import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { GrFormAdd } from "react-icons/gr";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menu, setMenu] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleDropdown = () => {
    setDropdown(!Dropdown);
  };
  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}

      <div className="bg-primary/40 py-3 ">
        <div className="container flex justify-between items-center">
          <div>
            <TfiMenu
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => handleMenu()}
            />
            {menu && (
              <div
              data-aos ="fade-down"
               className="absolute top-[100%] left-0 right-0 flex flex-col gap-5 w-full bg-gray-400 text-white py-8 px-6 sm:hidden duration-200">
                {Menu.map((data) => (
                  <div
                    key={data.id}
                    className="px-4 py-2 w-full text-left text-sm font-semibold hover:bg-gray-800 duration-200 rounded-lg"
                  >
                    <a href="#">{data.name}</a>
                  </div>
                ))}
                <div className="flex items-center gap-4 font-semibold text-sm px-4 py-2 cursor-pointer relative">
                  <a onClick={() => handleDropdown()} href="#">
                    {" "}
                    Trending <GrFormAdd className="inline-flex" />
                  </a>
                  {Dropdown && (
                    <ul
                      data-aos ="zoom-in"
                      className={`absolute top-[80%] left-24 bg-slate-500 px-4 py-2 rounded-md transition-all delay-200 duration-200`}
                    >
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a href={data.link}>{data.name} </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
              <img src={logo} alt="logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-center items-center gap-4">
            <div className="group hidden sm:block relative">
              <input
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
                type="text"
                placeholder="Search....."
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex justify-center items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center font-medium">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Simple Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className=" group flex items-center gap-[2px] py-2 ">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute  hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}>{data.name} </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
