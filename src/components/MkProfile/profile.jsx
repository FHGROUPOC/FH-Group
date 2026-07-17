import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
import { generateVCard } from "../../utils/vcard";


const Profile = () => {
  return (
    <section id="profile-vcard">
      <div className="profilecontainer">
        <div className="profilecard">
          <div className="profileImage">
            <img
              src="https://i.pinimg.com/280x280_RS/bf/f9/10/bff9105c7c733b91f00d5df3f6c965a4.jpg"
              alt="Profile"
            />
          </div>

          <h1 className="profilename">M.GULZAR AHMED</h1>
          <p className="profiletitle"> Managing Director</p>
          <p className="profiledescription">
            To work with determination & commitment in an organisation, where my
            passion can produce great results.
          </p>

          <div className="profilesocialIcons">
            <a href="https://www.instagram.com/mkgulxar?igsh=d3kyNWRqazE3cHN2" target="_blank" className="icon">
              <FaInstagram fontSize={20} />
            </a>
            <a href="https://www.facebook.com/share/1FM2MttJcU/?mibextid=wwXIfr" target="_blank" className="icon">
              <FaFacebookF fontSize={20} />
            </a>
            <a href="https://x.com/mk_gulzar?s=21&t=ZVKqAMSPchFnv_B1mLKAxA" target="_blank" className="icon">
              <FaTwitter fontSize={20} />
            </a>
            <a href="https://www.pinterest.com/mkgulxar/" target="_blank" className="icon">
              <FaPinterestP fontSize={20} />
            </a>
            <a href="https://wa.me/+923224447077" target="_blank"  className="icon">
              <FaWhatsapp fontSize={20} />
            </a>
            <a href="mailto:mkgulzar@email.com" target="_blank"  className="icon">
              <MdEmail fontSize={20} />
            </a>
          </div>
          {/* <div className="profilesection">
            <h2 className="profilesectionTitle">M BIO</h2>
            <p className="profiletext">
              I' m a student of continually changing phases of the world in the
              field of digital graphic art. Making lives and professions
              colorful, for them to have a unique presentable look. I have got
              my professional learning certificates in the concerned field. It
              is also imperative to mention that I have been a part of every
              pioneer team to launch a new broadcast channel in Pakistan
            </p>
          </div> */}

          {/* <div className="profilesectionTwo">
            <h2 className="profileTitle">Professional Experience</h2>
            <p>ADVERTISING, SOFTWARE HOUSE & BROADCAST</p>
          </div> */}
          <div className="experienceCard">
            <div className="experience">
              <div className="profilelogo">
                <img
                  src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png"
                  alt=""
                />
              </div>
              <div>
                <p className="profilecompany">FH Group of Companies</p>
                <p className="profilerole">Digital Solution and Integration</p>
                <p className="profiletext">
                  Advertising agency experience is very different and openly
                  gives you space for playing in the market and building your
                  skills & experience.
                </p>
              </div>
            </div>
            {/* <div className="experience">
            <div className="profilelogo">
              <img
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/hxcufj9g3w7htvgaiqat.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="profilecompany">PUBLIC NEWS <span style={{fontWeight:400}}>tv channel</span></p>
              <p className="profilerole">creative head</p>
              <p className="profiletext">
              Channel thematic, Channel Programming graphics, event & comping
              launching and screen maintenance overall channel graphics.
              </p>
            </div>
          </div>

          <div className="experience">
            <div className="profilelogo">
              <img
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1736432034/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/bwlgwxotjdfntlxilxmk.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="profilecompany">PUBLIC NEWS <span style={{fontWeight:400}}>tv channel</span></p>
              <p className="profilerole">creative head</p>
              <p className="profiletext">
              Channel thematic, Channel Programming graphics, event & comping
              launching and screen maintenance overall channel graphics.
              </p>
            </div>
          </div> */}



          </div>

          <button onClick={generateVCard} className="profilesaveButton">Save in Contact</button>
          <div className="profilelink">
            <Link href="https://www.fhgroupoc.com/">www.fhgroupoc.com</Link>
          </div>

          {/* <div className="experienceCard">
          
          <div className="job">
            <div className="logo">
              <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png" alt="" />
            </div>
            <div className="details">
              <h3>FH GROUP OF COMPANIES</h3>
              <p><strong>Managing Director</strong></p>
              <p>Advertising agency experience is very different and openly gives you space for playing in the market and building up your skills & experience.</p>
            </div>
          </div>

          
          <div className="job">
            <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1732801050/FHGROUPOC/PORTFOLIOS/LOGOS/c1xqmxjwzewbebyyyi16.jpg" alt="Public News" className="logo" />
            <div className="details">
              <h3>PUBLIC NEWS tv channel</h3>
              <p><strong>Creative Head</strong></p>
              <p>Channel thematic, Channel Programming graphics, event & comping launching and screen maintenance overall channel graphics.</p>
            </div>
          </div>

        
          <div className="job">
            <img src="/expressnews.png" alt="Express News" className="logo" />
            <div className="details">
              <h3>EXPRESS NEWS tv channel</h3>
              <p><strong>Group Manager Creative</strong></p>
              <p>Joined in 2005 before launch and started my work as a Graphic Artist creating overlay, 2D, and 3D packages, Video Wall Animation, Breaking Work, and Event Graphics.</p>
            </div>
          </div>

         
          <div className="job">
            <img src="/filmazia.png" alt="Filmazia" className="logo" />
            <div className="details">
              <h3>FILMAZIA tv channel</h3>
              <p><strong>3D Animator | Compositor</strong></p>
              <p>Joined in 2001 and started working as a 3D artist, worked from 3D modelling to texturing and animation for channel ID & Program title timing jackets project for transmission department, old movies treatment.</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
