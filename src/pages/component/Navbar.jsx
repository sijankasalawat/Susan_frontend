import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import profile from "../../assets/images/profile.png";

import AddBtn from "./AddBtn";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="bg-white lg:h-[50px] h-[40px] flex justify-center">
        <div className="container flex justify-between  items-center pt-1 px-2">
          <div className="logo flex gap-2 align-middle">
            <img src="Second.png" alt="logo" className="lg:h-[40px] h-[24px]" />
            <h1 className="lg:text-[22px] font-bold text-gray-700">Second</h1>
          </div>
          <div className="align-middle">
            {user ? (
              <div div className="flex gap-3 align-middle">
                <form>
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
                  >
                    Search
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block  mt-2 p-4 ps-10 text-sm  h-[35px] w-[400px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Electronic, machines..."
                      required
                    />
                  </div>
                </form>
               <AddBtn/>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="mt-2">
                      <div className="logo">
                        <img
                          src={profile}
                          alt="logo"
                          className="lg:h-[40px] h-[24px] rounded-full hover:grayscale-[50%] grayscale-0"
                        />
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/ProductAdd"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Your Product
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <hr />
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={logout}
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <>
                <div className="gap-2 flex items-center justify-center">
                  <Link
                    className=" hover:text-sky-600 text-gray-950 "
                    type="submit"
                    to="/"
                  >
                    Login
                  </Link>
                  <div className="solid"></div>
                  <Link
                    to="/register"
                    className="border border-gray-900 rounded-md p-1 hover:bg-gray-800 hover:text-white"
                    type="submit"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
