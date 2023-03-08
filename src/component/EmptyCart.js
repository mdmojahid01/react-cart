import { AiOutlineShoppingCart } from "react-icons/ai";

function EmptyCart() {
  return (
    <div
      className="empty-cart flex-cr flex-md-row flex-column bg-light3"
      style={{ minHeight: `calc(100vh - 135px)` }}
    >
      <AiOutlineShoppingCart
        className="pe-md-5"
        style={{ fontSize: "20rem" }}
      />
      <div className="text-center text-md-start">
        <h1>Empty Cart</h1>
        <p>Please add product in your cart...</p>
      </div>
    </div>
  );
}

export default EmptyCart;
