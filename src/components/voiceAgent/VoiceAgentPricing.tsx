"use client";
import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt, FaCheckCircle, FaBuilding } from "react-icons/fa";

const VoiceAgentPricing = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "100px 0", fontFamily: "inherit" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* ================= HEADER SECTION ================= */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "6px", 
            background: "#eff6ff", 
            color: "#3b82f6", 
            padding: "6px 16px", 
            borderRadius: "20px", 
            fontSize: "13px", 
            fontWeight: "700", 
            marginBottom: "20px" 
          }}>
            <FaRegCalendarAlt size={12} /> Pricing
          </div>

          <h2 style={{ 
            fontSize: "36px", 
            fontWeight: "800", 
            lineHeight: "1.2", 
            color: "#0f172a", 
            marginBottom: "18px", 
            letterSpacing: "-0.03em" 
          }}>
            Start small. Scale to a whitelabel <br /> practice.
          </h2>

          <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            Direct plans for one business, whitelabel tiers for agencies. Cancel or upgrade anytime.
          </p>
        </div>

        {/* ================= TOP SECTION: STANDARD PLANS ================= */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "32px", 
          justifyContent: "flex-start", 
          alignItems: "stretch",
          marginBottom: "48px"
        }}>
          
          {/* Card 1: Pay As You Go */}
          <div style={{  
            maxWidth: "420px",
            background: "#ffffff", 
            border: "1px solid #e2e8f0", 
            borderRadius: "24px", 
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Pay as you go
              </span>
              <div style={{ display: "flex", alignItems: "baseline", margin: "16px 0 8px 0" }}>
                <span style={{ fontSize: "42px", fontWeight: "800", color: "#0f172a" }}>$ 0.1</span>
                <span style={{ fontSize: "15px", color: "#64748b", marginLeft: "4px" }}>/ minute</span>
              </div>
              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px" }}>Try it on your site today. No commitment.</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Realtime voice agent
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Custom knowledge base (PDFs, site scrape)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Appointment booking + calendar sync
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Lead capture to dashboard
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> Email support
                </li>
              </ul>
            </div>

            <Link href="#" style={{ 
              background: "#f1f5f9", color: "#1e293b", textAlign: "center", padding: "14px", borderRadius: "12px", 
              fontWeight: "700", textDecoration: "none", display: "block", marginTop: "40px", fontSize: "15px"
            }}>
              Start free audition
            </Link>
          </div>

          {/* Card 2: Starter (Most Popular) */}
          <div style={{ 
            maxWidth: "420px",
            background: "#ffffff", 
            border: "2px solid #4f46e5", 
            borderRadius: "24px", 
            padding: "40px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0px 20px 40px rgba(79, 70, 229, 0.05)"
          }}>
            <div style={{
              position: "absolute", top: "-14px", left: "24px", background: "#4f46e5", color: "#ffffff",
              fontSize: "10px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.05em"
            }}>
              Most Popular
            </div>

            <div>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Starter
              </span>
              <div style={{ display: "flex", alignItems: "baseline", margin: "16px 0 8px 0" }}>
                <span style={{ fontSize: "42px", fontWeight: "800", color: "#0f172a" }}>$ 199</span>
                <span style={{ fontSize: "15px", color: "#64748b", marginLeft: "4px" }}>/ month</span>
              </div>
              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px" }}>Local Business who wants every call answered</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> 3000 minutes included.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                  <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} /> embed in your own website.
                </li>
              </ul>
            </div>

            <Link href="#" style={{ 
              background: "#4f46e5", color: "#ffffff", textAlign: "center", padding: "14px", borderRadius: "12px", 
              fontWeight: "700", textDecoration: "none", display: "block", marginTop: "40px", fontSize: "15px"
            }}>
              Get Business
            </Link>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: WHITELABEL AGENCY DASHBOARD ================= */}
        <div style={{ 
          background: "#090d16", 
          borderRadius: "32px", 
          padding: "50px",
          color: "#ffffff"
        }}>
          {/* Internal Block Header */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#38bdf8", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              <FaBuilding size={12} /> Whitelabel for Agencies
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "8px", letterSpacing: "-0.01em",color: "#ffffff" }}>
              Resell voice AI under your own brand
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>
              Per-client multipliers, fully white-labeled dashboards & widgets, dedicated support.
            </p>
          </div>

          {/* Sub Grid Cards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            
            {/* Dark Card 1 */}
            <div style={{  
              flex: "1 1 300px",
              background: "#0f172a", 
              border: "1px solid #1e293b", 
              borderRadius: "20px", 
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Starter Agency
                </span>
                <div style={{ display: "flex", alignItems: "baseline", margin: "14px 0 6px 0" }}>
                  <span style={{ fontSize: "36px", fontWeight: "800" }}>$ 498</span>
                  <span style={{ fontSize: "14px", color: "#94a3b8", marginLeft: "4px" }}>/ month</span>
                </div>
                <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "24px" }}>Freelancers launching their first voice-AI offering.</p>
                
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#cbd5e1" }}>
                    <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> Up to 5 client accounts
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#cbd5e1" }}>
                    <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> Custom whitelabel onboarding
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#cbd5e1" }}>
                    <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> Standard support
                  </li>
                </ul>
              </div>

              <Link href="#" style={{ 
                background: "#1e293b", color: "#ffffff", textAlign: "center", padding: "12px", borderRadius: "10px", 
                fontWeight: "600", textDecoration: "none", display: "block", marginTop: "32px", fontSize: "14px"
              }}>
                Select Starter
              </Link>
            </div>

            {/* Dark Card 2 */}
            <div style={{ 
              flex: "1 1 300px", 
              background: "#0f172a", 
              border: "1px solid #1e293b", 
              borderRadius: "20px", 
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  White-1000
                </span>
                <div style={{ display: "flex", alignItems: "baseline", margin: "14px 0 6px 0" }}>
                  <span style={{ fontSize: "36px", fontWeight: "800" }}>$ 998</span>
                  <span style={{ fontSize: "14px", color: "#94a3b8", marginLeft: "4px" }}>/ month</span>
                </div>
                <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "24px" }}>white label agency tier 2</p>
                
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#cbd5e1" }}>
                    <FaCheckCircle style={{ color: "#38bdf8", flexShrink: 0 }} /> upto 20 clients
                  </li>
                </ul>
              </div>

              <Link href="#" style={{ 
                background: "#1e293b", color: "#ffffff", textAlign: "center", padding: "12px", borderRadius: "10px", 
                fontWeight: "600", textDecoration: "none", display: "block", marginTop: "32px", fontSize: "14px"
              }}>
                Get Business
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VoiceAgentPricing;