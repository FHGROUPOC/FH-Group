import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import director_data from "@/data/director_data";
import team_data from "@/data/team_data";

function Team_New() {
  return (
    <section className="team section-padding pt-2 pb-2">
      <div className="row center wrap p-1">
        {director_data.slice(0, 1).map((item, i) => (
          <div key={i} className="center wrap">
            <div className="item md-mb50">
              <div className="img">
                <img src={item.img} alt="" />
                <div className="info">
                  <h6 className="color_white disable_m">{item.name}</h6>
                  <span className="color_white">{item.desi}</span>
                </div>
              </div>
              <a href="https://www.linkedin.com/company/fhgroupoc">
                <div className="social">
                  <div className="links">
                    <FaLinkedin size={25} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="center wrap gap-3 mt-5">
        {director_data.slice(1, 6).map((item, i) => (
          <div key={i} className="center wrap">
            <div className="item md-mb50" style={{ width: "90%" }}>
              <div className="img">
                <img src={item.img} alt="" />
                <div className="info">
                  <h6 className="color_white disable_m">{item.name}</h6>
                  <span className="color_white">{item.desi}</span>
                </div>
              </div>
              <a href="https://www.linkedin.com/company/fhgroupoc">
                <div className="social">
                  <div className="links">
                    <FaLinkedin size={25} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="container pt-5 mt-5 pb-5 all_center_d">
        <h4>We Bring Life to your Ideas And Dreams.</h4>
        <p>
          At FH Group, we believe in the power of teamwork. Our dedicated and
          talented team is at the heart of our success. With a passion for
          innovation and customer satisfaction, we strive to exceed expectations
          in all that we do.
        </p>
      </div>
      <div className="all_mem_cont">
        <div className="center wrap mt-5 ">
          {team_data.map((item, i) => (
            <div key={i} className="center wrap p-1">
              <div className="item md-mb50 disable_p">
                <div className="img ">
                  <img src={item.img} alt="" />
                  <div className="info">
                    <h6 className="color_white disable_m">{item.name}</h6>
                    <span className="color_white">{item.desi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team_New;
