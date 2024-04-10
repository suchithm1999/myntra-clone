import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../Store/BagStore";
import { useNavigate } from "react-router-dom";

function ProductDisplayCard(product) {
  const { productData } = product;
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.Bag);
  const navigation = useNavigate();

  const addItemToBag = (event) => {
    dispatch(BagActions.addToBag(productData));
    event.stopPropagation();
  };

  const removeItemFromBag = (event) => {
    dispatch(BagActions.removeFromBag(productData));
    event.stopPropagation();
  };

  const navigateToProductDetailsPage = () => {
    navigation(`/product-details/${productData.id}`);
  };

  return (
    <>
      <div
        className="flex flex-col gap-2 w-fit m-2 hover:shadow-2xl p-2 rounded-md cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={navigateToProductDetailsPage}
      >
        <img src={productData.img_url} className="w-52 h-72" />
        <div className={`flex flex-col gap-0.5`}>
          {isHovered && !bagItems.find((item) => item === productData.id) && (
            <button
              onClick={(event) => {
                addItemToBag(event);
              }}
              className="bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded mt-1"
            >
              Add to Bag
            </button>
          )}
          {isHovered && bagItems.find((item) => item === productData.id) && (
            <button
              onClick={(event) => removeItemFromBag(event)}
              className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded mt-1"
            >
              Remove from Bag
            </button>
          )}
          {!isHovered && (
            <>
              <span className="uppercase text-sm font-semibold">
                {productData.product_brand}
              </span>
              <span className="text-xs font-semibold text-gray-400">
                {productData.product_type}
              </span>
            </>
          )}
          <span
            className={`text-xs font-bold ${isHovered ? " relative top-2" : ""}`}
          >
            $. {productData.price}
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductDisplayCard;
