"use client";
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Home_Form = () => {
  useEffect(() => {
    const getid = document.getElementById("home-form");

    const myfun = async (event) => {
      event.preventDefault();
      const formdata = new FormData(event.target);

      const senddata = await fetch(
        "https://script.google.com/macros/s/AKfycbwIvr0r06Uppvmbuyd_utC3my7EclPEto7PvXjReqzMjgP5xi8hpHOhQgLM0agr8RVCbA/exec",
        {
          method: "POST",
          body: formdata,
        }
      );

      if (senddata.ok) {
        toast.success("Thank You For Contacting");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    };
    if (getid) {
      getid.addEventListener("submit", myfun);
    }
  }, []);

  return (
    <>
      <div className="cs_height_90 cs_height_lg_70"></div>
      <div className="Home_Form_Cont">
        <form id="home-form" className="wrap_m center gap-4">
          <div className="h2" style={{  color: "#101010", whiteSpace: "pre" }}>Talk About<br/>Your Project</div>
          <select name="Services" id="service" required>
            <option value="select" disabled selected>
              Select Service
            </option>
            <option value="Brand Strategy"> Brand Strategy</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="graphic design">Digital Marketing</option>
            <option value="web development">Web Development</option>
            <option value="Social Media Marketing">
              Social Media Marketing
            </option>
          </select>
          <input
            name="Email"
            type="email"
            required
            placeholder="Enter your Email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home_Form;
