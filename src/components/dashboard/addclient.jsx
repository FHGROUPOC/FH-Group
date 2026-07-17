"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const Addclient = () => {
  const [blog_detail, setblog_detail] = useState([
    {
      subheading: "",
      description: "",
      bullets: [{ heading: "", subheading: "", desc: "" }],
    },
  ]);
  const [postedby, setpostedby] = useState("");
  const [title, settitle] = useState("");
  const [mainimg, setmainimg] = useState("");
  const [pageimg, setpageimg] = useState("");
  const {data:session} = useSession()

  const [slug, setslug] = useState("");
  const [weblink, setweblink] = useState("");

  const submitfun = async () => {
    if (
      mainimg !== "" &&
      pageimg !== "" &&
      postedby !== "" &&
      title !== "" &&
      slug !== ""
    ) {
      try {
        const data = await fetch("/api/clients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blog_detail,
            title,
            weblink,
            postedby,
            mainimg,
            pageimg,
            slug,
          }),
        });
        if (data.ok) {
          toast.success("Blog Uploaded");
          window.location.reload();
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("All Fields Are Required");
    }
  };

  // const [bullets, setbullets] = useState([{ heading: '', desc: '' }]);

  const addbullets = (mainindex) => {
    let newdata = blog_detail.map((items, ind) =>
      ind === mainindex
        ? {
            ...items,
            bullets: [
              ...items.bullets,
              { heading: "", description: "", subheading: "" },
            ],
          }
        : items
    );
    setblog_detail(newdata);
    // setdata((prev) => [...prev, { bullets: { heading: '', description: '' } }])
  };

  const bulletheadfun = (mainindex, index, val) => {
    let upatedbullets = blog_detail.map((items, i) =>
      i === mainindex
        ? {
            ...items,
            bullets: [
              ...items?.bullets?.map((it, indexx) =>
                indexx === index ? { ...it, heading: val } : it
              ),
            ],
          }
        : items
    );
    setblog_detail(upatedbullets);
  };
  const bulletsubheadfun = (mainindex, index, val) => {
    let upatedbullets = blog_detail.map((items, i) =>
      i === mainindex
        ? {
            ...items,
            bullets: [
              ...items?.bullets?.map((it, indexx) =>
                indexx === index ? { ...it, subheading: val } : it
              ),
            ],
          }
        : items
    );
    setblog_detail(upatedbullets);
  };

  const bulletdescfun = (mainindex, index, val) => {
    let upatedbullets = blog_detail.map((items, i) =>
      i === mainindex
        ? {
            ...items,
            bullets: [
              ...items?.bullets?.map((it, indexx) =>
                indexx === index ? { ...it, desc: val } : it
              ),
            ],
          }
        : items
    );
    setblog_detail(upatedbullets);
  };

  const newsecfun = () => {
    setblog_detail([
      ...blog_detail,
      {
        subheading: "",
        description: "",
        bullets: [{ heading: "", desc: "", subheading: "" }],
      },
    ]);
  };

  const mainsubhead = (index, val) => {
    let update = blog_detail.map((items, ind) =>
      ind === index ? { ...items, subheading: val } : items
    );
    setblog_detail(update);
  };

  const mainsubdesc = (index, val) => {
    let update = blog_detail.map((items, ind) =>
      ind === index ? { ...items, description: val } : items
    );
    setblog_detail(update);
  };

  if(session?.user?.role==='Admin') return (
    <>
      <div className="container">
        <div className="dash_cont">
          {/* first */}
          <div className="add_blog_title">
            <h4>Add Client</h4>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" add_blog">
                <h4>Title :</h4>
                <input
                  onChange={(e) => settitle(e.target.value)}
                  type="text"
                  name="text"
                  placeholder="Title "
                />
              </div>
              {blog_detail?.map((items, index) => (
                <>
                  <div className=" add_blog">
                    <h4>Sub-Heading :</h4>
                    <input
                      type="text"
                      value={items?.subheading}
                      onChange={(e) => mainsubhead(index, e.target.value)}
                      name="text"
                      placeholder="Sub Heading "
                    />
                  </div>
                  <div className="add_blog_text">
                    <h4>Description :</h4>
                    <textarea
                      value={items?.description}
                      onChange={(e) => mainsubdesc(index, e.target.value)}
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="add-blog add_blog_text ">
                    <h4>Bullet :</h4>
                    {items.bullets?.map((item, ind) => (
                      <>
                        <input
                          type="text"
                          name="text"
                          value={item?.heading}
                          onChange={(e) =>
                            bulletheadfun(index, ind, e.target.value)
                          }
                          placeholder="Bullet Heading "
                        />
                        <input
                          type="text"
                          name="text"
                          value={item?.subheading}
                          onChange={(e) =>
                            bulletsubheadfun(index, ind, e.target.value)
                          }
                          placeholder="Bullet Sub-Heading "
                        />
                        <textarea
                          className="mb-1"
                          value={item?.desc}
                          onChange={(e) =>
                            bulletdescfun(index, ind, e.target.value)
                          }
                          placeholder="Bullet Description"
                        ></textarea>
                      </>
                    ))}
                    <div className="text_btn">
                      <button onClick={() => addbullets(index)}>+</button>
                    </div>
                  </div>
                </>
              ))}

              <div className="add_blog_btn">
                <button onClick={newsecfun}>Add More</button>
              </div>
            </div>
            {/* second */}
            <div className="col-lg-6">
              <div className=" add_blog">
                <h4>Posted By :</h4>
                <input
                  onChange={(e) => setpostedby(e.target.value)}
                  type="text"
                  name="text"
                  placeholder="Posted By "
                />
              </div>
              <div className=" add_blog">
                <h4>Url Slug:</h4>
                <input
                  onChange={(e) => setslug(e.target.value)}
                  type="text"
                  name="text"
                  placeholder="Url Slug"
                />
              </div>
              <div className=" add_blog">
                <h4>Website Link:</h4>
                <input
                  onChange={(e) => setweblink(e.target.value)}
                  type="text"
                  name="text"
                  placeholder="Website Link"
                />
              </div>
              <div className="add_blog_media">
                <p>Uplaod Home Page Img (200x170)</p>
                <CldUploadButton
                  onSuccess={(result) => {
                    setmainimg(result?.info?.url);
                  }}
                  uploadPreset="FH_CLIENTS"
                />
              </div>
              <div className="add_blog_img">
                {mainimg && (
                  <>
                    <span
                      onClick={() => {
                        setmainimg("");
                      }}
                    >
                      {" "}
                      &times;
                    </span>

                    <img src={mainimg} alt="" />
                  </>
                )}
              </div>
              <div className="add_blog_media mt-5">
                <p>Uplaod Inner Page Img (1920x1080)</p>
                <CldUploadButton
                  onSuccess={(result) => {
                    setpageimg(result?.info?.url);
                  }}
                  uploadPreset="FH_CLIENTS"
                />
              </div>
              <div className="add_blog_img">
                {pageimg && (
                  <>
                    <span
                      onClick={() => {
                        setpageimg("");
                      }}
                    >
                      {" "}
                      &times;
                    </span>

                    <img src={pageimg} alt="" />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="add_blog_submit">
            <button onClick={submitfun}>Submit</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Addclient;
