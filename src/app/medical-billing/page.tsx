
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MedicalVideoHomeFour from '../../components/video/MedicalVideoHomeFour';
import MedicalFeatureHomeTwo from '../../components/feature/MedicalFeatureHomeTwo';
import MedicalHomeFour from '../../components/hero/MedicalHeroHomeFour';
import MedicalFunFactHomeOne from '../../components/funfact/MedicalFunFactHomeOne ';
import MedicalAwardsHomeOne from '../../components/awards/MedicalAwardsHomeOne';
import MedicalServiceHomeFour from '../../components/service/MedicalServicesHomeFour';
import MedicalPortfolioHomeFour from '../../components/portfolio/MedicalPortolioHomeFour';
import MedicalTestimonial from '../../components/testimonial/MedicalTestimonial';
import MedicalBrandHomeOne from '../../components/brand/MedicalBrandHomeOne';
import MedicalTeamHomeTwo from '../../components/team/MedicalTeamHomeTwo';
import MedicalBlogHomeOne from '../../components/blog/MedicalBlogHomeOne';
import MedicalAboutHomeFour from '../../components/about/MedicalAboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';



export const metadata = {
  title: "Creative Protfolio Vixan - Digital  Creative Agency Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />         
      <div id="scrollsmoother-container">
        <MedicalHomeFour />
        <MedicalVideoHomeFour />
        <MedicalServiceHomeFour />
        <MedicalFeatureHomeTwo style_2={true} />
        <MedicalPortfolioHomeFour />
        <MedicalFunFactHomeOne style_2={true} />
        <MedicalAwardsHomeOne />
        <MedicalTestimonial />
        <MedicalTeamHomeTwo style_2={true} />
        <MedicalBrandHomeOne   />
        <MedicalBlogHomeOne style_2={true} />
        <MedicalAboutHomeFour />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;