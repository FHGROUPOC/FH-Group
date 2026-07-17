import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsArrowDownCircle } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Promotions = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const promotionsData = [
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1749132641/01_lsxrqc.png",
      titleBold: "Big News from",
      titleNormal: "FH Group!",
      description:
        "Unlock 13% OFF on ALL our services - Yes, you read that right! From creative design to full-scale digital campaigns, animations, branding, and development — get the excellence of FH Group at a discounted price!",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1749132641/02_bfbmro.png",
      titleBold: "Loyal Clients Deserve",
      titleNormal: "Loyalty Back!",
      description:
        "10% OFF - One-Time Offer A special gesture for those who believe in us — let's build something bigger, together.",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1749132641/03_gpl1bw.png",
      titleBold: "Welcome Back,",
      titleNormal: "Loyal Clients!",
      description:
        "Your next project with FH Group just got 10% more rewarding. One-time offer 10% OFF All services included Let's build big, again.",
    },
  ];

  return (
    <>
      <div className="promotions-main">
        <div className="banner-section">
          <div className="page-name">
            <h6>FH Promotions</h6>
          </div>
          <img
            className="mt-5"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1749133398/Main_nyyybl.png"
            alt=""
          />
          <h2>BOOST BUSINESS</h2>
          <h6>
            Your journey with us deserves continuous value – and this is our way
            of saying thank you once again.
          </h6>
          <div className="d-flex align-items-center gap-1">
            <a href="/contact">Contact Us</a>
            {/* <BsArrowDownCircle color="0066cc" size={20} /> */}
          </div>
        </div>
        <div className="slider-section">
          <h4 className="fw-semibold w-100 text-center">
            Loyalty Rewarded. Creativity Returned.
          </h4>
          <div className="position-relative">
            <div ref={emblaRef}>
              <div className="d-flex max-w-slider ">
                {promotionsData.map((promo, index) => (
                  <div className="flex-shrink-0 px-2" key={index}>
                    <div className="single-promotion">
                      <img
                        src={promo.img}
                        alt={`${promo.titleNormal} promotion`}
                      />
                      <div className="content-section">
                        <div>
                          <h6 className="fw-semibold">{promo.titleBold}</h6>
                          <h6 className="fw-normal">{promo.titleNormal}</h6>
                        </div>
                        <h6>
                          <span>{promo.description}</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
