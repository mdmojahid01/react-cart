import { BiRupee } from "react-icons/bi";

function ProductItem({ img, price, name }) {
  return (
    <div className="col-md-3 bg-transparent p-3">
      <div className="p-3 rounded-4" style={{ backgroundColor: "#e7e7ed" }}>
        <div className="image-container" style={{ height: "230px" }}>
          <img
            src={img}
            className="d-block w-100 object-fit-cover rounded-4 h-100"
            alt={name}
          />
        </div>
        <h5 className="product-name text-center text-capitalize pt-3">
          {name}
        </h5>
        <div className="row pt-2">
          <div className="col-6 flex-cr  justify-content-start">
            <h6 className="flex-cr m-0">
              <BiRupee />
              {price} /kg
            </h6>
          </div>
          <div className="col-6 flex-cr justify-content-end">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
