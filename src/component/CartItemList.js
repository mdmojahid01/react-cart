import Img1 from "../Assets/images/products/akhrot.jpg";
import { BiRupee } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function CartItemList() {
  return (
    <div className="cart-item row py-3 mb-3 rounded-3 bg-custom-light">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-8  flex-cc flex-md-row justify-content-md-start">
            <div className="image-con me-md-4 " style={{ width: "100px" }}>
              <img src={Img1} className="d-block rounded-3 w-100" alt="" />
            </div>
            <h5 className="text-c1 my-2">Almonds</h5>
          </div>
          <div className="col-md-4 flex-cr py-1 py-md-0">
            <button className="btn border-0 px-1">
              <AiFillMinusCircle className="h2 m-0 text-c3" />
            </button>
            <button className="btn border-0 px-1" disabled>
              <span className="h3 m-0">0</span>
            </button>
            <button className="btn border-0 px-1">
              <AiFillPlusCircle className="h2 m-0 text-c3" />
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
            <button className="btn text-danger p-1 m-0">
              <TiDelete className="h1 m-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemList;
