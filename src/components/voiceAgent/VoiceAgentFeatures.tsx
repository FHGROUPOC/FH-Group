"use client";
import React from "react";
import { 
  FaRegCalendarAlt, 
  FaGlobe, 
  FaPalette,
  FaBolt
} from "react-icons/fa";
import { FaShieldHalved, FaChartSimple } from "react-icons/fa6";

const VoiceAgentFeatures = () => {
  const features = [
    {
      icon: <FaBolt style={{ color: "#fff", fontSize: "18px" }} />,
      title: "Answers in real time",
      des: "Live voice keeps the conversation flowing naturally — no awkward pauses, no robotic delays."
    },
    {
      icon: <FaRegCalendarAlt style={{ color: "#fff", fontSize: "18px" }} />,
      title: "Books appointments live",
      des: "Reads your calendar, offers open slots, and confirms bookings on the call — then fires the invite automatically."
    },
    {
      icon: <FaShieldHalved style={{ color: "#fff", fontSize: "18px" }} />,
      title: "Knows your business",
      des: "Upload PDFs, docs, CSVs, or scrape your site. The agent answers pricing, policy, and service questions in your voice."
    },
    {
      icon: <FaGlobe style={{ color: "#fff", fontSize: "18px" }} />,
      title: "Always on, on your site",
      des: "Embed the widget on your site. Same brain on every page, one inbox of leads — it never misses a visitor."
    },
    {
      icon: <FaChartSimple style={{ color: "#fff", fontSize: "18px" }} />,
      title: "Leads straight to your CRM",
      des: "Every call becomes a structured lead with recording, transcript, and intake fields — synced to Sheets or your CRM."
    },
    {
      icon: <FaPalette style={{ color: "#fff", fontSize: "18px" }} />,
      title: "Whitelabeled to your brand",
      des: "Your colors, your domain, your voice. Agencies can resell it as their own with a fully white-labeled dashboard."
    }
  ];

  return (
    <section className="voice-agent-features">
      <div className="container">
        
        {/* Header */}
        <div className="features-header">
          <div className="header-badge">
            <FaBolt size={10} style={{ color: "#4f46e5" }} /> Why Vox Bridge
          </div>

          <h2>
            Everything a great receptionist does — <br />
            <span>without the hold music.</span>
          </h2>

          <p className="header-desc">
            One agent that answers questions, books the slot, and routes the lead — in your brand voice, on every channel.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card">
              
              {/* Icon Container Box */}
              <div className="icon-box">
                {item.icon}
              </div>

              {/* Title */}
              <h3>{item.title}</h3>

              {/* Description */}
              <p>{item.des}</p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VoiceAgentFeatures;