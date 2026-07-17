"use client";
import React, { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";


const editblog = ({ data }) => {
  const { data: session } = useSession();
  const [blog_detail, setblog_detail] = useState([
    { subheading: "", description: "", bullets: [{ heading: "", desc: "" }] },
  ]);
  const [category, setcategory] = useState("");
  const [postedby, setpostedby] = useState("");
  const [title, settitle] = useState("");
  const [img, setimg] = useState("");
  const [slug, setslug] = useState("");
  const [id, setid] = useState("");
  const [imgalt, setimgalt] = useState("");


  useEffect(() => {
    settitle(data?.title);
    setpostedby(data?.postedby);
    setimg(data?.img);
    setslug(data?.slug);
    setblog_detail(data?.blog_detail);
    setid(data?._id);
    setimgalt(data?.imgalt)
    setcategory(data?.category);
  }, [data]);

  const submitfun = async () => {
    if (
      img !== "" &&
      postedby !== "" &&
      title !== "" &&
      slug !== "" &&
      id !== ""
    ) {
      try {
        if (session?.user?.role === "Admin") {
          const data = await fetch("/api/blogs/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blog_detail,
              title,
              postedby,
              img,
              slug,
              category,
              imgalt,
            }),
          });
          if (data.ok) {
            toast.success("Blog Uploaded");
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          } else {
            toast.error("Something went wrong");
          }
        } else if (session?.user?.role === "doctoradmin") {
          const data = await fetch("/api/doctorblogs/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blog_detail,
              title,
              postedby,
              img,
              slug,
              imgalt,
              category,
            }),
          });
          if (data.ok) {
            toast.success("Blog Uploaded");
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          } else {
            toast.error("Something went wrong");
          }
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
            bullets: [...items.bullets, { heading: "", description: "" }],
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
      { subheading: "", description: "", bullets: [{ heading: "", desc: "" }] },
    ]);
  };

  const mainsubhead = (index, val) => {
    let update = blog_detail.map((items, ind) =>
      ind === index ? { ...items, subheading: val } : items
    );
    setblog_detail(update);
  };

  // const mainsubdesc = (index, val) => {
  //   let update = blog_detail.map((items, ind) =>
  //     ind === index ? { ...items, description: val } : items
  //   );
  //   setblog_detail(update);
  // };
  const mainsubdesc = (index, val) => {
  setblog_detail((prev) => {
    const updated = [...prev];
    if (updated[index].description === val) return prev; // Avoid unnecessary updates
    updated[index].description = val;
    return updated;
  });
};

  return (
    <>
      <div className="container">
        <div className="dash_cont">
          {/* first */}
          <div className="add_blog_title">
            <h4>Edit Blog</h4>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" add_blog">
                <h4>Title :</h4>
                <input
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
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

                           {    session?.user?.role === "doctoradmin" &&   <ReactQuill theme="snow"  value={items?.description} onChange={(content) => mainsubdesc(index, content)}/>
||
 session?.user?.role === "Admin" && 
                    <textarea
                      value={items?.description}
                      onChange={(e) => mainsubdesc(index, e.target.value)}
                      placeholder="Description"
                    ></textarea>
                     }
                
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
                  value={postedby}
                  type="text"
                  name="text"
                  placeholder="Posted By "
                />
              </div>

              {/* <div className=" add_blog">
                <h4>Blog Category :</h4>
                <select
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="FH Group">FH Group</option>
                  <option value="Studio Pixel">Studio Pixel</option>
                </select>
              </div> */}

              {(session?.user?.role === "Admin" && (
                <div className=" add_blog">
                  <h4>Blog Category :</h4>
                  <select
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="FH Group">FH Group</option>
                    <option value="Studio Pixel">Studio Pixel</option>
                  </select>
                </div>
              )) ||
                (session?.user?.role === "doctoradmin" && (
                  <div className=" add_blog">
                    <h4>Blog Category :</h4>
                    <select
                      value={category}
                      onChange={(e) => setcategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="Activity">Activity</option>
                      <option value="Achievement">Achievement</option>
                      <option value="Article">Article</option>
                      <option value="Blog">Blog</option>
                      <option value="Donation">Donation</option>
                    </select>
                  </div>
                ))}
              <div className=" add_blog">
                <h4>URL SLUG:</h4>
                <input
                  onChange={(e) => setslug(e.target.value)}
                  type="text"
                  value={slug}
                  name="text"
                  placeholder="URL SLUG"
                />
              </div>
              <div className="add_blog">
                <h4>Image Alt Tags:</h4>
                <input
                  onChange={(e) => setimgalt(e.target.value)}
                  type="text"
                  value={imgalt}
                  name="imgalt"
                  placeholder="Image Alt Tags"
                />
              </div>
              <div className="add_blog_media">
                <CldUploadButton
                  onSuccess={(result) => {
                    setimg(result?.info?.url);
                  }}
                  uploadPreset="FH_WEB"
                />
              </div>
              <div className="add_blog_img">
                {img && (
                  <>
                    <span
                      onClick={() => {
                        setimg("");
                      }}
                    >
                      {" "}
                      &times;
                    </span>

                    <img src={img} alt="" />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="add_blog_submit">
            <button onClick={submitfun}>Update</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default editblog;
