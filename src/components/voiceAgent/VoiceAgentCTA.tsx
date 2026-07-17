"use client";
import React from "react";
import Link from "next/link";
import { FaMicrophone, FaArrowRight } from "react-icons/fa6";

const VoiceAgentCTA = () => {
  return (
    <section className="voice-agent-cta">
      <div className="container">
        
        {/* ================= GRADIENT BANNER BOX ================= */}
        <div className="gradient-banner-box">
          
          {/* Top Microphone Icon */}
          <div className="mic-icon-wrapper">
            <FaMicrophone size={20} style={{ color: "#ffffff" }} />
          </div>

          {/* Heading */}
          <h2>Hear it for yourself.</h2>

          {/* Subtitle Description */}
          <p className="cta-desc">
            Talk to Vox below — ask about pricing, whitelabel, or book a demo call. It's the same agent your visitors will meet.
          </p>

          {/* Button Group */}
          <div className="button-group">
            
            {/* White Demo Button */}
            <Link href="#" className="btn-cta btn-white">
              <FaMicrophone size={14} /> Try the live demo
            </Link>

            {/* Transparent Bordered Button */}
            <Link href="#" className="btn-cta btn-outline">
              Get started <FaArrowRight size={13} />
            </Link>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default VoiceAgentCTA;