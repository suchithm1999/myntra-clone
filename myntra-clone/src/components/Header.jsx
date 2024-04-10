import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";

function Header() {
  const BagItems = useSelector((store) => store.Bag);
  const bagItemsLength = BagItems.length;

  const navigation = useNavigate();

  const navigateToBag = () => {
    navigation("../bag");
  };

  const navigateToHome = () => {
    navigation("");
  };
  return (
    <>
      <div className="p-0 m-0 h-20 bg-white shadow-lg w-auto top-0 z-10 sticky">
        <div className=" h-full flex items-center">
          <div className="flex w-full h-full items-center">
            <img
              onClick={navigateToHome}
              style={{ marginLeft: "8%" }}
              src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png"
              alt="myntra-logo"
              className="w-14 h-14 cursor-pointer"
            />
            <nav
              className="flex h-full font-semibold opacity-70 gap-2 w-full"
              style={{ fontSize: "12px", marginLeft: "7%" }}
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
          </div>
          <div
            style={{ marginRight: "4%" }}
            className="w-full flex justify-center gap-16"
          >
            <div
              style={{ maxWidth: "700px" }}
              className="input-group mb-3 h-11 items-center flex gap-2 bg-gray-100 rounded-lg m-2 w-full"
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
              <div className="flex flex-col items-center gap-1 cursor-pointer relative">
                <AiOutlineHeart className="text-xl text-gray-700" />
                <span style={{ fontSize: "10px" }} className="font-bold">
                  Wishlist
                </span>
              </div>
              <div
                className="flex flex-col items-center gap-1 cursor-pointer relative"
                onClick={navigateToBag}
              >
                <div className="absolute -top-2 font-semibold -right-2 bg-red-500 rounded-full h-4 w-4 flex items-center justify-center text-white text-xs">
                  {bagItemsLength}
                </div>
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
