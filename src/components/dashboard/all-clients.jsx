"use client";
import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useSession } from "next-auth/react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Allclients = () => {
  const [value, setValue] = React.useState(5);
  const [data, setdata] = useState([]);
  const [client, setclient] = useState([]);
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
    setclient(onereview);
  };

  const deletefun = async (id) => {
    const deletereview = await fetch("/api/clients", {
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
    const updatestatus = await fetch("/api/clients", {
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
        const getdata = await fetch("/api/clients");
        const jsondata = await getdata.json();
        setdata(jsondata);
      } catch (error) {
        alert(error);
      }
    };
    myfun();
  }, []);





  if(session?.user?.role==='Admin')  return (
    <>
      <div
        className="dash_reviews_main dash_cont"
        style={{ overflowX: "auto" }}
      >
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
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Posted By</th>
              <th style={thStyle}>Date</th>
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
                    <img src={items?.mainimg} alt="" />
                    <p className="disable_m">{items?.title}</p>
                  </div>
                </td>
                <td data-label="Service" style={tdStyle}>
                  {items?.postedby}
                </td>
                <td data-label="Email" style={tdStyle}>
                  {items?.createdAt?.split("T")[0]}
                </td>

                <td data-label="Status" style={tdStyle}>
                  {items?.status}
                </td>
                <td
                  data-label="Action"
                  style={tdStyle}
                  className="icons-section "
                >
                  {(items?.status === "Disapproved" ||
                    items?.status === "Inactive") && (
                      <AiFillLike
                        color="588157"
                        onClick={() => updateStatus(items?._id, "Approved")}
                        size={21}
                      />
                    )}
                  {(items?.status === "Approved" ||
                    items?.status === "Inactive") && (
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
                    className="mx-2"
                    size={23}
                  />
                  <a href={"/dash/editclient/" + items?.slug}>
                    <MdModeEdit size={23} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPopupVisible && (
        <div className="view_blog_popup">
          <div className="view_blog_cont ">
            <div className="center space_end pointer" onClick={togglePopup}>
              <IoCloseSharp size={25} />
            </div>
            <h5>Client Details</h5>
            <div className="center direction_col gap-1">
              <img src={client?.pageimg} alt="" />
              <h3 className="mt-3">{client?.title}</h3>
              {client?.blog_detail?.map((items) => (
                <>
                  <h5>{items?.subheading}</h5>
                  <p>{items?.description}</p>
                  {items?.bullets?.map((items) => (
                    <ui>
                      <h5>{items?.heading}</h5>
                      <h6>{items?.subheading}</h6>

                      <li>{items?.desc}</li>
                    </ui>
                  ))}
                </>
              ))}
            </div>
      
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

export default Allclients;
