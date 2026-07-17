import React from "react";

const PricePlan = () => {
  const plans = [
    {
      name: "BASIC",
      posts: "6 Posts Per Month",
      description:
        "2 Video/Reel, 2 Static post, 2 gif,<br>the Basic Plan offers essential social<br>media maintenance to keep your<br>brand active online.",
      channels: "2 Social Handles",
      links: "(Facebook, Instagram)",
      monthly: "Monthly Maintaince",
      price: "233",
      pricetag: "$",
      pkr: "65,000 PKR",
      brand: "",
      logoline: "",
    },
    {
      name: "ADVANCED",
      posts: "12 Posts Per Month",
      description:
        "6 Video/Reel, 4 Static post, 2 gif,<br>30-Minutes Podcast,<br>30-Minutes Promotional Video<br>FH Group is designed for Growing<br>businesses seeking a more robust<br>social media presence.",
      brand: "MONTHLY REPORT<br>BRAND ANALYSIS",
      logoline: "DIGITAL MARKETING<br>INTEGRATION",
      channels: "5 Social Handles",
      links: "(Facebook, Instagram, Twitter,<br>LinkedIn, Pinterest)",
      monthly: "Monthly Maintaince",
      price: "305",
      pricetag: "$",
      pkr: "85,000 PKR",
    },
    {
      name: "STANDARD",
      posts: "10 Posts Per Month",
      description:
        "4 Video/Reel, 4 Static post, 2 gif,<br>FH Group is designed for Growing<br>businesses seeking a more robust social<br>media presence.",
      brand: "MONTHLY REPORT, INSIGHTS<br>AND RECOMMENDATIONS",
      logoline: "DIGITAL MARKETING<br>INTEGRATION",
      channels: "3 Social Handles",
      links: "(Facebook, Instagram, Twitter)",
      monthly: "Monthly Maintaince",
      price: "431",
      pricetag: "$",
      pkr: "120,000 PKR",
    },
  ];

  return (
    <section id="price-plan">
      <div className="fh-logo">
        <img
          src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png"
          alt="FH Logo"
        />
        <h4>
          FH DIGITAL SOLUTION <br />& INTEGRATION
        </h4>
      </div>
      <div className="price-plan">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="col-md-12 col-lg-4 social-plan px-0 my-2"
              >
                <h3>{plan.name}</h3>
                <h4 className="m-auto">{plan.posts}</h4>
                <p dangerouslySetInnerHTML={{ __html: plan.description }}></p>
                <h4 dangerouslySetInnerHTML={{ __html: plan.brand }}></h4>
                <h4 dangerouslySetInnerHTML={{ __html: plan.logoline }}></h4>
                <div className="plan-marg">
                  <h4 className="m-auto">{plan.channels}</h4>
                  <h5 dangerouslySetInnerHTML={{ __html: plan.links }}></h5>
                </div>
                <div>
                  <span>{plan.monthly}</span>
                  <h1>
                    {plan.price}
                    <span>{plan.pricetag}</span>
                  </h1>
                  <h6>{plan.pkr}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container pt-8">
        <div className="col-md-12">
          <h4>Basic Social Media Strategy</h4>
          <div className="price-plansection">
            <h6>Content Plan (6 Posts Per Month):</h6>
            <ol>
              <li>
                <strong>Video Posts (2/Month):</strong>
                <ul className="price-dots">
                  <li>
                    Create engaging video content showcasing products, services,
                    or behind-the-scenes activities.
                  </li>
                  <li>
                    Examples: Product launches, customer testimonials, or
                    tutorials.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Static Posts (2/Month):</strong>
                <ul className="price-dots">
                  <li>
                    High-quality images with compelling captions and CTAs.
                  </li>
                  <li>
                    Examples: Announcements, promotions, or motivational quotes
                    relevant to the brand.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Animated GIFs (2/Month):</strong>
                <ul className="price-dots">
                  <li>Use GIFs to add fun, movement, and interactivity.</li>
                  <li>
                    Examples: Seasonal greetings, countdowns to events, or
                    simple animations of brand elements.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="price-plansection">
            <h6>Monthly Deliverables:</h6>
            <ol>
              <li>
                <strong>Brand Analysis:</strong>
                <ul className="price-dots">
                  <li>
                    Track and report key metrics such as reach, engagement,
                    impressions, and follower growth.
                  </li>
                  <li>
                    Highlight top-performing posts and insights for improvement.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Social Analysis:</strong>
                <ul className="price-dots">
                  <li>Perform a SWOT analysis of the current strategy.</li>
                  <li>
                    Identify trends and opportunities to align content with
                    audience preferences.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-12">
          <h4>Advanced Social Media Strategy</h4>
          <div className="price-plansection">
            <h6>Content Plan (12 Posts Per Month):</h6>
            <ol>
              <li>
                <strong>Video Posts (6/Month):</strong>
                <ul className="price-dots">
                  <li>
                    High-quality, engaging videos tailored to specific audience
                    needs.
                  </li>
                  <li>
                    Examples:
                    <ul>
                      <li>Explainer videos (showcasing products/services).</li>
                      <li>Testimonial or success stories.</li>
                      <li>Industry updates or behind-the-scenes highlights.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Static Posts (4/Month):</strong>
                <ul className="price-dots">
                  <li>
                    Professional, on-brand visuals with strong messaging and
                    CTAs.
                  </li>
                  <li>
                    Examples: Promotions, industry insights, team highlights, or
                    audience polls.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Animated GIFs (2/Month):</strong>
                <ul className="price-dots">
                  <li>
                    Creative and dynamic animations to keep the feed lively and
                    engaging.
                  </li>
                  <li>
                    Examples: Quick tutorials, countdowns, or festive greetings.
                  </li>
                </ul>
              </li>
              <li>
                <strong>30-Minute Podcast (1/Month):</strong>
                <ul className="price-dots">
                  <li>
                    <strong>Purpose:</strong> Build brand authority and foster
                    deeper connections with the audience.
                  </li>
                  <li>
                    <strong>Content Ideas:</strong> Industry insights, expert
                    interviews, or Q&A sessions with followers.
                  </li>
                  <li>
                    <strong>Distribution:</strong> Share on Spotify, Apple
                    Podcasts, YouTube, and social snippets on platforms.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="price-plansection">
              <h6>Tools & Techniques:</h6>
              <ul className="price-dots">
                <li>
                  <strong>Scheduling:</strong> Use tools like Buffer, Hootsuite,
                  or Meta Business Suite to plan posts.
                </li>
                <li>
                  <strong>Analytics:</strong> Utilize platform insights (e.g.,
                  Instagram Insights, Facebook Analytics) for performance
                  tracking.
                </li>
                <li>
                  <strong>Design Tools:</strong> Canva or Adobe Creative Suite
                  for visuals and animations.
                </li>
              </ul>
            </div>
          </div>

          <div className="price-plansection">
            <h6>30-Minute Promotional Video Content (1/Month):</h6>
            <ul className="price-dots">
              <li>
                Purpose: Showcase comprehensive services/products in an engaging
                format.
              </li>
            </ul>
            <ol>
              <li>
                <strong>Focus Areas:</strong>
                <ul className="price-dots">
                  <li>Brand story or journey.</li>
                  <li>Case studies or in-depth client testimonials.</li>
                  <li>Highlights of events or campaigns.</li>
                  <li>
                    <strong>Editing Style:</strong> Professional, with
                    subtitles, transitions, and brand-aligned aesthetics.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Digital Marketing Integration:</strong>
                <ul className="price-dots">
                  <li>
                    <strong>Purposeful Paid Promotions:</strong>
                  </li>
                  <li>
                    <strong>Target Audience:</strong> Use data analytics to
                    create highly targeted campaigns based on demographics,
                    behaviors, and interests.
                  </li>
                  <li>
                    <strong>Campaign Types:</strong>
                    <ul>
                      <li>
                        Conversion-focused campaigns (driving sales or
                        sign-ups).
                      </li>
                      <li>Retargeting campaigns for website visitors.</li>
                      <li>Event or product launch campaigns.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Content Boosting:</strong>
                    <ul>
                      <li>
                        Promote high-performing posts to maximize reach and
                        engagement.
                      </li>
                      <li>
                        Optimize promotions weekly based on performance data.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <strong>Monthly Deliverables:</strong>
                <ul className="price-dots">
                  <li>
                    <strong>Monthly Report:</strong>
                  </li>
                  <li>
                    Detailed analytics on content performance (impressions,
                    engagement, reach).
                  </li>
                  <li>
                    Ad campaign performance (CTR, ROI, cost per conversion).
                  </li>
                  <li>Audience growth and engagement metrics.</li>
                  <li>
                    <strong>Social Brand Analysis:</strong>
                    <ul>
                      <li>
                        <strong> Brand Positioning:</strong> Insights into
                        audience perception and brand recall.
                      </li>
                      <li>
                        <strong>Competitive Analysis:</strong> Benchmark
                        performance against industry leaders.
                      </li>
                      <li>
                        <strong>Trend Analysis:</strong> Explore emerging trends
                        for future content adaptation.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Insights & Recommendations:</strong>
                    <ul>
                      <li>
                        Highlight top-performing strategies and suggest
                        data-backed improvements.
                      </li>
                      <li>
                        Propose innovative content ideas or campaigns for the
                        next month.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Engagement Strategy:</strong>
                    <ul>
                      <li>
                        Respond actively to audience interactions to nurture
                        community loyalty.
                      </li>
                      <li>
                        Run interactive activities like live Q&A sessions,
                        giveaways, or challenges.
                      </li>
                      <li>
                        Leverage user-generated content for authenticity and
                        trust-building.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Tools & Platforms:</strong>
                    <ul>
                      <li>
                        <strong> Content Design:</strong> Adobe Creative Suite,
                        After Effects for animations, Canva.
                      </li>
                      <li>
                        <strong>Podcast Tools:</strong> Anchor, Audacity, or
                        Riverside.fm for recording and editing.
                      </li>
                      <li>
                        <strong>Video Editing:</strong> Final Cut Pro, Premiere
                        Pro, or DaVinci Resolve.
                      </li>
                      <li>
                        <strong>Marketing Automation:</strong> HubSpot,
                        Hootsuite, or Buffer.
                      </li>
                      <li>
                        <strong>Analytics & Ad Tools:</strong> Sprout Social,
                        Google Analytics, Meta Ads Manager.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-12">
          <h4>Basic Social Media Strategy</h4>
          <div className="price-plansection">
            <h6>Content Plan (6 Posts Per Month):</h6>
            <ol>
              <li>
                <strong>Video Posts (2/Month):</strong>
                <ul className="price-dots">
                  <li>
                    Create engaging video content showcasing products, services,
                    or behind-the-scenes activities.
                  </li>
                  <li>
                    Examples: Product launches, customer testimonials, or
                    tutorials.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Static Posts (2/Month):</strong>
                <ul className="price-dots">
                  <li>
                    High-quality images with compelling captions and CTAs.
                  </li>
                  <li>
                    Examples: Announcements, promotions, or motivational quotes
                    relevant to the brand.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Animated GIFs (2/Month):</strong>
                <ul className="price-dots">
                  <li>Use GIFs to add fun, movement, and interactivity.</li>
                  <li>
                    Examples: Seasonal greetings, countdowns to events, or
                    simple animations of brand elements.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="price-plansection">
            <h6>Monthly Deliverables:</h6>
            <ol>
              <li>
                <strong>Brand Analysis:</strong>
                <ul className="price-dots">
                  <li>
                    Track and report key metrics such as reach, engagement,
                    impressions, and follower growth.
                  </li>
                  <li>
                    Highlight top-performing posts and insights for improvement.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Social Analysis:</strong>
                <ul className="price-dots">
                  <li>Perform a SWOT analysis of the current strategy.</li>
                  <li>
                    Identify trends and opportunities to align content with
                    audience preferences.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
