import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useTheme } from "../provider/ThemeProvider";
import logo2 from "../assets/logo2.png";
import { BsBrightnessHighFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { IoLogoStencil } from "react-icons/io5";

const Navbar = () => {
  const auth = useAuth();
  const theme = useTheme();
  const showUserMenu = () => {
    document.getElementById("myDropdown").classList.toggle("hidden");
  };

  window.onclick = (event) => {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains("hidden")) {
          openDropdown.classList.add("hidden");
        }
      }
    }
  };
  return (
    <nav id="header" className=" w-full bg-gray-100 dark:bg-gray-800">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-1">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <li>
                <p className="inline-block no-underline text-gray-900 dark:text-white hover:text-gray-200 font-medium text-lg py-0 px-4 lg:-ml-2">
                  <Link to="/">
                    <IoLogoStencil size="1.5rem" />
                    {/* <img className="w-8 h-8" src={logo2} alt="logo" /> */}
                  </Link>
                </p>
              </li>
            </ul>
          </nav>
        </div>
        {auth.signedIn ? (
          // <div
          //   className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          //   id="nav-content"
          // >
          //   <Link
          //     className="flex items-center"
          //     to={`/profile/${auth.user._id}`}
          //   >
          //     <img
          //       className="mx-2 w-8 h-8 object-cover rounded-full hidden sm:block"
          //       src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
          //       alt="avatar"
          //     />
          //   </Link>
          // </div>
          <div
            className="relative inline-block order-2 md:order-3"
            id="nav-content"
          >
            <div
              onClick={showUserMenu}
              className="dropbtn bg-cover block bg-no-repeat bg-center w-8 h-8 rounded-full cursor-pointer p-1 mr-4"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80")`,
              }}
            ></div>
            <div
              id="myDropdown"
              className="dropdown-content divide-y hidden mt-4 z-10 absolute right-0 flex flex-col items-center overflow-auto bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-900 w-96 rounded-lg border"
            >
              <div
                className="block p-4 w-full flex justify-center bg-transparent text-gray-800 dark:text-gray-100  p-1 hover:text-gray-600 cursor-pointer"
                onClick={() => {
                  console.log("theme changed");
                  if (theme.theme === "light") {
                    localStorage.theme = "dark";
                    theme.setTheme("dark");
                  } else {
                    localStorage.theme = "light";
                    theme.setTheme("light");
                  }
                }}
              >
                {theme.theme.toUpperCase() === "DARK" ? (
                  <BsBrightnessHighFill />
                ) : (
                  <BsMoon />
                )}
              </div>
              <Link className="w-full" to={`/profile/${auth.user._id}`}>
                <div className="block p-4 w-full flex justify-center">
                  Profile
                </div>
              </Link>
              <Link className="w-full" to="/login">
                <div className="block p-4 w-full flex justify-center">
                  Logout
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
            id="nav-content"
          >
            <div className="auth flex items-center w-full md:w-full">
              <button
                className="bg-transparent text-gray-800 dark:text-gray-100  p-1 mr-4 hover:text-gray-600"
                onClick={() => {
                  console.log("theme changed");
                  if (theme.theme === "light") {
                    localStorage.theme = "dark";
                    theme.setTheme("dark");
                  } else {
                    localStorage.theme = "light";
                    theme.setTheme("light");
                  }
                }}
              >
                {theme.theme.toUpperCase() === "DARK" ? (
                  <BsBrightnessHighFill />
                ) : (
                  <BsMoon />
                )}
              </button>
              <Link to="/login">
                <button className="bg-transparent text-gray-800 dark:text-gray-100  p-1 rounded border border-gray-300 mr-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700">
                  Sign in
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-600 text-gray-200 p-1 rounded  hover:bg-blue-500 hover:text-gray-100">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
