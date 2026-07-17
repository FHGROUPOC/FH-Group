"use client";
import React from "react";
import Link from "next/link";
import { 
  FaPlug, 
  FaShieldAlt, 
  FaCalendarCheck, 
  FaArrowRight 
} from "react-icons/fa";

const VoiceAgentSteps = () => {
  const steps = [
    {
      number: 1,
      icon: <FaShieldAlt style={{ color: "#4f46e5", fontSize: "18px" }} />,
      title: "Upload your knowledge base",
      des: "Drop in your services, pricing, FAQs, and policies — or point the agent at your website to scrape it automatically."
    },
    {
      number: 2,
      icon: <FaPlug style={{ color: "#4f46e5", fontSize: "18px" }} />,
      title: "Embed the voice widget",
      des: "One snippet on your site. The agent greets visitors in your brand voice within seconds."
    },
    {
      number: 3,
      icon: <FaCalendarCheck style={{ color: "#4f46e5", fontSize: "18px" }} />,
      title: "Capture leads & book live",
      des: "It qualifies the caller, answers their questions, and books a slot on the call — then routes the lead to your CRM."
    }
  ];

  return (
    <section className="voice-agent-steps">
      <div className="container">
        
        <div className="layout-wrapper">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="cta-col">
            <div className="info-badge">
              <FaPlug size={11} /> How it works
            </div>

            <h2>
              Live in three steps — no engineers required.
            </h2>

            <p className="description">
              From signup to a working voice receptionist on your site in under a day. 
              The same setup scales whether you run one business or fifty client sites.
            </p>

            <Link href="#" className="action-link">
              See it live <FaArrowRight size={12} />
            </Link>
          </div>

          {/* ================= RIGHT COLUMN (STEPS) ================= */}
          <div className="steps-col">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                
                {/* Overlapping Step Number */}
                <div className="step-number">
                  {step.number}
                </div>

                {/* Icon Wrapper */}
                <div className="icon-wrapper">
                  {step.icon}
                </div>

                {/* Card Title */}
                <h3>{step.title}</h3>

                {/* Card Description */}
                <p>{step.des}</p>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default VoiceAgentSteps;