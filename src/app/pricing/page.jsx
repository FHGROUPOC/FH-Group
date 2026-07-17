"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const pricingPlans = [
  {
    id: "01",
    image:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735310776/FHGROUPOC/PRESENTATION/ICONS/a8gyiamxexvkq9kxvvbi.png",

    type: "Design Subscription",
    name: "STARTER",
    tagline: "Small businesses / local brands / new pages",
    price: "55,000",
    features: [
      "8 Posts 4 Static | 4 Reels",
      "Caption writing with hashtags",
      "1 Ad (Brand Awareness / Engagement)",
      "Audience targeting & setup",
      "Weekly performance check",
    ],
  },

  {
    id: "02",
    image:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735311174/FHGROUPOC/PRESENTATION/ICONS/rro2ylik9ubdkbart2po.png",
    type: "Retainer",
    name: "ELITEPRO",
    tagline: " Brands, institutes, e-commerce & real estate",
    price: "165,000",
    features: [
      "20 Posts 10 Static | 10 Reels",
      "Premium copywriting & CTA strategy",
      "Full page management (DMs, comments, leads)",
      "Brand consistency & visual strategy",
      "Monthly performance report",
      "3–4 Ad (Awareness, Traffic, Leads, Sales)",
      "Funnel-based strategy",
      "Advanced retargeting & lookalike audiences",
    ],
  },

  {
    id: "03",
    image:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735310776/FHGROUPOC/PRESENTATION/ICONS/dxwataiuu18crpsezxvg.png",
    type: "MVP",
    name: "BOOSTER",
    tagline: "Growing businesses / lead generation",
    price: "55,000",
    features: [
      "12 Posts 8 Static | 6 Reels",
      "Professional copywriting",
      "Hashtag & trend research",
      "2 Ad (Engagement + Leads / Messages)",
      "Custom audience + retargeting + A/B testing",
    ],
  },
];

export default function Pricing() {
  const [activeId, setActiveId] = useState("02");

  return (
    <section className="pricing-wrapper py-5 px-3">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill border mb-3"
            style={{
              backgroundColor: "#E8F5E9",
              color: "#2E7D32",
              borderColor: "#C8E6C9",
              padding: "8px 16px",
            }}
          >
            Ad Budget included
          </span>
          <h1 className="fw-bold mb-3 display-5">
            Social Media Marketing Packages
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Transparent pricing tailored to your needs, ensuring affordability
            without compromising on quality.
          </p>
        </div>
        <div
          className="row g-4 justify-content-center align-items-end"
          onMouseLeave={() => setActiveId("02")}
          style={{ minHeight: "100vh" }}
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-end p-1"
              onMouseEnter={() => setActiveId(plan.id)}
            >
              {/* IMAGE: Moves up/down based on active state */}
              <div className="icon-box">
                <img
                  src={plan.image}
                  alt="Icon"
                  className={`floating-img ${activeId === plan.id ? "up" : "down"}`}
                />
              </div>

              {/* FRAME: ID 02 is ALWAYS colorful, others are gray unless active */}
              <div
                className={`gradient-frame 
                  ${activeId === plan.id ? "active-padding" : "inactive-padding"} 
                  ${activeId === plan.id ? "always-gradient" : "gray-border"}
                  `}
              >
                {plan.id === plan.id && (
                  <div className="best-value-text">BEST VALUE TO PRICE</div>
                )}

                <div className="inner-card d-flex flex-column h-100">
                  <div className="card-top p-4 p-xl-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <small className="text-muted font-monospace">
                        {plan.id} {plan.type}
                      </small>
                      <span className="text-muted opacity-25">•••</span>
                    </div>

                    <h2 className="plan-name mb-1">{plan.name}</h2>
                    <p className="text-muted small mb-4">{plan.tagline}</p>

                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <button
                        className={`btn rounded-pill px-4 py-2 fw-bold transition-all ${activeId === plan.id ? "btn-primary shadow-blue" : "btn-light border"}`}
                      >
                        Select Plan
                      </button>
                      <div className="text-end">
                        <span className="h4 fw-bold mb-0">{plan.price}</span>
                        <small
                          className="text-muted"
                          style={{ fontSize: "10px" }}
                        >
                          /mo
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="card-bottom p-4 p-xl-5 grow">
                    <ul className="list-unstyled mb-0">
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className="mb-3 d-flex align-items-start small text-secondary"
                        >
                          <span className="me-3 text-primary">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-wrapper {
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* IMAGE ANIMATION */
        .icon-box {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .floating-img {
          width: 300px;
          height: auto;
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .up {
          transform: translateY(-90px);
          opacity: 1;
          filter: grayscale(0);
        }
        .down {
          transform: translateY(150px);
          opacity: 0.3;
          filter: grayscale(1);
        }

        /* BORDER COLORS */
        .always-gradient {
          background: linear-gradient(
            135deg,
            #c084fc,
            #f472b6,
            #fb923c
          ) !important;
        }
        .gray-border {
          background: #e5e7eb;
        }

        /* PADDING & SIZE */
        .gradient-frame {
          border-radius: 54px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          width: 100%;
          max-width: 400px;
        }
        .active-padding {
          padding: 45px 12px 12px 12px;
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        }
        .inactive-padding {
          padding: 5px;
          transform: scale(1);
          z-index: 1;
        }

        .inner-card {
          background: white;
          border-radius: 44px;
          height: 100%;
          overflow: hidden;
        }
        .plan-name {
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .best-value-text {
          position: absolute;
          top: 16px;
          left: 0;
          right: 0;
          color: white;
          font-size: 10px;
          font-weight: 800;
          text-align: center;
          text-transform: uppercase;
        }

        .btn-primary {
          background-color: #5850ec;
          border: none;
        }
        .shadow-blue {
          box-shadow: 0 10px 15px -3px rgba(88, 80, 236, 0.3);
        }
      `}</style>
    </section>
  );
}
