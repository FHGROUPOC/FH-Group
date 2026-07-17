import React from "react";

const hero_data = {
  subtitle: `Welcome to Studio Pixel`,
  title_1: `Your Digital `,
  title_2: `Training Powerhouse`,
  des: `
At Studio Pixel, we believe in turning creative potential into powerful digital skills. Whether you're dreaming of becoming a Blender character animator, a professional Next.js web developer, or a certified Meta ads expert, we have the perfect course for you.
`,
};
const { subtitle, title_1, title_2, des } = hero_data;

const HeroHomeTwo = () => {
  return (
    <>
      <div className="cs_height_160 cs_height_lg_120"></div>
      <section>
        <div className="cs_hero cs_style4">
          <div className="cs_text_hero">
            <div className="cs_short_title anim_text_upanddowns">
              <img
                style={{ maxWidth: "300px", marginBottom: "15px" }}
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1752499776/Studio-Pixels-Logo_u1mlbs.webp"
                alt=""
              />
              <h6>{subtitle}</h6>
              <div className="cs_hr_design cs_color_1"></div>
            </div>
            <div className="anim_banner_text_left">
              <h1 className="cs_title_text cs_mp0">{title_1}</h1>
            </div>
            <div className="cs_text_section_1 gap-4 ">
              <div className="anim_banner_text_right">
                <h1 className="cs_title_text cs_mp0">{title_2}</h1>
              </div>
              <p
                className="cs_detils_text cs_mp0 anim_subtext"
                style={{ maxWidth: "1000px" }}
              >
                {des}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeTwo;
