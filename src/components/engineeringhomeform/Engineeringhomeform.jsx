'use client'
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const EngineeringHomeForm = () => {
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
        <form id="home-form" className="wrap_m center gap-3">
          <h1>Talk About Your Project</h1>
          <select name="Services" id="service" required>
            <option value="select" disabled selected>
              Select Service
            </option>
            <option value="Custom Engineering">Custom Engineering</option>
            <option value="Metal Engineering">Metal Engineering</option>
            <option value="Structual Engineering">Structual Engineering</option>
            <option value="Precision Engineering">Precision Engineering</option>
            <option value="On-site Installation">On-site Installation</option>
            <option value="Maintenance Repairs">Maintenance Repairs</option>
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

export default EngineeringHomeForm;
