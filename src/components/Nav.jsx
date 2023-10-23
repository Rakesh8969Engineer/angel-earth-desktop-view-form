import React from "react";

function Nav() {
  return (
    <>
      <div className="Nav-container flex justify-between  items-center p-5">
        <div>
          <p className="text-blue-900 font-bold"> Angel-Earth </p>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>

            <li className="relative font-bold">
              <span className="absolute top-0 left-4 w-[50%] h-[3px] bg-black"></span>
              <span className="absolute bottom-0 left-4 w-[50%] h-[3px] bg-black"></span>
              Contact
            </li>

            <li>Why D- Transfer</li>
          </ul>
        </div>
        <div className="flex gap-5 justify-center">
          <div>
            <button className=" px-4 py-2">Log In</button>
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 text-center bg-tansparent  font-semibold  border border-[#413434]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
