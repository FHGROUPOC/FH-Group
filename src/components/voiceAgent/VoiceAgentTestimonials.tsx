"use client";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const VoiceAgentTestimonials = () => {
  const testimonials = [
    {
      quote: "“We booked 40+ demos in the first month the widget went live — calls we would have missed outright. It pays for itself.”",
      name: "Sara Lin",
      role: "Founder, Brightpath Dental",
      initials: "SL",
      avatarBg: "#ff4b91",
    },
    {
      quote: "“We rolled Vox Bridge out to 18 of our agency clients under our own brand. Our retention went up and our margin with it.”",
      name: "Marcus Webb",
      role: "Managing Partner, Northpeak Media",
      initials: "MW",
      avatarBg: "#3b82f6",
    },
    {
      quote: "“It finally sounds like a real person on the line. Callers don't ask 'is this a robot?' anymore.”",
      name: "Priya Nair",
      role: "Ops Lead, Crestline Realty",
      initials: "PN",
      avatarBg: "#ff9f00",
    },
  ];

  return (
    <section className="voice-agent-testimonials">
      <div className="container">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="testimonials-header">
          {/* Top Badge */}
          <div className="header-badge">
            <FaStar size={11} style={{ color: "#f59e0b" }} /> Loved by the teams using it
          </div>

          {/* Main Section Title */}
          <h2>
            More calls answered, more demos <br /> booked.
          </h2>
        </div>

        {/* ================= CARDS GRID SECTION ================= */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              
              <div>
                {/* Visual Quote Icon */}
                <FaQuoteLeft className="quote-icon" />
                
                {/* Actual Quote Text */}
                <p className="quote-text">
                  {item.quote}
                </p>
              </div>

              {/* User Profile Info Footer Block */}
              <div className="card-footer">
                {/* Initials Avatar */}
                <div 
                  className="avatar" 
                  style={{ background: item.avatarBg }}
                >
                  {item.initials}
                </div>

                {/* Identity Metadata */}
                <div className="user-meta">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VoiceAgentTestimonials;