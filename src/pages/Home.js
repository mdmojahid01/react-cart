import NavbarComponent from "../component/Navbar";
import React, { useState } from "react";
import "../Assets/css/home.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
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
import Product from "../component/Product";
import Footer from "../component/Footer";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // =============== Home Component JSX ==================
  return (
    <>
      <div className="home-container">
        <div className="layer bg-custom-light-50 flex-cr">
          <NavbarComponent />
          <div className="custom-caption flex-cc text-black">
            <h1 className="display-5">Are you nuts lover?</h1>
            <h1 className="display-1">Don't Wait!</h1>
            <NavLink
              to="/cart"
              className="btn btn-primary bg-custom-dark border-0  px-3"
            >
              Order now
            </NavLink>
          </div>
        </div>
        {/* ------------ Background Carousel ------------ */}
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          interval={3000}
        >
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img1})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img2})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img3})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img4})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img5})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img6})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img7})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img8})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img9})` }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img10})` }}
            ></div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Product />
      <Footer />
    </>
  );
}

export default Home;
