"use client";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const allreviews = ({ mytrue }) => {
  const [value, setValue] = React.useState(5);
  const [data, setdata] = useState([]);
  const [review, setreview] = useState([]);
  const {data:session} = useSession()
  // State to manage popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const viewfun = (id) => {
    togglePopup();
    const onereview = data.find((item) => item._id === id);
    setreview(onereview);
  };

  const deletefun = async (id) => {
    const deletereview = await fetch("/api/reviews", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    if (deletereview.ok) {
      toast.error("Deleted Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("something went wrong");
    }
  };

  const updateStatus = async (id, status) => {
    const updatestatus = await fetch("/api/reviews", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    if (updatestatus.ok) {
      toast.success("Updated Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    const myfun = async () => {
      try {
        const getdata = await fetch("/api/reviews");
        const jsondata = await getdata.json();
        setdata(jsondata);
      } catch (error) {
        alert(error);
      }
    };
    myfun();
  }, []);

if(session?.user?.role==='Admin')   return (
  <>
    <div className="dash_reviews_main dash_cont" style={{ overflowX: "auto" }}>
      <table
        align="center"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
        className="dash_cont reviews_dash"
      >
        <thead>
          <tr>
            <th style={thStyle}>Profile</th>
            <th style={thStyle}>Service</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Rating</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items) => (
            <tr>
              <td
                data-label="Profile"
                className="profile b-top-none"
                style={tdStyle}
              >
                <div className="center gap-2">
                  <img src={items?.image} alt="" />
                  <p className="disable_m">{items?.name}</p>
                </div>
              </td>
              <td data-label="Service" style={tdStyle}>
                {items?.service}
              </td>
              <td data-label="Email" style={tdStyle}>
                {items?.email}
              </td>
              {mytrue && (
                <td data-label="Rating" style={tdStyle} className="z-1">
                  <Rating
                    className="z-1"
                    disablePortal
                    name="read-only"
                    value={items?.rating}
                    readOnly
                  />
                </td>
              )}
              <td data-label="Status" style={tdStyle}>
                {items?.status}
              </td>
              <td
                data-label="Action"
                style={tdStyle}
                className="icons-section "
              >
                {(items?.status === "Disapproved" ||
                  items?.status === "pending") && (
                  <AiFillLike
                    color="588157"
                    onClick={() => updateStatus(items?._id, "Approved")}
                    size={21}
                  />
                )}
                {(items?.status === "Approved" ||
                  items?.status === "pending") && (
                  <AiFillDislike
                    color="ad2831"
                    onClick={() => updateStatus(items?._id, "Disapproved")}
                    className="mx-2"
                    size={21}
                  />
                )}
                <MdDeleteForever
                  onClick={() => deletefun(items._id)}
                  color="370617"
                  size={23}
                />
                <FaEye
                  onClick={() => viewfun(items._id)}
                  color="219ebc"
                  className="ms-2"
                  size={23}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {isPopupVisible && (
      <div className="view_reviews_popup ">
        <div className="view_reviews_cont">
          <div className="center space_end pointer" onClick={togglePopup}>
            <IoCloseSharp size={25} />
          </div>
          <h5>Reviews Details</h5>
          <div className="center direction_col gap-1">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png"
              alt="logo"
            />
            <p className="disable_m">{review?.name} </p>
            <Rating name="read-only" value={review?.rating} readOnly />
          </div>
          <p className="disable_m review">{review?.message} </p>
        </div>
      </div>
    )}
    <ToastContainer />
  </>
);
};
const thStyle = {
  border: "1px solid #ddd",
  backgroundColor: "#f4f4f4",
};

const tdStyle = {
  border: "1px solid #ddd",
};

export default allreviews;
