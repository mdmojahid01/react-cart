import SecondNavbar from "../component/SecondNavbar";
import Footer from "../component/Footer";
import CartItemList from "../component/CartItemList";
import { BiRupee } from "react-icons/bi";
import EmptyCart from "../component/EmptyCart";

function Cart() {
  return (
    <>
      <SecondNavbar />
      {false ? (
        <EmptyCart />
      ) : (
        <div
          className="container-fluid bg-light3 cart"
          style={{ minHeight: `calc(100vh - 135px)` }}
        >
          <div className="row py-4 flex-cr align-items-start">
            <div className="col-md-11 col-lg-8 px-5">
              <h5 className="text-c1 text-center text-md-start">Cart Items</h5>
              <br />
              {/* ======== Cart Item List ===== */}
              <CartItemList />
              <CartItemList />
              <CartItemList />

              <div className="total-cal row flex-cc align-items-end">
                <div className="flex-cr justify-content-md-end mb-3">
                  <b className="text-c1">Grand total :</b>
                  <BiRupee /> 99999
                </div>
                <div className="flex-cr justify-content-md-end">
                  <button className="btn btn-primary bg-custom-dark border-0">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
