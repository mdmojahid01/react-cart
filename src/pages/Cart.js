import SecondNavbar from "../component/SecondNavbar";
import Footer from "../component/Footer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItemList from "../component/CartItemList";
import { BiRupee } from "react-icons/bi";

function Cart() {
  return (
    <>
      <SecondNavbar />
      {/* ======= Empty cart ====== */}
      {/* <div
        className="empty-cart flex-cr flex-md-row flex-column"
        style={{ minHeight: `calc(100vh - 128px)` }}
      >
        <AiOutlineShoppingCart
          className="pe-md-5"
          style={{ fontSize: "20rem" }}
        />
        <div className="text-center text-md-start">
          <h1>Empty Cart</h1>
          <p>Please add product in your cart...</p>
        </div>
      </div> */}
      {/* ======================= */}
      {/* =========== Cart Items for Order ========== */}
      <div
        className="container-fluid bg-light cart"
        style={{ minHeight: `calc(100vh - 128px)` }}
      >
        <div className="row py-4 flex-cr align-items-start">
          <div className="col-md-11 col-lg-8 px-5">
            <h5>Cart Items</h5>
            <br />
            {/* ======== Cart Item List ===== */}
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />
            <CartItemList />

            <div className="total-cal row flex-cc align-items-end">
              <div className="flex-cr justify-content-md-end mb-3">
                <b>Grand total :</b>
                <BiRupee /> 99999
              </div>
              <div className="flex-cr justify-content-md-end">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
