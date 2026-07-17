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

const allblog = () => {
  const [value, setValue] = React.useState(5);
  const [data, setdata] = useState([]);
  const [blog, setblog] = useState([]);

  const { data: session } = useSession();
  // State to manage popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const viewfun = (id) => {
    togglePopup();
    const onereview = data.find((item) => item._id === id);
    setblog(onereview);
  };

  const deletefun = async (id) => {
    if (session?.user?.role === "Admin") {
      const deletereview = await fetch("/api/blogs", {
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
    } else if (session?.user?.role === "doctoradmin") {
      const deletereview = await fetch("/api/doctorblogs", {
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
    }
  };

  const updateStatus = async (id, status) => {
    if (session?.user?.role === "Admin") {
      const updatestatus = await fetch("/api/blogs", {
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
    } else if (session?.user?.role === "doctoradmin") {
      const updatestatus = await fetch("/api/doctorblogs", {
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
    }
  };

  useEffect(() => {
    const myfun = async () => {
      try {
        if (session?.user?.role === "Admin") {
          const getdata = await fetch("/api/blogs");
          const jsondata = await getdata.json();
          setdata(jsondata);
        } else if (session?.user?.role === "doctoradmin") {
          const getdata = await fetch("/api/doctorblogs");
          const jsondata = await getdata.json();
          setdata(jsondata);
        }
      } catch (error) {
        alert(error);
      }
    };
    myfun();
  }, [session]);

  const maincommentdelete = async (commentid) => {
    try {
      const data = await fetch("/api/blogs/" + blog?._id, {
        method: "DELETE",
        body: JSON.stringify({ commentid }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 1200);
        toast.success("Comment Deleted");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const changemainstatus = async (commentid, status) => {
    try {
      const data = await fetch("/api/comments/" + blog?._id, {
        method: "PUT",
        body: JSON.stringify({ commentid, status }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 1200);
        toast.success("Comment Status Changed");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const changereplystatus = async (commentid, replyid, status) => {
    try {
      const data = await fetch("/api/comments/" + blog?._id, {
        method: "PATCH",
        body: JSON.stringify({ commentid, replyid, status }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 1200);
        toast.success("Comment Reply Status Changed");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const replydeltefun = async (commentidforreply, replyid) => {
    try {
      const data = await fetch("/api/blogs/" + blog?._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentidforreply, replyid }),
      });
      if (data.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 1300);
        toast.success("Success");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
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
                    <img
                      src={items?.image}
                      alt={items?.title ? items?.title : "Blog profile image"}
                    />
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
                  <a href={"/dash/editblog/" + items?.slug}>
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
            <h5>Blog Details</h5>
            <div className="center direction_col gap-1">
              <img src={blog?.img} alt="" />
              <h3 className="mt-3">{blog?.title}</h3>
              {blog?.blog_detail?.map((items) => (
                <>
                  <h5>{items?.subheading}</h5>
                  <p>{items?.description}</p>
                  {items?.bullets?.map((items) => (
                    <ui>
                      <h6>{items?.heading}</h6>
                      <li>{items?.desc}</li>
                    </ui>
                  ))}
                </>
              ))}
            </div>
            {blog?.comments?.length !== 0 && (
              <div className="comments_sections_main">
                <div className="comments_section_header">
                  <h5>Comments</h5>
                </div>
                <div className="comments_enter_sections">
                  {/* <div className="add_comments_area">
              <img
                className="add_comments_avatar"
                src="https://i.pinimg.com/280x280_RS/bf/f9/10/bff9105c7c733b91f00d5df3f6c965a4.jpg"
                alt=""base wher
              />
              <input type="text" placeholder="Start a discussion" />
            </div> */}

                  {blog?.comments?.map((items, index) => (
                    <div className="comments_sections">
                      <div className="single_comment">
                        <div>
                          <img
                            className="add_comments_avatar"
                            src={items?.img}
                            alt=""
                          />
                        </div>
                        <div className="center direction_col al-start gap-2">
                          <div className="center gap-2">
                            <h6 className="disable_m">{items?.name}</h6>
                            <p className="disable_m">
                              {items?.postedAt?.split("T")[0]}
                            </p>
                          </div>
                          <div>
                            <p className="disable_m pb-2">{items?.message}</p>
                          </div>
                          <div className="center justify-content-between w-100 flex-wrap">
                            <div className="center gap-2">
                              <div>
                                <button
                                  onClick={() =>
                                    changemainstatus(items?._id, "Approved")
                                  }
                                  className="reply_btn_comment"
                                >
                                  Approve
                                </button>
                              </div>
                              <div>
                                <button
                                  onClick={() =>
                                    changemainstatus(items?._id, "Disapproved")
                                  }
                                  className="reply_btn_comment"
                                >
                                  Disapprove
                                </button>
                              </div>
                              <div
                                onClick={() => maincommentdelete(items?._id)}
                              >
                                <p className="disable_m pointer">
                                  <MdDelete size={20} color="e63946" />
                                </p>
                              </div>
                            </div>
                            <div className="center reply_text">
                              <h6 className="disable_m fw-normal1">Status :</h6>
                              <p className="reply_btn_comment disable_m">
                                {items?.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {items?.replies?.map((reply, indexx) => (
                        <>
                          <div className="w-85 center">
                            <IoIosArrowRoundUp size={28} className="mb-1" />
                          </div>
                          <div className="reply_message_comment">
                            <div className="single_comment reply_message w-85">
                              <div>
                                <img
                                  className="add_comments_avatar"
                                  src={reply?.img}
                                  alt=""
                                />
                              </div>
                              <div className="center direction_col al-start gap-2 ">
                                <div className="center gap-2 wrap reply_comment_sec">
                                  <h6 className="disable_m">{reply?.name}</h6>
                                  <p className="disable_m">
                                    {reply?.postedAt?.split("T")[0]}
                                  </p>
                                  <p className="disable_m">
                                    <IoIosArrowRoundBack size={20} /> reply to{" "}
                                    {items?.name}
                                  </p>
                                </div>
                                <div>
                                  <p className="disable_m ">{reply?.message}</p>
                                </div>
                                <div className="center justify-content-between w-100 flex-wrap">
                                  <div className="center gap-2">
                                    <div>
                                      <button
                                        onClick={() =>
                                          changereplystatus(
                                            items?._id,
                                            reply?._id,
                                            "Approved"
                                          )
                                        }
                                        className="reply_btn_comment"
                                      >
                                        Approve
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        onClick={() =>
                                          changereplystatus(
                                            items?._id,
                                            reply?._id,
                                            "Disapproved"
                                          )
                                        }
                                        className="reply_btn_comment"
                                      >
                                        Disapprove
                                      </button>
                                    </div>
                                    <div
                                      onClick={() =>
                                        replydeltefun(items?._id, reply?._id)
                                      }
                                    >
                                      <p className="disable_m pointer">
                                        <MdDelete size={20} color="e63946" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="center reply_text">
                                    <h6 className="disable_m fw-normal1">
                                      Status :
                                    </h6>
                                    <p className="reply_btn_comment disable_m">
                                      {reply?.status}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
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

export default allblog;
