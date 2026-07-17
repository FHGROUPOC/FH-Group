"use client";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMicrophone, FaMagic, FaBuilding, FaCheckCircle, FaHeadphones, FaPhoneAlt, FaCalendarAlt, FaBolt, FaRegCommentDots } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { LuMessageSquareMore } from "react-icons/lu";

interface DataType {
  img?: string;          
  sub_title?: string;    
  title: string;
  des: string;
  isVoiceAgent?: boolean; 
}

const hero_slider: DataType[] = [
  {
    isVoiceAgent: true,
    title: "The voice agent that answers, books & sells.",
    des: "Vox Bridge turns every visitor call into a booked appointment and a qualified lead. Embed it on your site in minutes — or whitelabel it to your clients and keep the margin.",
  }
];

const HeroHomeOne = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]} 
        loop={true}
        slidesPerView={1}
        speed={1100}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: false }}
        className="cs_slider cs_slider_1"
      >
        {hero_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {item.isVoiceAgent ? (
              /* =========================================================
                 INTEGRATED VOICE AGENT HERO BLOCK WITH FULL GRADIENTS & STYLES
                 ========================================================= */
              <div className="voice-agent-section" style={{ minHeight: '100%', position: 'relative', overflow: 'hidden' }}>
                
                {/* Background Decorators & Glow Layers */}
                <div className="bg-gradient-overlay"></div>
                <div className="blur-glow glow-left"></div>
                <div className="blur-glow glow-right"></div>
                
                <div className="container">
                  <div className="layout-grid">
                    
                    {/* Left Column - Content */}
                    <div className="content-col">
                      <div className="top-badge">
                        <FaMagic size={12} /> Voice AI · Live in under a day
                      </div>
                      
                      <h1>
                        The voice agent that <br />
                        <span>answers, books & sells.</span>
                      </h1>
                      
                      <p className="description">
                        {item.des}
                      </p>

                      <div className="cta-buttons">
                        <Link href="#" className="btn-primary">
                          <FaMicrophone /> Try the Voice Agent
                        </Link>
                        <Link href="#" className="btn-secondary">
                          <FaBuilding /> Whitelabel for Agencies
                        </Link>
                      </div>

                      <div className="info-subtext">
                        <FaCheckCircle /> No credit card to audition · Live in under a day
                      </div>

                      {/* Bottom Metrics Grid */}
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

                    {/* Right Column - Mockup Card */}
                    <div className="mockup-col">
                      <div className="widget-container">
                        <div className="widget-header">
                          <span className="live-demo-tag">
                            <FaHeadphones style={{ color: "#4f46e5" }} /> Live Demo — talk to Vox
                          </span>
                          <span className="status-badge">
                            <span className="status-dot"></span> Live now
                          </span>
                        </div>
                        
                        <div className="notice-box">
                          <h4 className="notice-title">Vox Bridge Platform</h4>
                          <p className="notice-desc">Ask Vox about pricing, whitelabel, or book a demo call.</p>
                        </div>

                        {/* Inside Widget UI Panel */}
                        <div className="live-panel">
                          <div className="panel-header">
                            <div className="panel-meta">
                              <div className="panel-avatar"></div>
                              <div className="panel-text">
                                <span>S2S Realtime Widget</span>
                                <h4>Vox Bridge Reception</h4>
                              </div>
                            </div>
                            <button className="panel-btn">
                              <FaPhoneAlt size={10} /> Speak with Sarah
                            </button>
                          </div>
                          
                          <div className="panel-body">
                            <div className="mic-avatar">
                              <FaMicrophone size={25} />
                            </div>
                            <h4>Test Client's Voice Agent</h4>
                            <p>
                              Start a live call to experience the AI receptionist. It will collect your details and book empty slots on the calendar instantly!
                            </p>
                            
                            <div className="mode-badges">
                              <span className="badge">
                                <FaBolt className="bolt-icon" /> Live Voice
                              </span>
                              <span className="badge badge-classic">
                                <FaRegCommentDots /> Classic Mode
                              </span>
                            </div>
                          </div>

                          <div className="panel-footer">
                            <FaCalendarAlt size={12} style={{ color: "#3b82f6" }} />
                            <span><strong>Open Slots:</strong> <em>No other available slots open</em></span>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Trusted By Brand Logos */}
                  <div className="trusted-logos-row">
                    <span className="trusted-title">Trusted by teams at</span>
                    <div className="logos-flex">
                      <span>Brightpath Dental</span>
                      <span>Northpeak Media</span>
                      <span>Crestline Realty</span>
                      <span>Lumen Legal</span>
                      <span>Harbor Insurance</span>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              /* =========================================================
                 YOUR ORIGINAL SLIDER LAYOUT (UNTOUCHED)
                 ========================================================= */
              <div className="cs_hero cs_style1 cs_center cs_parallax">
                <div
                  title={item.title}
                  className="cs_hero_bg cs_bg cs_parallax_bg"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="container">
                  <div className="cs_hero_text">
                    <div className="cs_hero_mini_title">
                      <svg
                        width="134"
                        height="12"
                        viewBox="0 0 134 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                          fill="#101010"
                        />
                      </svg>
                      {item.sub_title}
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <h1 className="cs_hero_title">{item.title}</h1>
                    <div className="cs_height_70 cs_height_lg_10"></div>
                    <div className="cs_hero_text_in">
                      <div className="cs_hero_subtitle">{item.des}</div>
                      <div className="cs_height_65 cs_height_lg_40"></div>
                      <div className="cs_hero_btn_wrap">
                        <div className="cs_round_btn_wrap">
                          <Link
                            href="/portfolio"
                            className="cs_hero_btn cs_round_btn btn-item"
                          >
                            <span></span>
                            Our Projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>
    </>
  );
};

export default HeroHomeOne;