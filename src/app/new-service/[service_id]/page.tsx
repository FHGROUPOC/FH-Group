import AboutHomeFour from "@/components/about/AboutHomeFour";
// import DetailsBanner from '@/components/details/DetailsBanner';
import AddReviews from "@/components/submit-reviews/review";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import HeroServiceDetails from "@/components/hero/HeroServiceDetails";
import ServiceAreaDetails from "@/components/service/ServiceAreaDetails";
import Testimonial from "@/components/testimonial/TestimonialNew";
import Service_data from "@/data/service_data";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import { getServerSession } from "next-auth";
import { ToastContainer } from "react-toastify";

// export const metadata = {
//   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// };

export async function generateMetadata({ params }: any) {
  // read route params
  const { service_id } = params; // Get the blog ID from the URL parameter
  const thisService = Service_data.find(
    (items: any) => items.linktitle === service_id
  );

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: thisService?.title,
    description: thisService?.desc,
    openGraph: {
      title: thisService?.title,
      description: thisService?.desc,
      images: thisService?.img,
      url: `https://www.fhgroupoc.com/service/${thisService?.linktitle}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: thisService?.title,
      description: thisService?.desc,
      images: thisService?.img,
    },
  };
}

export async function generateStaticParams() {
  return Service_data.map((items) => ({
    service_id: items?.linktitle,
  }));
}

const index = async ({ params }: any) => {
  const { service_id } = params;
  const session = await getServerSession();
  const thisService = Service_data.find(
    (items: any) => items.linktitle === service_id
  );

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails thisService={thisService} />
            <ServiceAreaDetails thisService={thisService} />
            <Testimonial
              service_name={thisService?.title}
              style_service={null}
            />
            {session && <AddReviews service_name={thisService?.title} />}
            {/* <DetailsBanner /> */}
            <ServiceDetailsFaq thisService={thisService} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default index;
