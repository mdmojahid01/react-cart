import NavbarComponent from "../component/Navbar";
import React, { useState } from "react";
import "../Assets/css/home.css";
import Carousel from "react-bootstrap/Carousel";
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
        <NavbarComponent />

        {/* ------------ Carousel ------------ */}
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
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img2})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img3})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img4})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img5})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img6})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img7})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img8})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img9})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${Img10})` }}
            >
              <div className="layer flex-cr">
                <Carousel.Caption className="custom-caption">
                  <h2>Are you nuts lover?</h2>
                  <h1>Don't Wait!</h1>
                  <button className="btn btn-primary px-3">Order now</button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Product />
      <Footer />
    </>
  );
}

export default Home;
