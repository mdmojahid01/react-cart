import Img1 from "../Assets/images/products/akhrot.jpg";
import { BiRupee } from "react-icons/bi";

function CartItemList() {
  return (
    <div
      className="cart-item row py-3 mb-3 rounded-3"
      style={{ backgroundColor: "#e7e7ed" }}
    >
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-8  flex-cr justify-content-md-start">
            <div className="image-con me-4" style={{ width: "100px" }}>
              <img src={Img1} className="d-block rounded-3 w-100" alt="" />
            </div>
            <h5>Almonds</h5>
          </div>
          <div className="col-md-4 flex-cr py-3 py-md-0">
            <button className="btn btn-outline-primary rounded-5 px-3">
              -
            </button>
            <span className="px-3">0</span>
            <button className="btn btn-outline-primary rounded-5 px-3">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 flex-cr">
        <div className="row w-100 flex-cr">
          <div className="col-6 flex-cr justify-content-start">
            <BiRupee /> 999
          </div>
          <div className="col-6 d-flex justify-content-md-center justify-content-end ">
            <button className="btn btn-danger">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemList;
