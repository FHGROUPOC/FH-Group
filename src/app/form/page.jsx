import Wrapper from "@/layouts/Wrapper";
import React from "react";

const Form = () => {
  return (
    // <Wrapper>
    <>
      <div className="form_main_cont">
        <div className="form_cont">
          <img src="https://www.fhgroupoc.com/svg/fhlogog.svg" alt="logo" />
          <div className="form_input">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="company" placeholder="Company" />
            <input type="text" name="country" placeholder="Country" />
            <input type="text" name="phone" placeholder="Phone" />
            <select name="" id="">
              <option value="" disabled selected>
                Services
              </option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <textarea name="" id="" rows={5} placeholder="Message"></textarea>
          </div>
        </div>
      </div>
    </>
    // </Wrapper>
  );
};

export default Form;
