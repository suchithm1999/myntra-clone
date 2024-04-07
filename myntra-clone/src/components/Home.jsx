import ProductDisplayCard from "./ProductDisplayCard";
import UseToGetProductLists from "../custom-hook/UseToGetProductsLists";

function Home() {
  const productList = UseToGetProductLists();
  return (
    <>
      <div className="w-10/12 m-auto h-full top-20">
        <div className="grid-cols-5 grid m-3 gap-3">
          {productList.map((product) => (
            <ProductDisplayCard key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
