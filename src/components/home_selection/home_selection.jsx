import React, { useRef } from "react";
import Link from "next/link";

const homeselection = () => {
  // Ref for the menu element
  const menushowhide = useRef(null);

  // Function to toggle class
  const handleClassToggle = (elementRef, action, className) => {
    if (elementRef.current) {
      if (action === "add") {
        elementRef.current.classList.add(className);
      } else if (action === "remove") {
        elementRef.current.classList.remove(className);
      }
    }
  };
  const handleAddClick = () => {
    handleClassToggle(menushowhide, "add", "hide_selection_tab");
  };

  return (
    <>

      <div className="home_selection_main" ref={menushowhide}>
        <div className="pointer" onClick={handleAddClick}>
          <div className="div_1">
            <div className="inner_content">
              <img
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349340/FHGROUPOC/LOGOS/zfq9wbqmxdxjo1qqrcoi.png"
                alt="DIGITAL SOLUTIONS & INTEGRATION"
              />
              <h4>
                DIGITAL SOLUTIONS & <br /> INTEGRATION
              </h4>
              <p>
                FH Group provides online maintenance, digital marketing, social
                media management, branding, graphics design, motion graphics, 3D
                animations, and A1 technology.
              </p>
            </div>


            
          </div>
        </div>
        <Link href="/engineering">
          <div className="div_2">
            <div className="inner_content">
              <img
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349340/FHGROUPOC/LOGOS/zfq9wbqmxdxjo1qqrcoi.png"
                alt="Engineering SOLUTIONS"
              />
              <h4>Engineering SOLUTIONS</h4>
              <p>
                FH Engineering is your go-to partner for innovative and
                customized Engineering solutions. We blend cutting-edge
                technology with exceptional craftsmanship to bring your visions
                to life.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default homeselection;
