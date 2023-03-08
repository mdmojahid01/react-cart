import ProductItem from "./ProductItem";
import Img1 from "../Assets/images/products/akhrot.jpg";
import Img2 from "../Assets/images/products/almond.jpg";
import Img3 from "../Assets/images/products/chestnuts.jpg";
import Img4 from "../Assets/images/products/coconut.jpg";
import Img5 from "../Assets/images/products/kaju.jpg";
import Img6 from "../Assets/images/products/peacans.jpg";
import Img7 from "../Assets/images/products/peanut.jpg";
import Img8 from "../Assets/images/products/pine-nuts.jpg";
import Img9 from "../Assets/images/products/raisins.jpg";
import Img10 from "../Assets/images/products/sunflower-seeds.jpg";
import Img11 from "../Assets/images/products/mix-nuts.jpg";
import Img12 from "../Assets/images/products/dates.jpg";
function Product() {
  return (
    <div className="py-5 bg-light3 px-5">
      <h1 className=" pb-3 text-c1 text-center">Products</h1>
      <div className="row">
        <ProductItem img={Img1} price="1399" name="Walnuts" />
        <ProductItem img={Img2} price="799" name="Almonds" />
        <ProductItem img={Img3} price="149" name="Chestnut" />
        <ProductItem img={Img4} price="499" name="Coconuts" />
        <ProductItem img={Img5} price="1299" name="Cashews" />
        <ProductItem img={Img6} price="999" name="Pecans" />
        <ProductItem img={Img7} price="249" name="Peanuts" />
        <ProductItem img={Img8} price="1999" name="Pine nuts" />
        <ProductItem img={Img9} price="499" name="Raisins" />
        <ProductItem img={Img10} price="999" name="Sunflower seeds" />
        <ProductItem img={Img11} price="1199" name="Mix-Nuts" />
        <ProductItem img={Img12} price="399" name="Dates" />
      </div>
    </div>
  );
}

export default Product;
