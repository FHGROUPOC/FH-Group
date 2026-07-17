"use client";
import React, { useState } from "react";
import { FaRegCommentDots, FaChevronDown } from "react-icons/fa6";

interface FAQItem {
  question: string;
  answer: string;
}

const VoiceAgentFAQ = () => {
  // Track open index (-1 means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "How fast can I get a voice agent on my site?",
      answer: "You can get started in under 10 minutes. Simply upload your documentation or provide your website URL to train the agent, customize its greeting, and copy-paste the snippet directly into your site layout structure to go live immediately."
    },
    {
      question: "What does it actually sound like?",
      answer: "It sounds hyper-realistic and fully human-like. Built on real-time low-latency voice models, it captures nuances, processes conversational turns instantly, and responds without standard robotic delays or mechanical sounding cadences."
    },
    {
      question: "Can it answer questions specific to my business?",
      answer: "Yes, entirely. By uploading PDFs, text files, CSV tables, or pointing it to web endpoints, the voice agent absorbs your exact rules, pricing models, company hours, and operational answers, refusing to hallucinate outside your data borders."
    },
    {
      question: "I run an agency — can I resell this as my own?",
      answer: "Absolutely. Our specialized Whitelabel packages grant you a completely custom brand presentation console. You can establish your own margins, link custom domain mappings, and serve standalone dashboards directly to your clients."
    },
    {
      question: "What happens to the leads and recordings?",
      answer: "Every phone call compiles instant summaries alongside an accessible audio playback recording and raw textual scripts. These data records stream safely inside your unified web dashboard and push natively into targets like Webhooks, Sheets, or custom CRMs."
    },
    {
      question: "Which regions are supported?",
      answer: "We support low-latency worldwide routing tiers natively, assigning unique phone call channels internationally across global nodes so you can engage clients globally without encountering heavy system disruptions or regional connectivity dropouts."
    }
  ];

  return (
    <section className="voice-agent-faq">
      <div className="container">
        
        {/* ================= HEADER ================= */}
        <div className="faq-header">
          {/* Top Info Badge */}
          <div className="header-badge">
            <FaRegCommentDots size={12} style={{ color: "#64748b" }} /> FAQ
          </div>

          {/* Title */}
          <h2>Questions, answered.</h2>
        </div>

        {/* ================= ACCORDION WRAPPER ================= */}
        <div className="faq-accordion-wrapper">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="faq-item-card">
                
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-trigger"
                >
                  <span>{faq.question}</span>
                  
                  {/* Rotating Chevron Icon */}
                  <FaChevronDown 
                    size={14} 
                    className={`chevron-icon ${isOpen ? "open" : ""}`}
                  />
                </button>

                {/* Animated Inner Content Container Panel */}
                <div className={`faq-panel ${isOpen ? "open" : ""}`}>
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VoiceAgentFAQ;