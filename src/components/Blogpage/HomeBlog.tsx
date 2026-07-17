// app/components/HomeBlogSlider.tsx
"use client";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Blog type
import { Blog } from "@/utils/Blog"; // adjust path if needed

type Props = {
  blogs: Blog[];
};

const HomeBlog = ({ blogs }: Props) => {
  return (
    <div className="home-blogs-main">
      <div className="cs_height_50 cs_height_lg_20 "></div>
      <div className="h6">NEWS & BLOGS</div>
      <h2>FH Group Articles</h2>
      <Swiper
        className="all-blogs"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]} // Add Autoplay module
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="single-blog">
              <img src={blog.img} alt={blog.title} />
              <div className="content">
                <div className="date-author">
                  <div className="d-flex gap-1">
                    <IoPersonCircleOutline />
                    <div className="h6">{blog.postedby}</div>
                  </div>
                </div>
                <Link href={"/blog/" + blog.slug}>
                  <div className="h5">{blog.title.substring(0, 60)}..</div>
                </Link>
                <p>{blog.blog_detail[0]?.description?.substring(0, 135)} </p>
                {/* <Link
                  href={"/blog/" + blog.slug}
                  className="cs_blog cs_style_1"
                >
                  - Read more
                </Link> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBlog;
