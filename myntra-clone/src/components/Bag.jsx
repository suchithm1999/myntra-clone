import { useSelector } from "react-redux";
import UseToGetProductLists from "../custom-hook/UseToGetProductsLists";
import { useState } from "react";

function Bag() {
  const productList = UseToGetProductLists();

  const BagItemsId = useSelector((store) => store.Bag);

  const filteredProducts = productList.filter((product) =>
    BagItemsId.includes(product.id),
  );

  const BagItems = filteredProducts;

  const [itemsSelected, setItemsSelected] = useState(BagItems);

  const removeAllItemsFromSelected = () => {
    setItemsSelected([]);
  };

  const addAllItemsToSelected = () => {
    setItemsSelected(BagItems);
  };

  const handleCheckBox = (event) => {
    if (!event.target.checked) {
      removeAllItemsFromSelected();
    } else {
      addAllItemsToSelected();
    }
  };

  const handledSelectedItem = (event, item) => {
    let bagItems = [...itemsSelected];
    if (event.target.checked) {
      !bagItems.includes(item) ? bagItems.push(item) : bagItems;
    } else {
      bagItems = bagItems.filter((itemObj) => itemObj.id !== item.id);
    }
    setItemsSelected(bagItems);
  };

  const calculateTotalMRP = () => {
    let totalMRP = 0;
    itemsSelected.forEach((item) => {
      totalMRP += item.price; // Assuming price is the property representing MRP
    });
    return totalMRP;
  };

  return (
    <>
      <div className="w-1/2 m-auto h-full top-20 flex">
        <div className="w-11/12">
          <div className="w-full p-4">
            <div className="w-full p-3 px-4 flex items-center justify-between bg-pink-50 border border-pink-100 rounded-sm">
              <span className="font-semibold text-xs text-black">
                Check delivery time & services
              </span>
              <button className="border px-4 border-pink-500 text-pink-500 font-semibold text-xs rounded p-2 active:bg-white active:text-black">
                Enter pin code
              </button>
            </div>
            <div className="w-full py-8 px-4 flex justify-between font-semibold text-sm items-center">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={itemsSelected && itemsSelected.length > 0}
                  onChange={(event) => handleCheckBox(event)}
                />
                <span>
                  {itemsSelected ? itemsSelected.length : 0}/
                  {BagItems ? BagItems.length : 0} ITEMS SELECTED
                </span>
              </div>
              <div className="text-xs text-gray-400 font-medium active:font-bold">
                <button onClick={removeAllItemsFromSelected}>REMOVE</button>
              </div>
            </div>
            {BagItems &&
              BagItems.map((item) => (
                <>
                  <div className="border border-gray-200 p-2 flex gap-2">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={itemsSelected && itemsSelected.includes(item)}
                        onChange={(event) => handledSelectedItem(event, item)}
                        className="absolute top-1 left-1 size-4 accent-pink-500"
                      />
                      <img className="min-w-28 h-40" src={item.img_url} />
                    </div>
                    <div className="flex flex-col justify-between my-3">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-sm">
                          {item.product_brand}
                        </span>
                        <span className="font-semibold text-xs text-gray-400">
                          {item.product_type}
                        </span>
                        <span className="font-bold text-sm">
                          $. {item.price}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-sm">
                          PRODUCT DETAILS
                        </span>
                        <span className="font-semibold text-xs text-gray-400 text-ellipsis">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Incidunt quod natus quo odio quos maiores
                          obcaecati sed deserunt, amet ullam et! Distinctio
                          mollitia aliquid eveniet dolorum culpa ex quibusdam
                          tempore.
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            <div className="border-t border-gray-200 my-5"></div>
            <div>
              <span className="text-xs font-bold text-gray-500">
                PRICE DETAILS ({itemsSelected && itemsSelected.length} items)
              </span>
              <div className="flex flex-col gap-3 mt-2">
                <div className="text-sm font-sans font-bold text-gray-700 flex justify-between">
                  <span>Total MRP</span>
                  <span> $.{calculateTotalMRP()}</span>
                </div>
                <div className="text-sm font-sans font-bold text-gray-700 flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-light text-xs">
                    FREE
                  </span>
                </div>
                <div className="border-t border-gray-200 mt-5 mb-1"></div>
                <div className="text-sm font-sans font-bold text-gray-700 flex justify-between">
                  <span>Total AMOUNT</span>
                  <span>$.{calculateTotalMRP()}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 my-5"></div>
              <div className="flex justify-center w-full m-3">
                <button className="w-10/12 bg-pink-500 rounded text-white active:bg-white active:text-pink-500 p-4 active:border border-pink-500 font-bold">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
