"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Home() {
  const [scrolled, setScrolled] = useState(false); // Type state as boolean

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 800) {
        setScrolled(true);
      } else {
        // setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RemoveClick = () => {
    setScrolled(true);
  };

  return (
    <>
      <div className={`sec-top-section ${scrolled ? "scrolled" : ""}`}>
        <div className="sec-top-content-section">
          <div>
            <h2>FH DIGITAL</h2>
            <h3 style={{fontSize:"25px", letterSpacing:"3px", fontWeight:"400"}}>ONE STEP SOLUTION PROVIDER & INTEGRATION</h3>
            <p>
              FH Group is a hub of creativity and innovation, providing
              AI-powered digital solutions. We specialize in online maintenance,
              digital marketing, social media management, branding, graphic
              design, motion graphics, 3D animations, and web integrations. Our
              expertise ensures secure platforms, data-driven strategies, and
              high-quality content, empowering brands with efficiency and
              innovation
            </p>
          </div>
          <Link href="/contact" className="w-100">
            <button>
              CONTACT US <MdArrowForwardIos />
            </button>
          </Link>
        </div>
        <div onClick={RemoveClick} className="close-section"></div>
      </div>
      {/* <div className="sec-img-section"></div> */}
    </>
  );
}
