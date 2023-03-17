import { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";

function Uparrow() {
  const [uparrow, setUparrow] = useState(false);
  document.addEventListener("scroll", () => {
    if (window.scrollY > window.screen.height / 2) {
      setUparrow(true);
    } else {
      setUparrow(false);
    }
  });
  const handleUparrow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ===========================================================================
  return (
    <>
      {uparrow ? (
        <div
          onClick={handleUparrow}
          className="uparrow bg-custom-dark flex-cr text-light rounded-5 display-1"
        >
          <IoIosArrowDropup />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Uparrow;
