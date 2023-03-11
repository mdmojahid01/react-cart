import ProductItem from "./ProductItem";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
function Product() {
  const { products } = useContext(ProductContext);
  // =======================================
  return (
    <div className="py-5 bg-light3 px-3  px-md-5">
      <h1 className=" pb-3 text-c1 text-center">Products</h1>
      <div className="row">
        {products.map((item) => {
          return (
            <ProductItem
              key={item._id}
              _id={item._id}
              img={item.image}
              price={item.price}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
