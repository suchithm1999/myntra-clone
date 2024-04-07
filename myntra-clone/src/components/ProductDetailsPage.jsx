import { useParams } from "react-router-dom";
import UseToGetProductLists from "../custom-hook/UseToGetProductsLists";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../Store/BagStore";

function ProductDetailsPage() {
  let { id } = useParams();
  const productList = UseToGetProductLists();
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.Bag);

  const addItemToBag = () => {
    dispatch(BagActions.addToBag(product));
  };

  const removeItemFromBag = () => {
    dispatch(BagActions.removeFromBag(product));
  };

  const product = productList.filter(
    (productItem) => JSON.stringify(productItem.id) === id,
  )[0];
  return (
    <>
      <div className="w-10/12 m-auto h-full top-20 flex">
        <div className="grid-cols-2 grid gap-3 p-4 w-full">
          {product &&
            product.more_images.map((imgUrl) => (
              <div
                key={product.id}
                className="w-full max-w-md"
                style={{ maxHeight: "612px" }}
              >
                <img
                  className="w-full"
                  style={{ maxHeight: "612px", aspectRatio: "auto" }}
                  src={imgUrl}
                />
              </div>
            ))}
        </div>
        <div className="p-4 w-3/5 relative">
          <div className="flex relative flex-col gap-1 top-1/4">
            <span className=" font-bold text-3xl uppercase">
              {product && product.product_brand}
            </span>
            <span className="font-semibold text-gray-400 text-2xl">
              {product && product.product_type}
            </span>
            <div className="border-y-2 border-gray-600 my-1"></div>
            <span className="text-2xl font-bold">
              $. {product && product.price}
            </span>
            {!bagItems.find((item) => item === product.id) && (
              <button
                onClick={addItemToBag}
                className="w-full bg-pink-500 rounded-lg text-white font-bold p-4 active:bg-pink-800"
              >
                Add to Bag
              </button>
            )}
            {bagItems.find((item) => item === product.id) && (
              <button
                onClick={removeItemFromBag}
                className="w-full bg-red-500 rounded-lg text-white font-bold p-4 active:bg-red-800"
              >
                Remove from Bag
              </button>
            )}
          </div>
          <div className="flex relative flex-col" style={{ top: "28%" }}>
            <span className="text-sm font-bold">DELEVERY OPTIONS</span>
            <div className="w-72 border-orange-400 border-2 rounded flex items-center mt-3">
              <input
                placeholder="Enter pincode"
                className="h-9 w-56 outline-none pl-2 mr-2"
              />
              <span className="text-pink-500 text-sm font-bold cursor-pointer">
                Check
              </span>
            </div>
            <span className="text-xs text-gray-500 mt-2">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </span>
            <div className="text-gray-700 flex flex-col text-sm font-bold mt-3 gap-1">
              <span>100% Original Products</span>
              <span>Pay on delivery might be available</span>
              <span>Easy 14 days returns and exchanges</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetailsPage;
