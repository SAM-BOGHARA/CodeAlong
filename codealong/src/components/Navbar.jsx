import React from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-between py-4 px-6 bg-gray-100">
        <div className="flex items-center">
          <div className="dropdown relative">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a className="ml-4 text-xl font-semibold">CodeAlong</a>
        </div>
        <div className="hidden lg:flex"></div>
        <div className="flex items-center">
          <Button
            className="btn btn-accent bg-green-700 hover:bg-green-800"
            onClick={() => {
              navigate("/join-room");
            }}
          >
            Create/Join Room
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
