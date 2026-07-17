import React from "react";

const BlogsBanner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="Blog_Page_Banner_Main">
          <div>
            <div>
              <img
                src="http://res.cloudinary.com/dgtk4rthy/image/upload/v1738316686/de7fxqgmxavvwkuhe0zd.jpg"
                alt="blogs-page-main-banner"
              />
            </div>
            <div>
              <h4 className="stop_m">Testing Blog</h4>
              <p className="stop_p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus alias ratione ullam eos rerum officia fugiat
                rem velit et. Molestias dignissimos pariatur voluptatibus odio
                excepturi neque quo ad delectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsBanner;
