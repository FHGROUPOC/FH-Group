"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaMagic, 
  FaMicrophone, 
  FaBuilding, 
  FaCheckCircle, 
  FaHeadphones, 
  FaPhoneAlt,
  FaCalendarAlt,
  FaBolt,
  FaRegCommentDots,
  FaPaperPlane
} from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";

const VoiceAgentSection = () => {
  // Track continuous call status logic
  const [isCallActive, setIsCallActive] = useState<boolean>(false);
  const [isScriptReady, setIsScriptReady] = useState<boolean>(false);

  // Form states jisme live call ka data real-time map hoga
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    purpose: "",
    slot: ""
  });

  // Background hook jo layout script loading state ko safe verify karega
  useEffect(() => {
    const checkScriptInterval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).VoxBridge) {
        setIsScriptReady(true);
        clearInterval(checkScriptInterval);
      }
    }, 500); // Har 500ms baad check karega jab tak layout script hook nahi hoti

    return () => clearInterval(checkScriptInterval);
  }, []);

  // Call Start Function — Mic permissions aur automated script integration ke sath
  const handleStartCall = async () => {
    try {
      // 1. Browser se Microphone ki permission request karein taake actual voice initiate ho
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      }

      setIsCallActive(true);

      // 2. Custom Script Method binds
      if (typeof window !== "undefined") {
        const vox = (window as any).VoxBridge;
        
        if (vox) {
          // Agar unka system dynamic variables structures initialize kar chuka hai
          if (typeof vox.startCall === "function") {
            vox.startCall({
              onDataCapture: (updatedData: any) => {
                setFormData(prev => ({
                  ...prev,
                  fullName: updatedData.name || prev.fullName,
                  phone: updatedData.phone || prev.phone,
                  email: updatedData.email || prev.email,
                  purpose: updatedData.purpose || prev.purpose,
                  slot: updatedData.slot || prev.slot
                }));
              },
              onCallEnd: () => setIsCallActive(false)
            });
          } else if (typeof vox.init === "function") {
            vox.init();
          } else {
            // Alternative click bypass fallback methods
            triggerFallbackWidgetBtn();
          }
        } else {
          // If native global checks miss, simulate widget trigger bypass directly
          triggerFallbackWidgetBtn();
        }
      }
    } catch (err) {
      alert("Microphone access denied or widget script loading is incomplete!");
      console.error(err);
      setIsCallActive(false);
    }
  };

  // Helper utility function targeting the widget container elements
  const triggerFallbackWidgetBtn = () => {
    const selectorBtn = document.querySelector('[id*="vox-bridge"], [class*="vox-widget"], #vox-bridge-widget-btn, .vox-bridge-bubble') as HTMLElement;
    if (selectorBtn) {
      selectorBtn.click();
    } else {
      console.warn("Vox Bridge floating UI node element not found in DOM context yet.");
    }
  };

  // Call End Function
  const handleEndCall = () => {
    setIsCallActive(false);
    if (typeof window !== "undefined") {
      const vox = (window as any).VoxBridge;
      if (vox && typeof vox.endCall === "function") {
        vox.endCall();
      } else {
        // Injected floating element fallback click bypass
        const selectorBtn = document.querySelector('[id*="vox-bridge-end"], .vox-widget-close, [class*="close-call"]') as HTMLElement;
        if (selectorBtn) selectorBtn.click();
      }
    }
  };

  return (
    <section className="voice-agent-section">
      
      {/* ================= BACKGROUND GRADIENT OVERLAYS ================= */}
      <div className="bg-gradient-overlay"></div>
      <div className="blur-glow glow-left"></div>
      <div className="blur-glow glow-right"></div>
      
      <div className="container">
        
        {/* Main Two-Column Layout */}
        <div className="layout-grid">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="content-col">
            {/* Top Badge */}
            <div className="top-badge">
              <FaMagic size={12} /> Voice AI · Live in under a day
            </div>
            
            {/* Main Title */}
            <h1>
              The voice agent that <br />
              <span>answers, books & sells.</span>
            </h1>
            
            {/* Description */}
            <p className="description">
              Vox Bridge turns every visitor call into a booked appointment and a qualified lead. 
              Embed it on your site in minutes — or whitelabel it to your clients and keep the margin.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button onClick={handleStartCall} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                <FaMicrophone /> Try the Voice Agent
              </button>
              <Link href="#" className="btn-secondary">
                <FaBuilding /> Whitelabel for Agencies
              </Link>
            </div>

            {/* Subtext info */}
            <div className="info-subtext">
              <FaCheckCircle /> No credit card to audition · Live in under a day
            </div>

            {/* Metrics Grid */}
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-num">&lt;1s</div>
                <div className="metric-label">Replies in under a second</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">24/7</div>
                <div className="metric-label">Captures calls, never sleeps</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">12+</div>
                <div className="metric-label">Languages spoken live</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">90%</div>
                <div className="metric-label">Less front-desk staffing</div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (WIDGET) ================= */}
          <div className="mockup-col">
            <div className="widget-container" style={{ transition: "all 0.4s ease" }}>
              
              {/* Conditional State Renderer based on Call Actions */}
              {!isCallActive ? (
                /* ================= STATE A: IDLE INTAKE ENTRY ================= */
                <>
                  {/* Widget Header status */}
                  <div className="widget-header">
                    <span className="live-demo-tag">
                      <FaHeadphones style={{ color: "#4f46e5" }} /> Live Demo — talk to Vox
                    </span>
                    <span className="status-badge">
                      <span className="status-dot"></span> Live now
                    </span>
                  </div>
                  
                  {/* Notice Box */}
                  <div className="notice-box">
                    <h4 className="notice-title">Vox Bridge Platform</h4>
                    <p className="notice-desc">Ask Vox about pricing, whitelabel, or book a demo call.</p>
                  </div>

                  {/* Inside Live Mockup Panel */}
                  <div className="live-panel">
                    <div className="panel-header">
                      <div className="panel-meta">
                        <div className="panel-avatar"></div>
                        <div className="panel-text">
                          <span>S2S Realtime Widget</span>
                          <h4>Vox Bridge Reception</h4>
                        </div>
                      </div>
                      <button onClick={handleStartCall} className="panel-btn">
                        <FaPhoneAlt size={10} /> Speak with Sarah
                      </button>
                    </div>
                    
                    {/* Visual Interface Content */}
                    <div className="panel-body">
                      <div className="mic-avatar">
                        <FaMicrophone size={25} />
                      </div>
                      <h4>Test Client's Voice Agent</h4>
                      <p>
                        Start a live call to experience the AI receptionist. It will collect your details and book empty slots on the calendar instantly!
                      </p>
                      
                      {/* Action Mode Badges */}
                      <div className="mode-badges">
                        <span className="badge">
                          <FaBolt className="bolt-icon" /> Live Voice
                        </span>
                        <span className="badge badge-classic">
                          <FaRegCommentDots /> Classic Mode
                        </span>
                      </div>
                    </div>

                    {/* Open Slots Footer */}
                    <div className="panel-footer">
                      <FaCalendarAlt size={12} style={{ color: "#3b82f6" }} />
                      <span><strong>Open Slots:</strong> <em>No other available slots open</em></span>
                    </div>
                  </div>
                </>
              ) : (
                /* ================= STATE B: ACTIVE VOICE CALL INTERFACE ================= */
                <div className="active-call-interface" style={{ animation: "fadeIn 0.3s ease" }}>
                  
                  {/* Active Header Panel */}
                  <div className="active-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', padding: '16px 20px', borderRadius: '16px 16px 0 0', margin: '-24px -24px 20px -24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                      <div>
                        <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', display: 'block', fontWeight: 600, letterSpacing: '0.05em' }}>S2S Realtime Widget</span>
                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Vox Bridge Reception</h4>
                      </div>
                    </div>
                    <span style={{ fontSize: '11px', background: '#1e293b', color: '#10b981', padding: '2px 8px', borderRadius: '4px', fontWeight: '700', marginRight: '12px' }}>0ms</span>
                    <button onClick={handleEndCall} style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ImPhoneHangUp size={12} /> End Call
                    </button>
                  </div>

                  {/* Mic Status Area */}
                  <div style={{ background: '#f8fafc', border: '1px dashed #e2e8f0', borderRadius: '12px', padding: '12px 16px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.05em' }}>MIC ACTIVE (REAL-TIME STREAM)</div>
                      <div style={{ fontSize: '11.5px', color: '#10b981', fontWeight: '600', marginTop: '2px' }}>Speak naturally. Sarah is listening...</div>
                    </div>
                    <div style={{ color: '#4f46e5', letterSpacing: '1px', fontWeight: '700', fontSize: '14px' }}>•••••••••</div>
                  </div>

                  {/* Visitor Credentials Intake Form Block */}
                  <div style={{ border: '1px solid #eef2f6', background: '#f8fafc', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '12.5px', color: '#4f46e5', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                        👤 Visitor Credentials & Intake Form
                      </span>
                      <span style={{ background: '#dbeafe', color: '#2563eb', fontSize: '10px', padding: '2px 8px', borderRadius: '4px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px', letterSpacing: '0.05em' }}>
                        🔴 LIVE LOCK
                      </span>
                    </div>

                    {/* Inputs Matrix Setup Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Full Name</label>
                        <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} placeholder="e.g. John Doe" style={{ width: '100%', padding: '10px 12px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#1e293b', outline: 'none' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Phone Number</label>
                        <input type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="e.g. 555-0199" style={{ width: '100%', padding: '10px 12px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#1e293b', outline: 'none' }} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Email Address</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="e.g. john@example.com" style={{ width: '100%', padding: '10px 12px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#1e293b', outline: 'none' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Appointment Slot</label>
                        <select style={{ width: '100%', padding: '10px 12px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#1e293b', outline: 'none', appearance: 'none' }} value={formData.slot} onChange={(e) => setFormData({...formData, slot: e.target.value})}>
                          <option value="">{formData.slot || "-- Select Slot --"}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Purpose of Visit</label>
                      <input type="text" value={formData.purpose} onChange={(e) => setFormData({...formData, purpose: e.target.value})} placeholder="e.g. Consultation" style={{ width: '100%', padding: '10px 12px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#1e293b', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Transcript Display */}
                  <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 4px 12px rgba(0,0,0,0.01)', marginBottom: '20px' }}>
                    <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.5', margin: '0', fontWeight: '500' }}>
                      Connected to Vox Bridge's virtual assistant, Sarah. Speak naturally to begin...
                    </p>
                  </div>

                  {/* Message Input controls */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
                    <button style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eef2ff', border: 'none', borderRadius: '50%', color: '#4f46e5', cursor: 'pointer' }}>
                      <FaMicrophone size={16} />
                    </button>
                    <div style={{ flexGrow: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <input type="text" placeholder="Type message or ask to book slot..." style={{ width: '100%', padding: '12px 48px 12px 16px', border: '1px solid #e2e8f0', borderRadius: '24px', fontSize: '13.5px', color: '#1e293b', outline: 'none', background: '#fff' }} />
                      <button style={{ position: 'absolute', right: '16px', background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <FaPaperPlane size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Slots Sub-footer Row */}
                  <div style={{ background: '#eff6ff', color: '#2563eb', fontSize: '12px', padding: '12px 20px', borderRadius: '0 0 16px 16px', margin: '0 -24px -24px -24px', borderTop: '1px solid #e2e8f0', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FaCalendarAlt size={12} style={{ color: "#3b82f6" }} />
                    <span><strong>Open Slots:</strong> <em style={{ color: '#60a5fa', marginLeft: '4px' }}>No other available slots open</em></span>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

        {/* ================= TRUSTED BY LOGO BAR SECTION ================= */}
        <div className="trusted-logos-row">
          <span className="trusted-title">
            Trusted by teams at
          </span>
          <div className="logos-flex">
            <span>Brightpath Dental</span>
            <span>Northpeak Media</span>
            <span>Crestline Realty</span>
            <span>Lumen Legal</span>
            <span>Harbor Insurance</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VoiceAgentSection;