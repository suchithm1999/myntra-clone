import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="p-0 m-0 h-20 bg-white shadow-lg fixed w-full">
        <div className="w-full h-full flex items-center">
          <img
            src="src/assets/Myntra-icon-logo.svg"
            alt="myntra-logo"
            className="w-14 h-9 ml-16 cursor-pointer"
          />
          <nav
            className="flex h-full font-semibold opacity-70 mx-14 ml-16 gap-2"
            style={{ fontSize: "12px" }}
          >
            <div className="h-full flex items-center hover:border-b-4 border-red-600 px-1 mx-1">
              <NavLink to="#" className="p-2 w-max">
                MEN
              </NavLink>
            </div>
            <div className="h-full flex items-center hover:border-b-4 border-pink-700 px-1 mx-1">
              <NavLink to="#" className="p-2 w-max">
                WOMEN
              </NavLink>
            </div>
            <div className="h-full flex items-center hover:border-b-4 border-orange-600 px-1 mx-1">
              <NavLink to="#" className="p-2 w-max">
                KIDS
              </NavLink>
            </div>
            <div className="h-full flex items-center mx-1 hover:border-b-4 border-yellow-600 px-1">
              <NavLink to="#" className="p-2 w-max">
                HOME & LIVING
              </NavLink>
            </div>
            <div className="h-full flex items-center mx-1 hover:border-b-4 border-green-600 px-1">
              <NavLink to="#" className="p-2 w-max">
                BEAUTY
              </NavLink>
            </div>
            <div className="h-full flex items-center mx-1 hover:border-b-4 border-red-600 px-1">
              <NavLink to="#" className="p-2 w-max">
                STUDIO
                <span
                  className="badge badge-pill badge-light text-red-500"
                  style={{
                    fontSize: "9px",
                    top: "-8px",
                    position: "relative",
                    left: "2px",
                  }}
                >
                  NEW
                </span>
              </NavLink>
            </div>
          </nav>
          <div className="w-full flex justify-center gap-16 ml-16">
            <div
              style={{ width: "700px" }}
              className="input-group mb-3 h-11 items-center flex gap-2 bg-gray-100 rounded-lg m-2"
            >
              <div className="input-group-prepend m-3 mr-1">
                <span className="input-group-text" id="basic-addon1">
                  <AiOutlineSearch className="text-gray-500 font-bold m-auto" />
                </span>
              </div>
              <input
                type="text"
                className="form-control h-11 outline-none text-sm rounded-lg bg-gray-100 w-full"
                placeholder="Search for products, brands and more"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <AiOutlineUser className="text-xl text-gray-700" />
                <span style={{ fontSize: "10px" }} className="font-bold">
                  Profile
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <AiOutlineHeart className="text-xl text-gray-700" />
                <span style={{ fontSize: "10px" }} className="font-bold">
                  Wishlist
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <MdOutlineShoppingBag className="text-xl text-gray-700" />
                <span style={{ fontSize: "10px" }} className="font-bold">
                  Bag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
