'use client'
import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const dashheader = () => {

  const menushowhide = useRef(null);
  const {data:session} = useSession()
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

  // Handlers for adding/removing class
  const handleAddClick = () => {
    handleClassToggle(menushowhide, "add", "dash_menu_in");
  };

  const handleRemoveClick = () => {
    handleClassToggle(menushowhide, "remove", "dash_menu_in");
  };

  return (
    <>
      <div className="dash_main">
        <div className="head">
          <div className="center gap-3">
            <h5 className="disable_m w-100">Dashboard</h5>
            <FaBars className="hide_d" onClick={handleAddClick} size={22} />
          </div>
          <div ref={menushowhide} className="dash_links">
            <IoCloseSharp
              onClick={handleRemoveClick}
              size={25}
              className="hide_d"
            />
            <Link className="dash_mob_link_size" href="/">
              <p className="disable_m w-100">
                Home <IoArrowForward className="hide_d" />
              </p>
            </Link>
            {session?.user?.role === "Admin" && (
              <Link className="dash_mob_link_size" href="/dash//reviews">
                <p className="disable_m w-100">
                  Reviews <IoArrowForward className="hide_d" />
                </p>
              </Link>
            )}
            <Link className="dash_mob_link_size" href="/dash//blog">
              <p className="disable_m w-100">
                Blog <IoArrowForward className="hide_d" />
              </p>
            </Link>
            {session?.user?.role === "Admin" && (
              <Link className="dash_mob_link_size" href="/dash/client">
                <p className="disable_m w-100">
                  Clients <IoArrowForward className="hide_d" />
                </p>
              </Link>
            )}
            <Link className="dash_mob_link_size" href="/dash//addblog">
              <p className="disable_m w-100">
                Add Blog <IoArrowForward className="hide_d" />
              </p>
            </Link>
            {session?.user?.role === "Admin" && (
              <Link className="dash_mob_link_size" href="/dash//addclient">
                <p className="disable_m w-100">
                  Add Client <IoArrowForward className="hide_d" />
                </p>
              </Link>
            )}
            <button className="log_out_btn hide_d disable_p mt-3">
              Log out <IoIosLogOut />
            </button>
          </div>
          <div className="center gap-2">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png"
              alt="logo"
            />
            <button onClick={() => signOut()} className="log_out_btn">
              Log out <IoIosLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashheader;
