import { useDispatch, useSelector } from "react-redux";
import ProductList from "../Data/ProductList.json";
import { productListAction } from "../Store/ProductListStore";
import { useEffect } from "react";

function UseToGetProductLists() {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.productList);

  const fetchProductList = () => {
    const productList = ProductList;
    dispatch(productListAction.addInitialProductList(productList));
  };

  useEffect(() => {
    fetchProductList();
  });

  return productList;
}

export default UseToGetProductLists;
