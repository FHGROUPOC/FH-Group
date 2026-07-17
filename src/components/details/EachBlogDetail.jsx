"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { red } from "@mui/material/colors";
import BlogHomeOne from "../blog/BlogHomeOne";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { IoMdArrowUp } from "react-icons/io";

const EachBlogDetail = ({ blog }) => {
  const { data: session, status } = useSession();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [img, setimg] = useState("");
  const [replybol, setreplybol] = useState(null);
  const [replymessage, setreplymessage] = useState("");
  const [pathname, setpathname] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      setpathname(decodeURIComponent(window.location.pathname));
    }
  }, []);

  useEffect(() => {
    if (session) {
      setname(session?.user?.name);
      setemail(session?.user?.email);
      setimg(session?.user?.image);
    }
  }, [session]);

  const submitcomment = async (event) => {
    event.preventDefault();
    if (name !== "" && email !== "" && message !== "" && img !== "") {
      try {
        const data = await fetch("/api/blogs/" + blog?._id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, img, message }),
        });
        if (data.ok) {
          toast.success("Thanks for Comment");

          setTimeout(() => {
            window.location.reload();
          }, 800);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("All Fields are Required");
    }
  };

  const replygetid = (id) => {
    if (session) {
      setreplybol(id);
    } else {
      window.location.replace("/login?redirect=" + pathname + "#commentbox");
    }
  };

  const replysubmit = async (id, emailforcomment) => {
    if (name !== "" && email !== "" && replymessage !== "") {
      try {
        const data = await fetch("/api/blogs/" + blog?._id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            img,
            message: replymessage,
            commentid: id,
          }),
        });

        if (data.ok) {
          sendcommentmail(name, img, replymessage, blog?.slug, emailforcomment);
          toast.success("Thanks for Comment");
          setTimeout(() => {
            window.location.reload();
          }, 800);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("something went wrong");
      }
    } else {
      toast.error("All fields are Required");
    }
  };

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

  const sendcommentmail = async (
    name,
    img,
    message,
    blogslug,
    emailforcomment
  ) => {
    const data = await fetch("/api/commentmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, img, message, blogslug, emailforcomment }),
    });
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_word_writting">
              {blog.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="cs_height_65 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="cs_text_style_1">
                      <p className="cs_headed_text">Posted By</p>
                      <h6 className="cs_title_text">{blog?.postedby}</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cs_text_style_1">
                      <p className="cs_headed_text">Date</p>
                      <h6 className="cs_title_text">
                        {blog?.createdAt?.split("T")[0]}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_65 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image
                width={1230}
                height={600}
                src={blog?.img}
                alt="blog_detals_banner"
              />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            {blog?.blog_detail?.map((item) => (
              <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
                <h4 className="cs_heading_text anim_heading_title">
                  {item?.subheading}
                </h4>
                <p className="cs_text_style_body">{item?.description}</p>
                <div className="cs_ul_ml anim_div_ShowDowns">
                  <ul>
                    {item?.bullets?.map(
                      (ite, i) =>
                        ite?.heading !== "" && (
                          <li key={ite._id}>
                            <h6 className="mt-5">{ite.heading}</h6>
                            {ite.desc}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            ))}
            {/* <div className="cs_ul_ml anim_div_ShowDowns">
              <ul>
                {blog_details_content?.features?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_50"></div>
      <div className="container">
        <div className="row">
          <div className="cs_share_post anim_div_ShowDowns">
            <h6 className="m-0">SHARE POST</h6>
            <div>
              <div className="cs_share_btn_g">
                <div className="col cs_share_btn cs_center">
                  <a
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?url=${process.env.NEXTAUTH_URL}blog/${blog?.slug}`}
                  >
                    Twitter
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXTAUTH_URL}blog/${blog?.slug}`}
                  >
                    Facebook
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXTAUTH_URL}blog/${blog?.slug}`}
                  >
                    Linkedin
                  </a>
                </div>
                {/* <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://dribbble.com/">
                    Dribbble
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.instagram.com/">
                    Instagram
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_35"></div>
        <div className="cs_hr_design anim_div_ShowDowns"></div>
      </div>
      <div className="cs_height_100 cs_height_lg_50"></div>

      {/*  ===================  Post Comment  ===================  */}

      <section id="commenttss">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="anim_div_ShowDowns">
                <div className="cs_height_70 cs_height_lg_60"></div>
                <h5 className="cs_m0">Post Your Comment</h5>
                <div className="cs_height_70 cs_height_lg_60"></div>
                <form onClick={(e) => e.preventDefault()}>
                  {session && (
                    <>
                      <div className="row">
                        <div className="cs_field_group col">
                          <input
                            className="cs_input_field"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={session?.user?.name}
                            disabled
                            id="name"
                          />
                          <label htmlFor="name" className="cs_input_label">
                            Name
                          </label>
                        </div>
                        <div className="cs_field_group col">
                          <input
                            className="cs_input_field"
                            type="text"
                            placeholder="Email"
                            name="email"
                            disabled
                            value={session?.user?.email}
                            id="email"
                          />
                          <label htmlFor="email" className="cs_input_label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="cs_height_50 cs_height_lg_50"></div>
                      <div className="cs_field_group">
                        <input
                          className="cs_input_field"
                          type="text"
                          onChange={(e) => {
                            setmessage(e.target.value);
                          }}
                          placeholder="Your Comment"
                          name="comment"
                          id="comment"
                        />
                        <label
                          htmlFor="comment"
                          required
                          className="cs_input_label"
                        >
                          Your Comment
                        </label>
                      </div>
                    </>
                  )}
                  <div className="cs_height_50 cs_height_lg_50"></div>

                  {session && (
                    <button
                      onClick={submitcomment}
                      type="submit"
                      className="cs_btn cs_style_1 cs_type_btn"
                    >
                      <span>Post Comment</span>
                      <svg
                        width="19"
                        height="13"
                        viewBox="0 0 19 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  )}
                  {status === "unauthenticated" && (
                    <button
                      onClick={() => {
                        window.location.replace(
                          `/login?redirect=${pathname}#commenttss`
                        );
                      }}
                      className="cs_btn cs_style_1 cs_type_btn"
                    >
                      <span>Login To Post Comment</span>
                      <svg
                        width="19"
                        height="13"
                        viewBox="0 0 19 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ===================  Post Comment  ===================  */}

      <div className="cs_height_120 cs_height_lg_60"></div>

      {/* ===================  Comment Section  ===================  */}

      {blog?.comments?.length !== 0 && (
        <div id="commentbox" className="container">
          <div className="comments_sections_main">
            <div className="comments_section_header">
              <h5>Comments</h5>
            </div>
            {blog?.comments?.map((items, index) => (
              // items?.status==='Approved'&&
              <div className="comments_enter_sections">
                <div className="comments_sections">
                  <div className="single_comment">
                    <div>
                      <img
                        className="add_comments_avatar"
                        src={items?.img}
                        alt={
                          items?.name
                            ? `${items?.name}'s avatar`
                            : "Commenter avatar"
                        }
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
                      <div className="center gap-2">
                        {/* <div className="like-btn-comment">
                   <Checkbox
                     sx={{
                       "& .MuiSvgIcon-root": { fontSize: 20 },
                       color: red[800],
                       "&.Mui-checked": { color: red[600] },
                     }}
                     className="disable_p"
                     // {...label}
                     icon={<FavoriteBorder />}
                     checkedIcon={<Favorite />}
                   />
                   <h6 className="disable_m">2</h6>
                 </div> */}
                        <div>
                          <button
                            onClick={() => {
                              replygetid(items?._id);
                            }}
                            className="reply_btn_comment"
                          >
                            Reply
                          </button>
                        </div>
                        {session?.user?.name === items?.name && (
                          <div onClick={() => maincommentdelete(items?._id)}>
                            <p className="disable_m pointer">
                              <MdDelete size={20} color="e63946" />
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {items?.replies?.map((replyItems) => (
                    //  replyItems?.status==='Approved'&&
                    <>
                      {" "}
                      <div className="w-85 center">
                        <IoIosArrowRoundUp size={28} className="mb-1" />
                      </div>
                      <div className="reply_message_comment">
                        <div className="single_comment reply_message w-85">
                          <div>
                            <img
                              className="add_comments_avatar"
                              src={replyItems?.img}
                              alt=""
                            />
                          </div>
                          <div className="center direction_col al-start gap-2 ">
                            <div className="center gap-2 wrap reply_comment_sec">
                              <h6 className="disable_m">{replyItems?.name}</h6>
                              <p className="disable_m">
                                {replyItems?.postedAt?.split("T")[0]}
                              </p>
                              <p className="disable_m">
                                <IoIosArrowRoundBack size={20} /> replied to{" "}
                                {items?.name}
                              </p>
                            </div>
                            <div>
                              <p className="disable_m ">
                                {replyItems?.message}
                              </p>
                            </div>
                            <div className="center gap-2">
                              {/* <div className="like-btn-comment">
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                      color: red[800],
                      "&.Mui-checked": { color: red[600] },
                    }}
                    className="disable_p"
                    // {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                  <h6 className="disable_m">2</h6>
                </div> */}
                              <div>
                                {/* <button className="reply_btn_comment">
                                  Reply
                                </button> */}
                              </div>
                              {session?.user?.name === replyItems?.name && (
                                <div
                                  onClick={() =>
                                    replydeltefun(items?._id, replyItems?._id)
                                  }
                                >
                                  <p className="disable_m pointer">
                                    <MdDelete size={20} color="e63946" />
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                  {session && items?._id === replybol && (
                    <div className="add_reply_comments_area_main mt-3">
                      <div className="add_reply_comments_area width-98">
                        <img className="add_comments_avatar" src={img} alt="" />
                        <input
                          onChange={(e) => setreplymessage(e.target.value)}
                          type="text"
                          name="message"
                          placeholder={"reply to " + items?.name}
                        />
                        <button
                          onClick={() => replysubmit(items?._id, items?.email)}
                        >
                          <IoMdArrowUp />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/*  ===================  Comment Section  ===================  */}

      <div className="cs_height_150 cs_height_lg_60"></div>

      <BlogHomeOne style_3={true} />
    </>
  );
};

export default EachBlogDetail;
