"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaUserFriends } from "react-icons/fa";

const VoiceAgentOptions = () => {
  return (
    <section className="voice-agent-options">
      <div className="container">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="options-header">
          {/* Badge */}
          <div className="header-badge">
            <FaUserFriends size={12} /> Two ways to use Vox Bridge
          </div>

          {/* Main Title */}
          <h2>
            Run it on your site — or resell it as your <br /> own.
          </h2>

          {/* Subtitle */}
          <p className="header-desc">
            Whether you want one voice agent for your business or a voice-AI practice for your agency, the same platform.
          </p>
        </div>

        {/* ================= TWO OPTIONS CARDS GRID ================= */}
        <div className="options-grid">
          
          {/* --- LEFT CARD: FOR DIRECT BUSINESSES (WHITE CARD) --- */}
          <div className="option-card card-light">
            {/* Aspect Ratio Box holding the image */}
            <div 
              className="card-image"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop')" }}
            ></div>
            
            <div className="card-content">
              <div className="card-badge">
                For Direct Businesses
              </div>

              <h3>A receptionist that never misses a call</h3>

              <p>
                Put Vox Bridge on your website. It greets every visitor, answers questions from your knowledge base, books the appointment on the call, and routes the lead to your CRM.
              </p>

              <ul>
                <li>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Embed the widget in minutes — no engineers
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Answers pricing, hours & policy from your docs
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Books real slots from your calendar, live
                </li>
              </ul>

              <Link href="#" className="card-btn">
                See business pricing <FaArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* --- RIGHT CARD: FOR AGENCIES / WHITELABEL (DARK CARD) --- */}
          <div className="option-card card-dark">
            {/* Aspect Ratio Box holding the image */}
            <div 
              className="card-image"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop')" }}
            ></div>
            
            <div className="card-content">
              <div className="badge-group">
                <span className="card-badge badge-agency">
                  For Agencies
                </span>
                <span className="card-badge badge-whitelabel">
                  Whitelabel
                </span>
              </div>

              <h3>Ship a voice-AI product under your own brand</h3>

              <p>
                Give every client a branded voice receptionist with a fully white-labeled dashboard and widgets on your domain. You set per-client pricing and keep the margin; Vox Bridge handles everything behind the scenes.
              </p>

              <ul>
                <li>
                  <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> White-labeled dashboard, widgets & domain
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> Per-client multipliers — you set the margin
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> Manage unlimited clients from one console
                </li>
              </ul>

              <Link href="#" className="card-btn">
                See whitelabel tiers <FaArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VoiceAgentOptions;