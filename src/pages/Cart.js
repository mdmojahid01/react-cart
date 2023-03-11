import SecondNavbar from "../component/SecondNavbar";
import Footer from "../component/Footer";
import CartItemList from "../component/CartItemList";
import { BiRupee } from "react-icons/bi";
import EmptyCart from "../component/EmptyCart";
import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";

function Cart() {
  const { products } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
  const [cartProduct, setCartProduct] = useState([]);
  const [grandTotal, setGrandTotal] = useState();
  useEffect(() => {
    if (!cart.items) {
      return;
    }

    let cartItemKey = Object.keys(cart.items);
    const temp = products.filter((item, index) => {
      return cartItemKey.indexOf(item["_id"]) !== -1;
    });
    setCartProduct(temp);
  }, [cart, products]);

  const updateGrandTotal = () => {
    if (cartProduct.length) {
      let total = 0;
      cartProduct.forEach((i) => {
        total += i.price * cart.items[i._id];
      });
      return total;
    }
  };
  useEffect(() => {
    setGrandTotal(updateGrandTotal());
  }, [cartProduct]);
  const handleOrdernow = () => {
    window.alert("Order placed successfully");
    setCartProduct({});
    setCart({});
  };

  // ==========================================================
  return (
    <>
      <SecondNavbar />
      {cartProduct.length ? (
        <div
          className="container-fluid bg-light3 cart"
          style={{ minHeight: `calc(100vh - 135px)` }}
        >
          <div className="row py-4 flex-cr align-items-start">
            <div className="col-md-11 col-lg-8 px-md-5 px-4">
              <h5 className="text-c1 text-center text-md-start">Cart Items</h5>
              <br />
              {/* ======== Cart Item List ===== */}

              {cartProduct.map((item, index) => {
                return <CartItemList product={item} key={item._id} />;
              })}

              <div className="total-cal row flex-cc align-items-end">
                <div className="flex-cr justify-content-md-end mb-3">
                  <b className="text-c1">Grand total :</b>
                  <BiRupee /> {grandTotal}
                </div>
                <div className="flex-cr justify-content-md-end">
                  <button
                    onClick={() => {
                      handleOrdernow();
                    }}
                    className="btn btn-primary bg-custom-dark border-0"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      <Footer />
    </>
  );
}

export default Cart;
